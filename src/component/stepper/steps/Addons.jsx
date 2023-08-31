import { useOutletContext } from "react-router-dom";
import { classNames } from "../../../utils";

import Button from "../../button";

const Addons = () => {
	const { handlePrevStep, handleNextStep, handleSubmit } = useOutletContext();

	const onSubmit = async () => handleNextStep();

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={classNames(
				"flex flex-col lg:h-full",
				"gap-6 md:gap-4 rounded-xl",
				"bg-neutral-white overflow-hidden",
				"px-6 md:px-8 lg:px-10",
				"md:!pl-2 lg:!pl-6",
				"py-10 md:py-4 lg:py-8",
				"pb-8 md:!pb-4"
			)}
		>
			<div className="flex flex-col gap-3 md:gap-1">
				<h1 className="text-3xl font-semibold text-primary-marine-blue">Pick add-ons</h1>
				<span className="text-neutral-cool-gray">Add-ons help enhance your gaming experience.</span>
			</div>

			<div className="flex-1"></div>

			<div className="hidden md:flex justify-between">
				<Button
					onClick={handlePrevStep}
					label="Go Back"
					styles="text-neutral-cool-gray hover:text-primary-marine-blue"
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
