import { useMediaQuery } from "../../hooks/useMediaQuery";

import Stepper from "../stepper";
import DesctopBG from "./DesctopBG";
import MobileBG from "./MobileBG";

const SideBar = ({ activeStep }) => {
	const { matches: SVG } = useMediaQuery("min-width", 768);

	return (
		<div className="relative w-full md:w-[37%] rounded-xl">
			<div className="md:absolute relative h-full">{SVG ? <DesctopBG /> : <MobileBG />}</div>
			<Stepper activeStep={activeStep} />
		</div>
	);
};

export default SideBar;
