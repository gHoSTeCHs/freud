import { useMemo } from 'react';
import type { MoodLevel } from './ui/mood-emoji';
import MoodEmoji from './ui/mood-emoji';

interface MoodEntry {
	level: MoodLevel;
	timestamp: string;
}

interface MoodHistoryProps {
	entries: MoodEntry[];
	className?: string;
}

const MoodHistory = ({ entries, className = '' }: MoodHistoryProps) => {
	const sortedEntries = useMemo(
		() =>
			[...entries].sort(
				(a, b) =>
					new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
			),
		[entries]
	);

	return (
		<div className={`space-y-4 ${className}`}>
			<h3 className="text-xl font-semibold">Mood History</h3>
			<div className="space-y-3">
				{sortedEntries.map((entry, index) => (
					<div
						key={index}
						className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
						<MoodEmoji level={entry.level} size="sm" />
						<div>
							<p className="text-sm text-gray-300">
								{new Date(entry.timestamp).toLocaleDateString('en-US', {
									weekday: 'long',
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								})}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MoodHistory;
export type { MoodEntry };
