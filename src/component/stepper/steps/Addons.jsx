import { useOutletContext } from "react-router-dom";
import Button from "../../button";

const Addons = () => {
	const { handlePrevStep, handleNextStep } = useOutletContext();

	return (
		<div className="h-full flex flex-col gap-4 px-10 pt-8 py-4">
			<div className="flex flex-col gap-1">
				<h1 className="text-3xl font-semibold text-primary-marine-blue">Pick add-ons</h1>
				<span className="text-neutral-cool-gray">Add-ons help enhance your gaming experience.</span>
			</div>
			<div className="flex-1"></div>
			<div className="flex justify-between">
				<Button
					onClick={handlePrevStep}
					label="Go Back"
					styles="text-neutral-cool-gray hover:text-primary-marine-blue"
				/>
				<Button
					onClick={handleNextStep}
					label="Next Step"
					styles="text-white bg-primary-marine-blue hover:bg-primary-marine-blue/80"
				/>
			</div>
		</div>
	);
};

export default Addons;
