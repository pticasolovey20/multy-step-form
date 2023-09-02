import { useOutletContext } from "react-router-dom";
import { classNames } from "../../../utils";

import Button from "../../button";
import Input from "../../input";

const PersonalInfo = () => {
	const { handleNextStep, handleSubmit, register, errors } = useOutletContext();

	const onSubmit = async () => handleNextStep();

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="h-full flex flex-col gap-6 sm:gap-4 md:gap-2 justify-between"
		>
			<div
				className={classNames(
					"h-full flex flex-col",
					"gap-2 rounded-xl",
					"bg-neutral-white overflow-hidden",
					"px-6 md:px-8 lg:px-16",
					"py-10 md:py-4 md:!pt-0 lg:!pt-8 lg:py-8"
				)}
			>
				<div className="flex flex-col gap-3 md:gap-1">
					<h1 className="text-3xl font-semibold text-primary-marine-blue">Personal info</h1>
					<span className="text-neutral-cool-gray">
						Please provide your name, email address, and phone number.
					</span>
				</div>

				<div className="flex-1 flex flex-col justify-center gap-2">
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
			</div>

			<div
				className={classNames(
					"w-full flex justify-end",
					"rounded-xl bg-neutral-white",
					"px-6 md:px-8 lg:px-16 py-4"
				)}
			>
				<Button
					type="submit"
					label="Next Step"
					styles="text-white bg-primary-marine-blue hover:bg-primary-marine-blue/80 self-end"
				/>
			</div>
		</form>
	);
};

export default PersonalInfo;
