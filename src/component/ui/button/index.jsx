import { classNames } from "../../../utils";

const Button = ({ label, type = "submit", onClick, styles }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={classNames("sm:font-medium", "px-4 sm:px-8 py-2 sm:py-3 rounded-lg duration-300", styles)}
		>
			{label}
		</button>
	);
};

export default Button;
