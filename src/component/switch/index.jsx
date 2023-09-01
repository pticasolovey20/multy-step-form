import * as SwitchComponent from "@radix-ui/react-switch";

import { classNames } from "../../utils";

const Switch = () => (
	<div className="flex gap-4 items-center text-primary-marine-blue font-medium leading-none">
		<label className="">Mothly</label>
		<SwitchComponent.Root
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
		<label>Yearly</label>
	</div>
);

export default Switch;
