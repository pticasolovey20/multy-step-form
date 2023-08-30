import { classNames } from "../../../utils";

import ThankIcon from "../../icons/ThankIcon";

const ThankYou = () => {
	return (
		<div
			className={classNames(
				"md:h-full flex flex-col",
				"justify-center gap-4",
				"px-6 md:px-10 md:pt-8 py-16 md:py-4"
			)}
		>
			<div className="flex flex-col items-center gap-8 md:gap-6">
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
