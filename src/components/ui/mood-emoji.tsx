import { cn } from 'tailwind-cn';
import MoodFace from './mood-face';

type MoodLevel = 1 | 2 | 3 | 4 | 5;

interface MoodEmojiProps {
	level: MoodLevel;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	className?: string;
}

const moodColors = {
	1: 'var(--color-purple-30)',
	2: 'var(--color-orange-40)',
	3: 'var(--color-brown-50)',
	4: 'var(--color-yellow-40)',
	5: 'var(--color-green-40)',
};

const moodSizes = {
	sm: 'w-12 h-12',
	md: 'w-16 h-16',
	lg: 'w-24 h-24',
	xl: 'w-32 h-32',
};

const MoodEmoji = ({ level, size = 'md', className }: MoodEmojiProps) => {
	return (
		<div
			className={cn(
				'rounded-full flex items-center justify-center',
				moodSizes[size],
				className
			)}
			style={{ backgroundColor: moodColors[level] }}>
			<MoodFace level={level} size={size} className="text-white" />
		</div>
	);
};

export default MoodEmoji;
export type { MoodLevel };
