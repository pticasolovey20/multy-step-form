import { useOutletContext } from "react-router-dom";
import { classNames } from "../../../utils";

import ThankYou from "../steps/ThankYou";
import Button from "../../button";

const Summary = () => {
	const { finish, handlePrevStep, handleConfirm, handleSubmit } = useOutletContext();

	const onSubmit = async () => handleConfirm();

	if (finish) return <ThankYou />;

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={classNames(
				"h-full flex flex-col justify-evenly",
				"gap-6 md:gap-4 rounded-xl",
				"bg-neutral-white overflow-hidden",
				"px-6 md:px-8 lg:px-10",
				"md:!pl-3 lg:!pl-6",
				"py-10 md:py-4 lg:py-8",
				"pb-8 md:!pb-4"
			)}
		>
			<div className="flex flex-col gap-3 md:gap-1">
				<h1 className="text-3xl font-semibold text-primary-marine-blue">Finishing up</h1>
				<span className="text-neutral-cool-gray">Double-check everything looks OK before confirming.</span>
			</div>

			<div className="flex-1 flex flex-col gap-4 md:gap-6"></div>

			<div className="w-full flex justify-between">
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
