import { useOutletContext } from "react-router-dom";
import { classNames } from "../../../utils";

import ThankYou from "../steps/ThankYou";
import Button from "../../ui/button";
import Headline from "../../headline";

const Summary = () => {
	const { finish, handlePrevStep, handleConfirm, handleSubmit } = useOutletContext();

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

				<div className="flex flex-col gap-4"></div>
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
					styles="text-white bg-primary-marine-blue hover:bg-primary-marine-blue/80"
				/>
			</div>
		</form>
	);
};

export default Summary;
