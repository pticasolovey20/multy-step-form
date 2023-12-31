import { useState } from "react";
import { Controller } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import { classNames } from "../../../utils";
import { plans } from "../../../constants";

import PlanCard from "../../plan-card";
import Switch from "../../ui/switch";
import Button from "../../ui/button";
import Headline from "../../headline";

const SelectPlan = () => {
	const { handlePrevStep, handleNextStep, handleSubmit, control, data, errors, discount } = useOutletContext();
	const [period, setPeriod] = useState(data?.period);

	const onSubmit = async (newData) => handleNextStep(newData);

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
				<Headline
					mainText="Select your plan"
					secondaryText="You have the option of monthly or yearly billing."
				/>

				<div className="flex flex-col gap-4 md:pb-16">
					<div className="w-full flex flex-col md:flex-row gap-2 md:gap-4">
						{plans.map((plan, index) => (
							<Controller
								key={index}
								control={control}
								rules={{ required: "You need to choose a plan" }}
								name="plan"
								render={({ field: { value, onChange } }) => (
									<PlanCard
										{...plan}
										value={value}
										onChange={onChange}
										period={period}
										discount={discount}
									/>
								)}
							/>
						))}
					</div>
					{errors.plan && (
						<span className="font-semibold text-primary-strawberry-red">{errors?.plan?.message}</span>
					)}
					<div
						className={classNames(
							"w-full flex gap-4 items-center justify-center",
							"text-primary-marine-blue font-medium leading-none"
						)}
					>
						<label>Mothly</label>
						<Controller
							control={control}
							name="period"
							defaultValue={false}
							render={({ field: { value, onChange } }) => (
								<Switch value={value} onChange={onChange} setPeriod={setPeriod} />
							)}
						/>
						<label>Yearly</label>
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
