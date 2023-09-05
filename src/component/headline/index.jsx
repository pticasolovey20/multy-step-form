const Headline = ({ mainText, secondaryText }) => {
	return (
		<div className="flex flex-col gap-2">
			<h1 className="text-2xl md:text-3xl font-semibold text-primary-marine-blue">{mainText}</h1>
			<span className="md:tracking-tighter text-neutral-cool-gray">{secondaryText}</span>
		</div>
	);
};

export default Headline;
