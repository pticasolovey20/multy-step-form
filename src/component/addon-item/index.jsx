import { classNames } from "../../utils";

import * as CheckboxComponent from "@radix-ui/react-checkbox";
import CheckmarkIcon from "../icons/CheckmarkIcon";

const AddonItem = ({ name, description, price, value, onChange }) => {
	return (
		<div
			className={classNames(
				"flex items-center justify-between p-3 lg:p-4",
				"rounded-xl border-2 border-neutral-light-gray cursor-pointer",
				"hover:border-primary-purplish-blue/75 duration-200",
				value && "border-primary-purplish-blue/75"
			)}
		>
			<div className="flex items-center gap-3 lg:gap-4">
				<CheckboxComponent.Root
					checked={value}
					value={value}
					onClick={() => onChange(!value)}
					className={classNames(
						"flex items-center justify-center",
						"h-[20px] w-[20px] md:h-[25px] md:w-[25px] !rounded-md",
						"border border-neutral-cool-gray",
						"appearance-none outline-none",
						"data-[state=checked]:bg-primary-purplish-blue",
						"data-[state=checked]:border-primary-marine-blue"
					)}
				>
					<CheckboxComponent.Indicator>
						<CheckmarkIcon />
					</CheckboxComponent.Indicator>
				</CheckboxComponent.Root>

				<div className="flex flex-col gap-1 tracking-tighter">
					<h2
						className={classNames(
							"text-base lg:text-xl font-medium",
							"text-primary-marine-blue !leading-none"
						)}
					>
						{name}
					</h2>

					<span className={classNames("text-sm lg:text-lg", "text-neutral-cool-gray !leading-none")}>
						{description}
					</span>
				</div>
			</div>

			<span className={classNames("text-sm md:text-lg", "text-primary-purplish-blue !leading-none")}>
				{`+$${price}/mo`}
			</span>
		</div>
	);
};

export default AddonItem;
