import { calculatePrice, classNames } from "../../utils";

const PlanCard = ({ icon, name, price, value, onChange, period, discount }) => {
	const coeff = period ? 12 - discount.discountPeriod : 1;

	return (
		<div
			onClick={() => onChange({ name, price })}
			className={classNames(
				"w-full md:w-1/3",
				"flex flex-row md:flex-col gap-4 md:gap-10 p-4",
				"items-center md:items-baseline md:justify-between",
				"rounded-xl border-2 border-neutral-light-gray cursor-pointer",
				"hover:border-primary-purplish-blue/75 duration-200",
				value?.name === name && "border-primary-purplish-blue/75"
			)}
		>
			{icon}
			<div className="flex flex-col gap-1 md:gap-2 text-primary-marine-blue">
				<h2 className="font-semibold tracking-tighter !leading-none">{name}</h2>
				<span className="text-[14px] text-neutral-cool-gray tracking-tighter !leading-none">
					{calculatePrice(price, coeff, period)}
				</span>
				{period && <span className="text-[14px] tracking-tight !leading-none">2 months free</span>}
			</div>
		</div>
	);
};

export default PlanCard;
