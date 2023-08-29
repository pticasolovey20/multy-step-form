import { classNames } from "../../utils";

const Layout = ({ children }) => {
	return (
		<section className={classNames("min-h-screen bg-primary-light-blue", "flex items-center justify-center")}>
			<main>{children}</main>
		</section>
	);
};

export default Layout;
