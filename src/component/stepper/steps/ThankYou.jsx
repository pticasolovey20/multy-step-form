import { classNames } from "../../../utils";

import ThankIcon from "../../icons/ThankIcon";

const ThankYou = () => {
	return (
		<div
			className={classNames(
				"h-full flex flex-col gap-6 rounded-xl",
				"md:justify-center",
				"px-6 md:pl-6 md:pr-8 lg:pl-12 lg:pr-16",
				"py-8 md:py-4 lg:py-8",
				"bg-neutral-white overflow-hidden"
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
