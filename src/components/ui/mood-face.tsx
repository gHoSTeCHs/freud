import { cn } from 'tailwind-cn';
import { type MoodLevel } from './mood-emoji';

const moodEmojis = {
	1: '😫', // Very Stressed
	2: '😟', // Stressed
	3: '😐', // Neutral
	4: '🙂', // Good
	5: '😊', // Great
};

interface MoodFaceProps {
	level: MoodLevel;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	className?: string;
}

const moodSizes = {
	sm: 'text-2xl',
	md: 'text-3xl',
	lg: 'text-4xl',
	xl: 'text-5xl',
};

const MoodFace = ({ level, size = 'md', className }: MoodFaceProps) => {
	return (
		<span
			className={cn('leading-none select-none', moodSizes[size], className)}
			role="img"
			aria-label={`Mood level ${level}`}>
			{moodEmojis[level]}
		</span>
	);
};

export default MoodFace;
