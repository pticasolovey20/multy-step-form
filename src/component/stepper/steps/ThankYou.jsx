import { classNames } from "../../../utils";

import ThankIcon from "../../icons/ThankIcon";

const ThankYou = () => {
	return (
		<div
			className={classNames(
				"md:h-full flex flex-col justify-evenly",
				"gap-6 md:gap-4 rounded-xl",
				"bg-neutral-white overflow-hidden",
				"px-6 md:px-8 lg:px-10",
				"md:!pl-3 lg:!pl-6",
				"py-16 md:py-4 md:!pb-4 lg:py-8",
				"mb-[120px] sm:mb-[150px] md:mb-0"
			)}
		>
			<div className="flex flex-col items-center gap-4 md:gap-6">
				<ThankIcon />

				<h1 className="text-4xl font-bold text-primary-marine-blue">Thank You!</h1>

				<p className="text-center text-neutral-cool-gray">
					Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need
					support, please feel free to email us at support@loremgaming.com.
				</p>
			</div>
		</div>
	);
};

export default ThankYou;
