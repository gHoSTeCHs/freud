import MoodEmoji, { type MoodLevel } from '../../components/ui/mood-emoji';
import MoodBarChart from '../../components/ui/moodbars';

const MoodTrackerPage = () => {
	const moodStats = [
		{ mood: 'Happy', color: 'var(--color-green-40)' },
		{ mood: 'Okay', color: 'var(--color-yellow-40)' },
		{ mood: 'Sad', color: 'var(--color-purple-30)' },
	];

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-8">Mood Tracker</h1>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				{moodStats.map((stat, index) => (
					<div
						key={index}
						className="rounded-2xl p-4"
						style={{ backgroundColor: stat.color }}>
						<MoodBarChart mood={stat.mood} />
					</div>
				))}
			</div>

			<div className="bg-card rounded-2xl p-6">
				<h2 className="text-2xl font-semibold mb-4">Today's Mood</h2>
				<div className="flex justify-center gap-4 mb-8">
					{[1, 2, 3, 4, 5].map((level) => (
						<button
							key={level}
							className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-full"
							onClick={() =>
								(window.location.href = `/mood-tracker/input/${level}`)
							}
							title="button">
							<MoodEmoji level={level as MoodLevel} size="lg" />
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default MoodTrackerPage;
