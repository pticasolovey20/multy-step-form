import { classNames } from "../../utils";
import { steps } from "../../constants";

const Stepper = ({ activeStep }) => {
	return (
		<div className={classNames("flex justify-center")}>
			<div
				className={classNames(
					"flex flex-row md:flex-col gap-6 md:gap-8 p-6 md:p-8",
					"absolute top-2 md:top-0 md:left-0 z-10"
				)}
			>
				{steps.map(({ label, description }, index) => (
					<div key={index} className="flex gap-4 text-white cursor-pointer select-none">
						<div
							className={classNames(
								"rounded-full font-medium border border-white",
								"w-9 xs:w-12 md:w-9 h-9 xs:h-12 md:h-9",
								"flex items-center justify-center",
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
		</div>
	);
};

export default Stepper;
