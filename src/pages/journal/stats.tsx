import { useState } from 'react';
import { cn } from 'tailwind-cn';

type TimeRange = 'Week' | 'Month' | 'Year';
const timeRanges: TimeRange[] = ['Week', 'Month', 'Year'];

interface JournalEntry {
	id: string;
	date: string;
	content: string;
	mood: number;
	audioUrl?: string;
}

const sampleJournalEntries: JournalEntry[] = [
	{
		id: '1',
		date: '2024-01-15',
		content: 'Had a great day at work!',
		mood: 5,
	},
	{
		id: '2',
		date: '2024-01-14',
		content: 'Feeling a bit stressed',
		mood: 2,
		audioUrl: 'audio1.mp3',
	},
];

const JournalStats = () => {
	const [timeRange, setTimeRange] = useState<TimeRange>('Week');

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-bold">Journal Stats</h1>
				<div className="flex gap-2 bg-card rounded-lg p-1">
					{timeRanges.map((range) => (
						<button
							key={range}
							className={cn(
								'px-4 py-2 rounded-md text-sm font-medium transition-colors',
								timeRange === range
									? 'bg-primary text-white'
									: 'text-gray-600 hover:text-gray-900'
							)}
							onClick={() => setTimeRange(range)}>
							{range}
						</button>
					))}
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div className="bg-card p-6 rounded-2xl">
					<h3 className="text-lg font-medium mb-2">Total Entries</h3>
					<p className="text-3xl font-bold">{sampleJournalEntries.length}</p>
				</div>
				<div className="bg-card p-6 rounded-2xl">
					<h3 className="text-lg font-medium mb-2">Voice Notes</h3>
					<p className="text-3xl font-bold">
						{sampleJournalEntries.filter((entry) => entry.audioUrl).length}
					</p>
				</div>
				<div className="bg-card p-6 rounded-2xl">
					<h3 className="text-lg font-medium mb-2">Average Mood</h3>
					<p className="text-3xl font-bold">
						{(
							sampleJournalEntries.reduce((acc, entry) => acc + entry.mood, 0) /
							sampleJournalEntries.length
						).toFixed(1)}
					</p>
				</div>
			</div>

			<div className="bg-card rounded-2xl p-6">
				<h2 className="text-2xl font-semibold mb-6">Recent Entries</h2>
				<div className="space-y-4">
					{sampleJournalEntries.map((entry) => (
						<div
							key={entry.id}
							className="border-b border-gray-200 pb-4 last:border-0">
							<div className="flex justify-between items-start mb-2">
								<p className="text-sm text-gray-600">{entry.date}</p>
								{entry.audioUrl && (
									<span className="text-primary text-sm">🎤 Voice Note</span>
								)}
							</div>
							<p className="text-gray-900">{entry.content}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default JournalStats;
