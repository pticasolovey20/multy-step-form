import { useMediaQuery } from "../../hooks/useMediaQuery";

import Stepper from "../stepper";
import DesctopBG from "./DesctopBG";
import MobileBG from "./MobileBG";

const SideBar = ({ activeStep }) => {
	const { matches: SVG } = useMediaQuery("min-width", 768);

	return (
		<div className="relative rounded-xl">
			{SVG ? <DesctopBG /> : <MobileBG />}
			<Stepper activeStep={activeStep} />
		</div>
	);
};

export default SideBar;
