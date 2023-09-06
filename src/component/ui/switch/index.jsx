import { classNames } from "../../../utils";
import * as SwitchComponent from "@radix-ui/react-switch";

const Switch = ({ value, onChange }) => {
	return (
		<SwitchComponent.Root
			checked={value}
			onClick={() => onChange(!value)}
			className={classNames(
				"w-12 h-6 rounded-full relative outline-none",
				"data-[state=checked]:bg-primary-marine-blue",
				"data-[state=unchecked]:bg-primary-marine-blue"
			)}
		>
			<SwitchComponent.Thumb
				className={classNames(
					"block w-4 h-4",
					"bg-neutral-white rounded-full",
					"transition-transform duration-100 translate-x-[4px]",
					"will-change-transform data-[state=checked]:translate-x-[28px]"
				)}
			/>
		</SwitchComponent.Root>
	);
};

export default Switch;
