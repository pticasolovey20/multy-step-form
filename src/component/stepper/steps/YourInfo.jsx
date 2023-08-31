import { useOutletContext } from "react-router-dom";
import { classNames } from "../../../utils";

import Button from "../../button";
import Input from "../../input";

const YourInfo = () => {
	const { handleNextStep, handleSubmit, register, errors } = useOutletContext();

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
				<h1 className="text-3xl font-semibold text-primary-marine-blue">Personal info</h1>
				<span className="text-neutral-cool-gray">
					Please provide your name, email address, and phone number.
				</span>
			</div>

			<div className="flex flex-col gap-4 md:gap-6">
				<Input
					label="Name"
					id="name"
					placeholder="e.g. Stephen King"
					register={register}
					errors={errors?.name}
				/>

				<Input
					label="Email Address"
					id="email"
					type="email"
					placeholder="e.g. stephenking@lorem.com"
					register={register}
					errors={errors?.email}
				/>

				<Input
					label="Phone Number"
					id="phone"
					type="tel"
					placeholder="e.g. + 1 234 567 890"
					register={register}
					errors={errors?.phone}
				/>
			</div>

			<div className="hidden md:flex justify-end h-full">
				<Button
					type="submit"
					label="Next Step"
					styles="text-white bg-primary-marine-blue hover:bg-primary-marine-blue/80 self-end"
				/>
			</div>
		</form>
	);
};

export default YourInfo;
