import { useState } from 'react';
import MoodEmoji from '../../../components/ui/mood-emoji';
import type { MoodLevel } from '../../../components/ui/mood-emoji';
import { cn } from 'tailwind-cn';

interface MoodSelectionProps {
	onSelect?: (level: MoodLevel) => void;
	selectedMood?: MoodLevel;
}

const moods: { level: MoodLevel; label: string }[] = [
	{ level: 5, label: 'Great' },
	{ level: 4, label: 'Good' },
	{ level: 3, label: 'Neutral' },
	{ level: 2, label: 'Stressed' },
	{ level: 1, label: 'Very Stressed' },
];

const MoodSelection = ({ onSelect, selectedMood }: MoodSelectionProps) => {
	const [selected, setSelected] = useState<MoodLevel | undefined>(selectedMood);

	const handleSelect = (level: MoodLevel) => {
		setSelected(level);
		onSelect?.(level);
	};

	return (
		<div className="p-4">
			<h2 className="text-2xl font-semibold mb-6 text-center">
				How are you feeling?
			</h2>
			<div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
				{moods.map(({ level, label }) => (
					<button
						key={level}
						className={cn(
							'flex flex-col items-center gap-2 p-4 rounded-lg transition-transform',
							selected === level && 'scale-110'
						)}
						onClick={() => handleSelect(level)}>
						<MoodEmoji level={level} size="lg" />
						<span className="text-sm font-medium">{label}</span>
					</button>
				))}
			</div>
		</div>
	);
};

export default MoodSelection;
