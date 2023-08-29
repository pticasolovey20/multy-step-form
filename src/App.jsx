import { useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

import Layout from "./component/layout";
import SideBar from "./component/side-bar";

import { classNames } from "./utils";
import { steps } from "./constants";

const App = () => {
	const [activeStep, setActiveStep] = useState(0);

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
		setTimeout(() => {
			setActiveStep(0);
			navigate(steps[0]?.href);
		}, 3000);
	};

	return (
		<Layout>
			<div className={classNames("h-[600px] w-[850px]", "flex gap-4 p-4", "rounded-2xl bg-neutral-white")}>
				<SideBar activeStep={activeStep} />
				<div className="w-2/3 bg-neutral-white z-10">
					<Routes>
						<Route element={<Outlet context={{ handlePrevStep, handleNextStep, handleConfirm }} />}>
							{steps.map(({ href, component }, index) => (
								<Route path={href} element={component} key={index} />
							))}
						</Route>
					</Routes>
				</div>
			</div>
		</Layout>
	);
};

export default App;
