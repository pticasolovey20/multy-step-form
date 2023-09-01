import { useState } from "react";
import { useForm } from "react-hook-form";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

import Layout from "./component/layout";
import SideBar from "./component/side-bar";

import { classNames } from "./utils";
import { steps } from "./constants";

const App = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [finish, setFinish] = useState(false);

	const navigate = useNavigate();

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange" });

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
			reset();
			navigate(steps[0]?.href);
			setFinish(false);
		}, 3000);
	};

	return (
		<Layout>
			<div
				className={classNames(
					"h-full md:h-[80%] lg:h-[600px]",
					"w-full md:w-[90%] lg:w-[1000px]",
					"flex flex-col md:flex-row",
					"md:gap-8 p-0 md:p-4 rounded-2xl",
					"md:bg-neutral-white shadow-primary-pastel-blue shadow-[0px_10px_20px]"
				)}
			>
				<SideBar activeStep={activeStep} />

				<div
					className={classNames(
						"relative md:static",
						"w-full md:w-2/3",
						"-top-[10%] sm:-top-[20%]",
						"p-4 sm:p-8 md:p-0"
					)}
				>
					<Routes>
						<Route
							element={
								<Outlet
									context={{
										finish,
										handlePrevStep,
										handleNextStep,
										handleConfirm,
										register,
										handleSubmit,
										errors,
									}}
								/>
							}
						>
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
