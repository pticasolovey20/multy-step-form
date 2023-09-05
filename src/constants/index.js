import PersonalInfo from "../component/stepper/steps/PersonalInfo";
import SelectPlan from "../component/stepper/steps/SelectPlan";
import Addons from "../component/stepper/steps/Addons";
import Summary from "../component/stepper/steps/Summary";

import ArcadeIcon from "../component/icons/ArcadeIcon";
import AdvancedIcon from "../component/icons/AdvancedIcon";
import ProIcon from "../component/icons/ProIcon";

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

export const plans = [
	{ icon: <ArcadeIcon />, name: "Arcade", price: 9 },
	{ icon: <AdvancedIcon />, name: "Advanced", price: 12 },
	{ icon: <ProIcon />, name: "Pro", price: 15 },
];

export const addons = [
	{ name: "Online service", description: "Access to multiplayer games", price: 1 },
	{ name: "Larger storage", description: "Extra 1TB of cloud save", price: 2 },
	{ name: "Customizable Profile", description: "Custom theme on your profile", price: 2 },
];
