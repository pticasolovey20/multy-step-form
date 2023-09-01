import { classNames } from "../../utils";

const Input = ({ label, id, type = "text", placeholder, autoComplete = "off", register, errors }) => {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between text-sm md:text-base leading-none">
				<label htmlFor={id} className="text-primary-marine-blue font-medium sm:font-semibold">
					{label}
				</label>

				{errors && <span className="font-semibold text-primary-strawberry-red">{errors?.message}</span>}
			</div>

			<input
				className={classNames(
					"px-4 py-3 rounded-md md:rounded-lg border border-neutral-light-gray",
					"focus:outline-none focus:border-primary-marine-blue placeholder:font-medium",
					"hover:!border-primary-marine-blue duration-200",
					errors && "!border-primary-strawberry-red"
				)}
				id={id}
				type={type}
				placeholder={placeholder}
				autoComplete={autoComplete}
				{...register(id, { required: "This field is required" })}
			/>
		</div>
	);
};

export default Input;
