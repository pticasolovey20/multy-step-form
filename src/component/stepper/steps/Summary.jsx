import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { calculatePrice, classNames } from "../../../utils";
import { addons, steps } from "../../../constants";

import ThankYou from "../steps/ThankYou";
import Button from "../../ui/button";
import Headline from "../../headline";

const Summary = () => {
	const [filteredAddons, setFilteredAddons] = useState([]);

	const { finish, handlePrevStep, setActiveStep, handleConfirm, handleSubmit, data, discount } = useOutletContext();
	const navigate = useNavigate();

	const coeff = data?.period ? 12 - discount.discountPeriod : 1;
	const totalPrice = data?.plan?.price * coeff + filteredAddons.reduce((acc, addon) => acc + addon.price * coeff, 0);

	useEffect(() => {
		setFilteredAddons(
			data?.addons
				.filter((addon) => Object.values(addon)[0] === true)
				.map((filteredAddon) => addons.find((addon) => addon.keyCheck === Object.keys(filteredAddon)[0]))
				.filter((selectedAddon) => selectedAddon !== undefined)
		);
	}, [data?.addons]);

	const onSubmit = async () => handleConfirm();

	if (finish) return <ThankYou />;

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col md:justify-center gap-4 md:gap-2">
			<div
				className={classNames(
					"h-full flex flex-col gap-6 rounded-xl",
					"md:justify-center lg:justify-between",
					"px-6 md:pl-6 md:pr-8 lg:pl-12 lg:pr-16",
					"py-8 md:py-4 lg:py-8",
					"bg-neutral-white overflow-hidden"
				)}
			>
				<Headline mainText="Finishing up" secondaryText="Double-check everything looks OK before confirming." />

				<div className="flex flex-col gap-6 md:pb-16 !tracking-tighter">
					<div className="flex flex-col p-4 rounded-xl bg-primary-light-blue/10">
						<div
							className={classNames(
								"flex justify-between items-center pb-4",
								"border-b border-neutral-light-gray",
								"font-semibold text-lg text-primary-marine-blue"
							)}
						>
							<div className="flex flex-col justify-center items-start">
								<span>{`${data?.plan?.name} (${data?.period ? "Yearly" : "Monthly"})`}</span>
								<button
									onClick={() => {
										setActiveStep(1);
										navigate(`/${steps[1]?.href}`);
									}}
									className="text-base text-neutral-cool-gray underline font-normal"
								>
									Change
								</button>
							</div>
							<span className="text-xl">{calculatePrice(data?.plan?.price, coeff, data?.period)}</span>
						</div>
						<div className="flex flex-col gap-4 text-neutral-cool-gray pt-4">
							{filteredAddons.map(({ name, price }, index) => (
								<div key={index} className="flex justify-between items-center">
									<span>{name}</span>
									<span className="text-primary-marine-blue">
										{calculatePrice(price, coeff, data?.period)}
									</span>
								</div>
							))}
						</div>
					</div>
					<div className="flex justify-between items-center p-4 rounded-xl bg-primary-light-blue/10">
						<span className="text-neutral-cool-gray">{`Total (per month)`}</span>
						<span className="text-2xl font-semibold text-primary-purplish-blue">{`+$${totalPrice}/${
							data?.period ? "yr" : "mo"
						}`}</span>
					</div>
				</div>
			</div>

			<div
				className={classNames(
					"w-full flex justify-between",
					"rounded-xl bg-neutral-white",
					"px-6 py-4 md:pl-6 md:pr-8 lg:pl-12 lg:pr-16"
				)}
			>
				<Button
					onClick={handlePrevStep}
					label="Go Back"
					styles="text-neutral-cool-gray hover:text-primary-marine-blue"
				/>

				<Button
					type="submit"
					label="Confirm"
					styles="text-white bg-primary-marine-blue hover:bg-primary-purplish-blue"
				/>
			</div>
		</form>
	);
};

export default Summary;
