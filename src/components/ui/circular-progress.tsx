const CircularProgress = ({
	value,
	color,
}: {
	value: number;
	color: string;
}) => {
	const radius = 40;
	const circumference = 2 * Math.PI * radius;
	const progress = value / 100;
	const strokeDashoffset = circumference * (1 - progress);

	return (
		<div className="relative flex items-center justify-center w-24 h-24">
			<svg
				className="absolute"
				width="100%"
				height="100%"
				viewBox="0 0 100 100">
				<circle
					cx="50"
					cy="50"
					r={radius}
					fill="none"
					stroke={`${color}40`} // Translucent version of the color
					strokeWidth="8"
				/>
				<circle
					cx="50"
					cy="50"
					r={radius}
					fill="none"
					stroke={color}
					strokeWidth="8"
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					strokeLinecap="round"
					transform="rotate(-90 50 50)"
				/>
			</svg>
			<div className="flex flex-col items-center justify-center">
				<span className="text-3xl font-bold text-white">{value}</span>
				<span className="text-xs text-white">Healthy</span>
			</div>
		</div>
	);
};

export default CircularProgress;
