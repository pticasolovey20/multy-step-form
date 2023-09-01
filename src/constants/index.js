import PersonalInfo from "../component/stepper/steps/PersonalInfo";
import SelectPlan from "../component/stepper/steps/SelectPlan";
import Addons from "../component/stepper/steps/Addons";
import Summary from "../component/stepper/steps/Summary";

export const steps = [
	{
		label: "Your Info",
		href: "",
		description: "step 1",
		component: <PersonalInfo />,
	},
	{
		label: "Select plan",
		href: "plan",
		description: "step 2",
		component: <SelectPlan />,
	},
	{
		label: "Add-ons",
		href: "addons",
		description: "step 3",
		component: <Addons />,
	},
	{
		label: "Summary",
		href: "summary",
		description: "step 4",
		component: <Summary />,
	},
];
