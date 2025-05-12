import { Heart, Smile, FileText } from 'lucide-react';
import type { MetricCardProps } from '..';
import CircularProgress from './ui/circular-progress';
import MoodBarChart from './ui/moodbars';

const MetricCard = ({ metric, className = '' }: MetricCardProps) => {
	const { type, title, value, bgColor, icon } = metric;

	return (
		<div
			className={`flex flex-col p-4 rounded-3xl min-w-[180px] max-w-[200px] h-44 ${className}`}
			style={{ backgroundColor: bgColor }}>
			<div className="flex items-center justify-between mb-2">
				<div className="flex items-center gap-2">
					{icon ||
						(type === 'freud' ? (
							<Heart className="text-white" size={20} />
						) : type === 'mood' ? (
							<Smile className="text-white" size={20} />
						) : (
							<FileText className="text-white" size={20} />
						))}
					<span className="text-white text-sm font-medium">{title}</span>
				</div>
			</div>

			<div className="flex-1 flex items-center justify-center">
				{type === 'freud' && (
					<CircularProgress
						value={typeof value === 'number' ? value : 0}
						color="white"
					/>
				)}
				{type === 'mood' && (
					<MoodBarChart mood={value.toString()} color="white" />
				)}
			</div>
		</div>
	);
};

export default MetricCard;
