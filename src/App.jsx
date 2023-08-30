import { useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

import Layout from "./component/layout";
import SideBar from "./component/side-bar";
import Button from "./component/button";

import { classNames } from "./utils";
import { steps } from "./constants";

const App = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [finish, setFinish] = useState(false);

	const navigate = useNavigate();

	const handlePrevStep = () => {
		if (activeStep < 1) return;

		navigate(steps[activeStep - 1]?.href);
		setActiveStep((prev) => prev - 1);
	};

	const handleNextStep = () => {
		if (activeStep === steps.length) return;

		navigate(steps[activeStep + 1]?.href);
		setActiveStep((prev) => prev + 1);
	};

	const handleConfirm = () => {
		setFinish(true);
		setTimeout(() => {
			setActiveStep(0);
			navigate(steps[0]?.href);
			setFinish(false);
		}, 3000);
	};

	return (
		<Layout>
			<div
				className={classNames(
					"h-full md:h-[80%] lg:h-[600px] w-full md:w-[90%] lg:w-[850px]",
					"relative flex flex-col md:flex-row md:gap-4 p-0 md:p-4",
					"rounded-2xl md:bg-neutral-white"
				)}
			>
				<SideBar activeStep={activeStep} />
				<div
					className={classNames(
						"relative md:static top-[-50px] xs:top-[-95px] sm:top-[-150px]",
						"w-full md:w-2/3 flex-1 p-2 md:p-0"
					)}
				>
					<div className="w-full h-full rounded-xl bg-neutral-white">
						<Routes>
							<Route
								element={<Outlet context={{ finish, handlePrevStep, handleNextStep, handleConfirm }} />}
							>
								{steps.map(({ href, component }, index) => (
									<Route path={href} element={component} key={index} />
								))}
							</Route>
						</Routes>
					</div>
				</div>
				{!finish && (
					<div
						className={classNames(
							"flex md:hidden p-2 md:p-4 bg-neutral-white",
							activeStep > 0 ? "justify-between" : "justify-end"
						)}
					>
						{activeStep > 0 && (
							<Button
								onClick={handlePrevStep}
								label="Go Back"
								styles="text-neutral-cool-gray hover:text-primary-marine-blue"
							/>
						)}
						<Button
							onClick={activeStep < steps.length - 1 ? handleNextStep : handleConfirm}
							label={activeStep < steps.length - 1 ? "Next Step" : "Confirm"}
							styles="text-white bg-primary-marine-blue hover:bg-primary-marine-blue/80"
						/>
					</div>
				)}
			</div>
		</Layout>
	);
};

export default App;
