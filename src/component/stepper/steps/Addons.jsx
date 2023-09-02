import { useOutletContext } from "react-router-dom";
import { classNames } from "../../../utils";
import { addons } from "../../../constants";

import AddonItem from "../../addon-item";
import Button from "../../button";

const Addons = () => {
	const { handlePrevStep, handleNextStep, handleSubmit } = useOutletContext();

	const onSubmit = async () => handleNextStep();

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="h-full flex flex-col gap-6 sm:gap-4 md:gap-2 justify-between"
		>
			<div
				className={classNames(
					"h-full flex flex-col",
					"gap-4 rounded-xl justify-center",
					"bg-neutral-white overflow-hidden",
					"px-6 md:px-8 lg:px-16",
					"py-10 md:py-4 lg:py-8",
					"pb-8 md:!pb-4"
				)}
			>
				<div className="flex flex-col gap-3 md:gap-1">
					<h1 className="text-3xl font-semibold text-primary-marine-blue">Pick add-ons</h1>
					<span className="text-neutral-cool-gray">Add-ons help enhance your gaming experience.</span>
				</div>

				<div className="flex-1 flex flex-col justify-center gap-4">
					{addons.map((addon, index) => (
						<AddonItem key={index} {...addon} />
					))}
				</div>
			</div>

			<div
				className={classNames(
					"w-full flex justify-between",
					"rounded-xl bg-neutral-white",
					"px-6 md:px-8 lg:px-16 py-4"
				)}
			>
				<Button
					onClick={handlePrevStep}
					label="Go Back"
					styles="text-neutral-cool-gray hover:text-primary-marine-blue !px-0"
				/>

				<Button
					type="submit"
					label="Next Step"
					styles="text-white bg-primary-marine-blue hover:bg-primary-marine-blue/80"
				/>
			</div>
		</form>
	);
};

export default Addons;
