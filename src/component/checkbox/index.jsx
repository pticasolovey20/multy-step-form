import { classNames } from "../../utils";

import * as CheckboxComponent from "@radix-ui/react-checkbox";
import CheckmarkIcon from "../icons/CheckmarkIcon";

const Checkbox = ({ id }) => {
	return (
		<div className="flex items-center">
			<CheckboxComponent.Root
				className={classNames(
					"flex items-center justify-center",
					"h-[20px] w-[20px] md:h-[25px] md:w-[25px] !rounded-md",
					"border border-neutral-cool-gray",
					"appearance-none outline-none",
					"data-[state=checked]:bg-primary-purplish-blue",
					"data-[state=checked]:border-primary-marine-blue"
				)}
				id={id}
			>
				<CheckboxComponent.Indicator>
					<CheckmarkIcon />
				</CheckboxComponent.Indicator>
			</CheckboxComponent.Root>
		</div>
	);
};

export default Checkbox;
