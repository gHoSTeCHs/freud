import { useState } from 'react';
import { Link } from 'react-router';
import MoodEmoji, { type MoodLevel } from '../../components/ui/mood-emoji';

interface JournalEntry {
	id: string;
	date: string;
	content: string;
	mood: MoodLevel;
	audioUrl?: string;
}

const sampleEntries: JournalEntry[] = [
	{
		id: '1',
		date: '2024-01-15',
		content:
			'Today was a productive day. I managed to complete all my tasks and even had time for a short walk.',
		mood: 5,
	},
	{
		id: '2',
		date: '2024-01-14',
		content:
			'Feeling a bit overwhelmed with work, but trying to stay positive.',
		mood: 3,
		audioUrl: 'audio1.mp3',
	},
	{
		id: '3',
		date: '2024-01-13',
		content: 'Had a great conversation with an old friend today.',
		mood: 4,
	},
];

const JournalList = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const filteredEntries = sampleEntries.filter((entry) =>
		entry.content.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-bold">My Journals</h1>
				<Link
					to="/journal/new"
					className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
					New Entry
				</Link>
			</div>

			<div className="mb-6">
				<input
					type="text"
					placeholder="Search journals..."
					className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>

			<div className="space-y-4">
				{filteredEntries.map((entry) => (
					<div key={entry.id} className="bg-card p-4 rounded-2xl">
						<div className="flex items-start justify-between mb-3">
							<div className="flex items-center gap-3">
								<MoodEmoji level={entry.mood} size="sm" />
								<span className="text-sm text-gray-600">{entry.date}</span>
							</div>
							{entry.audioUrl && (
								<span className="text-primary text-sm flex items-center gap-1">
									🎤 Voice Note
								</span>
							)}
						</div>
						<p className="text-gray-900 mb-3">{entry.content}</p>
						<div className="flex justify-end gap-2">
							<button className="text-sm text-gray-600 hover:text-gray-900">
								Edit
							</button>
							<button className="text-sm text-red-600 hover:text-red-700">
								Delete
							</button>
						</div>
					</div>
				))}
			</div>

			{filteredEntries.length === 0 && (
				<div className="text-center py-8">
					<p className="text-gray-600">No journal entries found</p>
				</div>
			)}
		</div>
	);
};

export default JournalList;
