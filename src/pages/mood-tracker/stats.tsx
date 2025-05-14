import { useState } from 'react';
import MoodHistory, { type MoodEntry } from '../../components/mood-history';
import { cn } from 'tailwind-cn';

// Sample data - replace with actual data from your backend
const sampleMoodEntries: MoodEntry[] = [
	{
		level: 5,
		timestamp: new Date(2024, 0, 15).toISOString(),
	},
	{
		level: 4,
		timestamp: new Date(2024, 0, 14).toISOString(),
	},
	{
		level: 3,
		timestamp: new Date(2024, 0, 13).toISOString(),
	},
];

const timeRanges = ['Week', 'Month', 'Year'] as const;
type TimeRange = (typeof timeRanges)[number];

const MoodStats = () => {
	const [timeRange, setTimeRange] = useState<TimeRange>('Week');

	return (
		<div className="p-4 space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold">Mood Tracker</h1>
				<div className="flex gap-2 bg-white/5 rounded-lg p-1">
					{timeRanges.map((range) => (
						<button
							key={range}
							className={cn(
								'px-4 py-2 rounded-md text-sm font-medium transition-colors',
								timeRange === range
									? 'bg-white/10 text-white'
									: 'text-gray-400 hover:text-white'
							)}
							onClick={() => setTimeRange(range)}>
							{range}
						</button>
					))}
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div className="bg-white/5 p-4 rounded-lg">
					<h3 className="text-lg font-medium mb-2">Average Mood</h3>
					<p className="text-2xl font-bold">4.2</p>
				</div>
				<div className="bg-white/5 p-4 rounded-lg">
					<h3 className="text-lg font-medium mb-2">Entries</h3>
					<p className="text-2xl font-bold">{sampleMoodEntries.length}</p>
				</div>
			</div>

			<MoodHistory entries={sampleMoodEntries} className="mt-6" />
		</div>
	);
};

export default MoodStats;
