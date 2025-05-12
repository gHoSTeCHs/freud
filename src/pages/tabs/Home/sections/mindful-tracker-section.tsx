import React from 'react';

import { Clock, Moon, BookOpen, AlertTriangle } from 'lucide-react';
import TrackerComponent from '../../../../components/ui/tracker-component';

const MindfulTrackerSection: React.FC = () => {
	const MindfulHoursChart = () => (
		<svg
			width="80"
			height="40"
			viewBox="0 0 80 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5 25C10 15 15 30 25 20C35 10 45 25 60 5C70 15 75 30"
				stroke="#A0C27C"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5 25C10 15 15 30 25 20C35 10 45 25 60 5"
				stroke="#6B8E23"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	const SleepQualityIndicator = () => (
		<div className="relative w-10 h-10">
			<svg width="40" height="40" viewBox="0 0 40 40">
				<circle
					cx="20"
					cy="20"
					r="15"
					fill="none"
					stroke="#e0e0e0"
					strokeWidth="5"
				/>
				<circle
					cx="20"
					cy="20"
					r="15"
					fill="none"
					stroke="#9370DB"
					strokeWidth="5"
					strokeDasharray="94.2"
					strokeDashoffset="85"
					transform="rotate(-90 20 20)"
				/>
				<text
					x="20"
					y="25"
					textAnchor="middle"
					fill="#444"
					fontSize="12"
					fontWeight="bold">
					1
				</text>
			</svg>
		</div>
	);

	const JournalStreakGrid = () => (
		<div className="grid grid-cols-4 gap-1">
			{[...Array(16)].map((_, i) => {
				let bgColor = 'bg-[var(--color-orange-10)]';
				if (i === 7 || i === 8 || i === 11 || i === 12 || i === 13) {
					bgColor = 'bg-[var(--color-orange-50)]';
				} else if (i === 2 || i === 3 || i === 6) {
					bgColor = 'bg-[var(--color-orange-30)]';
				}

				return (
					<div key={i} className={`w-3 h-3 rounded-[4px] ${bgColor}`}></div>
				);
			})}
		</div>
	);

	const StressLevelBar = () => (
		<div className="w-40 h-2.5 bg-[var(--color-gray-30)] rounded-full overflow-hidden">
			<div
				className="h-full bg-[var(--color-yellow-50)] rounded-full"
				style={{ width: '60%' }}></div>
		</div>
	);

	// Mood tracker slider
	// const MoodTracker = () => (
	// 	<div className="flex items-center gap-4">
	// 		<span className="text-xs font-medium text-[var(--color-orange-50)]">
	// 			SAD
	// 		</span>
	// 		<div className="relative w-20 h-0.5 bg-[var(--color-gray-30)]">
	// 			<div className="absolute -top-1 left-3 transform -translate-x-1/2">
	// 				<svg width="12" height="12" viewBox="0 0 24 24" fill="none">
	// 					<path d="M12 5L5 19H19L12 5Z" fill="#444" />
	// 				</svg>
	// 			</div>
	// 		</div>
	// 		<span className="text-xs font-medium text-[var(--color-gray-70)]">
	// 			NEUTRAL
	// 		</span>
	// 		<div className="relative w-20 h-0.5 bg-[var(--color-gray-30)]">
	// 			<div className="absolute -top-1 left-14 transform -translate-x-1/2">
	// 				<svg width="12" height="12" viewBox="0 0 24 24" fill="none">
	// 					<path d="M12 5L5 19H19L12 5Z" fill="#444" />
	// 				</svg>
	// 			</div>
	// 		</div>
	// 		<span className="text-xs font-medium text-[var(--color-green-60)]">
	// 			HAPPY
	// 		</span>
	// 	</div>
	// );

	return (
		<div className="max-w-lg mx-auto p-4 ">
			<h2 className="text-2xl font-bold text-[var(--color-brown-80)] mb-3 overflow-hidden">
				Mindful Tracker
			</h2>

			<TrackerComponent
				bg="bg-white"
				leftComponent={
					<Clock className="text-[var(--color-green-60)]" size={24} />
				}
				leftComponentBg="bg-green-10"
				header="Mindful Hours"
				description="2.5h/8h"
				rightComponent={<MindfulHoursChart />}
			/>

			<TrackerComponent
				bg="bg-white"
				leftComponent={
					<Moon className="text-[var(--color-purple-60)]" size={24} />
				}
				leftComponentBg="bg-purple-10"
				header="Sleep Quality"
				description="Insomniac (~2h Avg)"
				rightComponent={<SleepQualityIndicator />}
			/>

			<TrackerComponent
				bg="bg-white"
				leftComponent={
					<BookOpen className="text-[var(--color-orange-50)]" size={24} />
				}
				leftComponentBg="bg-orange-10"
				header="Mindful Journal"
				description="64 Day Streak"
				rightComponent={<JournalStreakGrid />}
			/>

			<TrackerComponent
				bg="bg-white"
				leftComponent={
					<AlertTriangle className="text-[var(--color-yellow-50)]" size={24} />
				}
				leftComponentBg="bg-yellow-10"
				header="Stress Level"
				description="Level 3 (Normal)"
				middleComponent={<StressLevelBar />}
			/>

			{/* <TrackerComponent
				bg="bg-[var(--color-gray-10)]"
				leftComponent={
					<SmilePlus className="text-[var(--color-brown-60)]" size={24} />
				}
				header="Mood Tracker"
				description=""
				middleComponent={<MoodTracker />}
			/> */}
		</div>
	);
};

export default MindfulTrackerSection;
