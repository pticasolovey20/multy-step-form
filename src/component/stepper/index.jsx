import { classNames } from "../../utils";
import { steps } from "../../constants";

const Stepper = ({ activeStep }) => {
	return (
		<div
			className={classNames(
				"w-full flex flex-row md:flex-col",
				"justify-center gap-6 md:gap-8 p-6",
				"absolute top-2 md:top-1 md:left-0 z-10"
			)}
		>
			{steps.map(({ label, description }, index) => (
				<div key={index} className="flex gap-4 text-white cursor-pointer select-none">
					<div
						className={classNames(
							"flex w-9 h-9 items-center justify-center",
							"rounded-full font-medium border border-white",
							activeStep === index && "text-black bg-primary-light-blue"
						)}
					>
						{index + 1}
					</div>
					<div className="hidden md:flex flex-col gap-1 uppercase">
						<span className="text-[12px] font-normal text-neutral-light-gray leading-none">
							{description}
						</span>

						<h1 className="font-medium leading-none">{label}</h1>
					</div>
				</div>
			))}
		</div>
	);
};

export default Stepper;
