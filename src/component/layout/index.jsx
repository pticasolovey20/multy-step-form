import { classNames } from "../../utils";

const Layout = ({ children }) => {
	return (
		<section
			className={classNames(
				"min-h-screen w-full bg-primary-light-blue",
				"flex md:items-center md:justify-center"
			)}
		>
			<main className="w-full flex md:justify-center relative">{children}</main>
		</section>
	);
};

export default Layout;
