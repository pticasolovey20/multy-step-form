import { useOutletContext } from "react-router-dom";
import { classNames } from "../../../utils";

import Button from "../../ui/button";
import Input from "../../ui/input";
import Headline from "../../headline";

const PersonalInfo = () => {
	const { handleNextStep, handleSubmit, register, errors } = useOutletContext();

	const onSubmit = async (data) => handleNextStep(data);

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
					mainText="Personal info"
					secondaryText="Please provide your name, email address, and phone number."
				/>

				<div className="flex flex-col gap-4">
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
					"px-6 py-4 md:pl-6 md:pr-8 lg:pl-12 lg:pr-16"
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
