import { useState } from 'react';
import { Link } from 'react-router';
import type { JournalStats } from '../../types/journal';
import MainLayout from '../tabs/layout/main-layout';

const JournalOverview = () => {
	const [stats] = useState<JournalStats>({
		totalEntries: 34,
		weeklyAverage: 4.5,
		monthlyAverage: 18,
		streakDays: 7,
		lastEntry: new Date('2024-01-15'),
	});

	return (
		<MainLayout bg="bg-brown-10">
			<div className="p-4 space-y-6">
				{/* Header Section */}
				<div className="text-center space-y-2">
					<div className="text-6xl font-bold text-brown-90">
						{stats.totalEntries}
					</div>
					<div className="text-brown-60">Journal Entries this year</div>
				</div>

				{/* Stats Grid */}
				<div className="grid grid-cols-2 gap-4">
					<div className="bg-white p-4 rounded-2xl space-y-1">
						<div className="text-2xl font-bold text-brown-90">
							{stats.weeklyAverage}
						</div>
						<div className="text-sm text-brown-60">Weekly Average</div>
					</div>
					<div className="bg-white p-4 rounded-2xl space-y-1">
						<div className="text-2xl font-bold text-brown-90">
							{stats.monthlyAverage}
						</div>
						<div className="text-sm text-brown-60">Monthly Average</div>
					</div>
					<div className="bg-white p-4 rounded-2xl space-y-1">
						<div className="text-2xl font-bold text-brown-90">
							{stats.streakDays}
						</div>
						<div className="text-sm text-brown-60">Day Streak</div>
					</div>
					<div className="bg-white p-4 rounded-2xl space-y-1">
						<div className="text-2xl font-bold text-brown-90">
							{stats.lastEntry?.toLocaleDateString()}
						</div>
						<div className="text-sm text-brown-60">Last Entry</div>
					</div>
				</div>

				{/* Action Buttons */}
				<div className="space-y-3">
					<Link
						to="/journal/new"
						className="block w-full bg-brown-90 text-white py-3 rounded-xl text-center font-medium">
						Write New Entry
					</Link>
					<Link
						to="/journal/voice"
						className="block w-full bg-brown-60 text-white py-3 rounded-xl text-center font-medium">
						Record Voice Entry
					</Link>
					<Link
						to="/journal/list"
						className="block w-full bg-white text-brown-90 py-3 rounded-xl text-center font-medium border border-brown-30">
						View All Entries
					</Link>
				</div>
			</div>
		</MainLayout>
	);
};

export default JournalOverview;
