import { classNames } from "../../utils";
import { steps } from "../../constants";

const Stepper = ({ activeStep }) => {
	return (
		<div className={classNames("flex flex-col gap-8", "absolute top-0 left-0 p-8 z-10")}>
			{steps.map(({ label, description }, index) => (
				<div key={index} className="flex gap-4 text-white cursor-pointer select-none">
					<div
						className={classNames(
							"w-8 h-8 flex items-center justify-center",
							"rounded-full font-medium border border-white",
							activeStep === index && "text-black bg-primary-light-blue"
						)}
					>
						{index + 1}
					</div>
					<div className="flex flex-col gap-1 uppercase">
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
