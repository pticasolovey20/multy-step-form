import { classNames } from "../../utils";

const Button = ({ label, onClick, styles }) => {
	return (
		<button
			onClick={onClick}
			className={classNames("sm:font-medium", "px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-lg duration-300", styles)}
		>
			{label}
		</button>
	);
};

export default Button;
