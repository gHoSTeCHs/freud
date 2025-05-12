import React from 'react';
import { Heart, Smile, FileText } from 'lucide-react';

const CircularProgress = ({
	value,
	color,
}: {
	value: number;
	color: string;
}) => {
	const radius = 50;
	const circumference = 2 * Math.PI * radius;
	const progress = value / 100;
	const strokeDashoffset = circumference * (1 - progress);

	return (
		<div className="relative flex items-center justify-center w-24 h-24">
			<svg
				className="absolute"
				width="100%"
				height="100%"
				viewBox="0 0 120 120">
				<circle
					cx="60"
					cy="60"
					r={radius}
					fill="none"
					stroke={`${color}40`}
					strokeWidth="10"
				/>
				<circle
					cx="60"
					cy="60"
					r={radius}
					fill="none"
					stroke={color}
					strokeWidth="10"
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					strokeLinecap="round"
					transform="rotate(-90 60 60)"
				/>
			</svg>
			<div className="flex flex-col items-center justify-center">
				<span className="text-3xl font-bold text-white">{value}</span>
				<span className="text-xs text-white">Healthy</span>
			</div>
		</div>
	);
};

const MoodBarChart = ({ mood, color }: { mood: string; color: string }) => {
	const barHeights = [20, 30, 15, 45, 60, 80, 70, 55, 40, 25, 15, 10, 5];

	return (
		<div className="flex flex-col items-center justify-between h-full">
			<span className="text-2xl font-bold text-white mb-2">{mood}</span>
			<div className="flex items-end justify-center gap-1 h-16 mb-1">
				{barHeights.map((height, index) => (
					<div
						key={index}
						className="w-1 rounded-t-full bg-white"
						style={{ height: `${height}%` }}
					/>
				))}
			</div>
		</div>
	);
};

const HealthJournal = ({
	days,
	totalDays,
	color,
}: {
	days: number;
	totalDays: number;
	color: string;
}) => {
	const gridSize = 7;
	const grid = Array(gridSize)
		.fill(0)
		.map((_, i) =>
			Array(gridSize)
				.fill(0)
				.map((_, j) => i * gridSize + j)
		);

	return (
		<div className="flex flex-col items-center justify-between h-full">
			<span className="text-2xl font-bold text-white mb-1">
				{days}/{totalDays}
			</span>
			<div className="grid grid-cols-7 gap-1 mb-1">
				{grid.map((row, i) =>
					row.map((dayIndex, j) => (
						<div
							key={`${i}-${j}`}
							className={`w-3 h-3 rounded-full ${
								dayIndex < days ? 'bg-white' : 'bg-white/40'
							}`}
						/>
					))
				)}
			</div>
		</div>
	);
};

export type MetricType = 'freud' | 'mood' | 'journal';

export interface MetricCardProps {
	type: MetricType;
	title: string;
	value: number | string;
	bgColor: string;
	icon?: React.ReactNode;
	totalDays?: number;
}

const MetricCard = ({
	type,
	title,
	value,
	bgColor,
	icon,
	totalDays = 365,
}: MetricCardProps) => {
	return (
		<div
			className="flex flex-col p-4 rounded-3xl h-48 w-full"
			style={{ backgroundColor: bgColor }}>
			<div className="flex items-center gap-2 mb-3">
				{icon ||
					(type === 'freud' ? (
						<Heart className="text-white" />
					) : type === 'mood' ? (
						<Smile className="text-white" />
					) : (
						<FileText className="text-white" />
					))}
				<span className="text-white font-medium">{title}</span>
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
				{type === 'journal' && (
					<HealthJournal
						days={typeof value === 'number' ? value : 0}
						totalDays={totalDays}
						color="white"
					/>
				)}
			</div>
		</div>
	);
};

interface MentalHealthMetricsProps {
	freudScore: number;
	mood: string;
	moodColor: string;
	journalDays: number;
	totalDays?: number;
}

const MentalHealthMetrics = ({
	freudScore,
	mood,
	moodColor,
	journalDays,
	totalDays = 365,
}: MentalHealthMetricsProps) => {
	const moodColorMap: Record<string, string> = {
		Happy: '#4CAF50',
		Sad: '#FF7043',
		Angry: '#F44336',
		Anxious: '#FFC107',
		Neutral: '#9E9E9E',
	};

	return (
		<div className="w-full">
			<div className="border border-dashed border-gray-30 rounded-3xl p-4">
				<div className="grid grid-cols-3 md:grid-cols-3 gap-4">
					<MetricCard
						type="freud"
						title="Freud Score"
						value={freudScore}
						bgColor="#9BB068"
						icon={<Heart className="text-white" />}
					/>

					<MetricCard
						type="mood"
						title="Mood"
						value={mood}
						bgColor={moodColorMap[mood] || moodColor}
						icon={<Smile className="text-white" />}
					/>

					<MetricCard
						type="journal"
						title="Health Journal"
						value={journalDays}
						totalDays={totalDays}
						bgColor="#8978E1"
						icon={<FileText className="text-white" />}
					/>
				</div>
			</div>
		</div>
	);
};

export default MentalHealthMetrics;

// Example usage:
// export const MentalHealthMetricsExample = () => {
// 	return (
// 		<MentalHealthMetrics
// 			freudScore={80}
// 			mood="Sad"
// 			moodColor="#FF7043" // orange-40
// 			journalDays={31}
// 		/>
// 	);
// };
