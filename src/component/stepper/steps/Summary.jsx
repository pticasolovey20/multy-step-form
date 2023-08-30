import { useOutletContext } from "react-router-dom";
import { classNames } from "../../../utils";

import ThankYou from "../steps/ThankYou";
import Button from "../../button";

const Summary = () => {
	const { finish, handlePrevStep, handleConfirm } = useOutletContext();

	if (finish) return <ThankYou />;

	return (
		<div className={classNames("h-full flex flex-col gap-4", "px-6 md:px-10 pt-8 py-4")}>
			<div className="flex flex-col gap-3 md:gap-1">
				<h1 className="text-3xl font-semibold text-primary-marine-blue">Finishing up</h1>
				<span className="text-neutral-cool-gray">Double-check everything looks OK before confirming.</span>
			</div>
			<div className="flex-1"></div>
			<div className="hidden md:flex justify-between">
				<Button
					onClick={handlePrevStep}
					label="Go Back"
					styles="text-neutral-cool-gray hover:text-primary-marine-blue"
				/>
				<Button
					onClick={handleConfirm}
					label="Confirm"
					styles="text-white bg-primary-marine-blue hover:bg-primary-purplish-blue"
				/>
			</div>
		</div>
	);
};

export default Summary;
