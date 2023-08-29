import { classNames } from "../../utils";

const Button = ({ label, onClick, styles }) => {
	return (
		<button onClick={onClick} className={classNames("font-medium px-6 py-2.5 rounded-lg duration-300", styles)}>
			{label}
		</button>
	);
};

export default Button;
