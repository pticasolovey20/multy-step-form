import { classNames } from "../../utils";

import Button from "../button";

const Form = (children, { mainTitle, secondaryDescription, handlePrevStep, handleSubmit, onSubmit, styles }) => {
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={classNames(
				"flex flex-col lg:h-full",
				"gap-6 md:gap-8 rounded-xl",
				"bg-neutral-white overflow-hidden",
				"px-6 md:px-8 lg:px-10",
				"py-10 md:py-4 lg:py-8",
				"pb-8 md:!pb-4"
			)}
		>
			<div className="flex flex-col gap-3 md:gap-1">
				<h1 className="text-3xl font-semibold text-primary-marine-blue">{mainTitle}</h1>
				<span className="text-neutral-cool-gray">{secondaryDescription}</span>
			</div>

			<div className={classNames("flex flex-col gap-4 md:gap-6", styles)}>{children}</div>

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

export default Form;