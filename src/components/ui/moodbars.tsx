const MoodBarChart = ({ mood, color }: { mood: string; color?: string }) => {
	const barHeights = [10, 20, 15, 30, 45, 65, 90, 75, 55, 35, 25, 15, 10, 5, 5];

	return (
		<div className="flex flex-col items-center justify-between h-full w-full">
			<span className="text-2xl font-bold text-white mb-3">{mood}</span>
			<div className="flex items-end justify-center gap-1 h-20 w-full px-2 mb-1">
				{barHeights.map((height, index) => (
					<div
						key={index}
						className="w-2 rounded-t-full bg-white"
						style={{ height: `${height}%` }}
					/>
				))}
			</div>
		</div>
	);
};

export default MoodBarChart;
