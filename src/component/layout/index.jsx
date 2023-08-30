import { classNames } from "../../utils";

const Layout = ({ children }) => {
	return (
		<section className={classNames("min-h-screen bg-primary-light-blue", "flex md:items-center md:justify-center")}>
			<main className="w-full flex justify-center">{children}</main>
		</section>
	);
};

export default Layout;
