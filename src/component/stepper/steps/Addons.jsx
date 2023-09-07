import { Controller } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import { classNames } from "../../../utils";
import { addons } from "../../../constants";

import Button from "../../ui/button";
import Headline from "../../headline";
import AddonItem from "../../addon-item";

const Addons = () => {
	const { handlePrevStep, handleNextStep, handleSubmit, control, data, discount } = useOutletContext();

	const onSubmit = async (newData) => {
		const { onlineService, largerStorage, customizableProfile } = newData;

		const addons = [
			{ onlineService: onlineService },
			{ largerStorage: largerStorage },
			{ customizableProfile: customizableProfile },
		];

		handleNextStep({ ...newData, ...{ addons: addons } });
	};

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
				<Headline mainText="Pick add-ons" secondaryText="Add-ons help enhance your gaming experience." />

				<div className="flex flex-col gap-3 md:gap-4">
					{addons.map((addon, index) => (
						<Controller
							key={index}
							name={addon.keyCheck}
							defaultValue={false}
							control={control}
							render={({ field: { value, onChange } }) => (
								<AddonItem
									{...addon}
									value={value}
									onChange={onChange}
									index={index}
									period={data?.period}
									discount={discount}
								/>
							)}
						/>
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
