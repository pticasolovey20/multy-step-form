import { classNames } from "../../utils";

import Checkbox from "../ui/checkbox";

const AddonItem = ({ name, description, price }) => {
	return (
		<div
			className={classNames(
				"flex items-center justify-between p-3 lg:p-4",
				"rounded-xl border-2 border-neutral-light-gray cursor-pointer",
				"hover:border-primary-purplish-blue/75 duration-200"
				// checked && "border-primary-purplish-blue/75"
			)}
		>
			<div className="flex items-center gap-3 lg:gap-4">
				<Checkbox id={1} />
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
				+${price}/mo
			</span>
		</div>
	);
};

export default AddonItem;
