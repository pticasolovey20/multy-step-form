import { useMediaQuery } from "../../hooks/useMediaQuery";

import Stepper from "../stepper";
import DesctopBG from "./DesctopBG";
import MobileBG from "./MobileBG";

const SideBar = ({ activeStep }) => {
	const { matches: SVG } = useMediaQuery("min-width", 881);

	return (
		<div className="relative w-1/3 rounded-xl">
			{SVG ? <DesctopBG /> : <MobileBG />}
			<Stepper activeStep={activeStep} />
		</div>
	);
};

export default SideBar;
