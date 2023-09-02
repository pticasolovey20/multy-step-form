import { useOutletContext } from "react-router-dom";
import { classNames } from "../../../utils";
import { plans } from "../../../constants";

import Button from "../../button";
import PlanCard from "../../plan-card";
import Switch from "../../switch";

const SelectPlan = () => {
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
					"gap-4 rounded-xl",
					"bg-neutral-white overflow-hidden",
					"px-6 md:px-8 lg:px-16",
					"py-10 md:py-4 lg:py-8",
					"pb-8 md:!pb-4"
				)}
			>
				<div className="flex flex-col gap-3 md:gap-1">
					<h1 className="text-3xl font-semibold text-primary-marine-blue">Select your plan</h1>
					<span className="text-neutral-cool-gray">You have the option of monthly or yearly billing.</span>
				</div>

				<div className="flex-1 flex flex-col gap-4 md:gap-6">
					<div className="w-full flex flex-col md:flex-row gap-4">
						{plans.map((plan, index) => (
							<PlanCard key={index} {...plan} />
						))}
					</div>
					<div className="w-full flex items-center justify-center">
						<Switch />
					</div>
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

export default SelectPlan;
