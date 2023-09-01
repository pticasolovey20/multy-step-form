import { classNames } from "../../utils";

const PlanCard = ({ icon, name, price }) => {
	return (
		<div
			className={classNames(
				"w-full md:w-1/3 md:h-[200px]",
				"flex flex-row md:flex-col items-center md:items-baseline md:justify-between",
				"gap-4 p-4",
				"rounded-xl border-2 border-neutral-light-gray cursor-pointer",
				"hover:border-primary-purplish-blue/75 duration-200"
			)}
		>
			{icon}
			<div>
				<h2 className="font-semibold text-primary-marine-blue text-lg">{name}</h2>
				<span className="text-neutral-cool-gray">${price}/mo</span>
				<span></span>
			</div>
		</div>
	);
};

export default PlanCard;
