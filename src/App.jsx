import { useState } from "react";
import { useForm } from "react-hook-form";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

import Layout from "./component/layout";
import SideBar from "./component/side-bar";

import { classNames } from "./utils";
import { steps } from "./constants";

const INITIAL_DATA = {
	email: "",
	name: "",
	phone: "",
	plan: null,
	period: false,
	addons: [],
};

const App = () => {
	const [data, setData] = useState(INITIAL_DATA);
	const [activeStep, setActiveStep] = useState(0);
	const [finish, setFinish] = useState(false);

	const navigate = useNavigate();

	const {
		reset,
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange" });

	const handlePrevStep = () => {
		if (activeStep < 1) return;

		navigate(steps[activeStep - 1]?.href);
		setActiveStep((prev) => prev - 1);
	};

	const handleNextStep = (propData) => {
		if (activeStep === steps.length) return;

		setData({ ...data, ...propData });

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

	const discount = {
		status: true,
		discountPeriod: 2,
		message: "2 months free",
	};

	return (
		<Layout>
			<div
				className={classNames(
					"h-full md:h-[50%] lg:h-[550px]",
					"w-full md:w-[90%] lg:w-[850px]",
					"flex flex-col md:flex-row md:gap-6 lg:gap-8",
					"p-0 md:p-4 rounded-2xl",
					"md:bg-neutral-white shadow-primary-pastel-blue shadow-[0px_10px_20px]"
				)}
			>
				<SideBar activeStep={activeStep} />

				<div
					className={classNames(
						"relative md:static",
						"w-full md:w-2/3",
						"-top-[11%] sm:-top-[20%] ",
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
										setActiveStep,
										handleConfirm,
										control,
										register,
										handleSubmit,
										errors,
										data,
										discount,
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
