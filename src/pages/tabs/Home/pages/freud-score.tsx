import { Settings } from 'lucide-react';
import MentalScore from '../../../../components/ui/mental-health-score';
import TrackerComponent from '../../../../components/ui/tracker-component';
import MainLayout from '../../layout/main-layout';

interface DailyScoreProps {
	date: Date;
	score: number;
}

const FreudScorePage = () => {
	const dailyScore: DailyScoreProps[] = [
		{
			date: new Date('12-07-2024'),
			score: 80,
		},
		{
			date: new Date('12-08-2024'),
			score: 16,
		},
		{
			date: new Date('12-09-2024'),
			score: 82,
		},
		{
			date: new Date('12-10-2024'),
			score: 78,
		},
		{
			date: new Date('12-11-2024'),
			score: 85,
		},
		{
			date: new Date('12-12-2024'),
			score: 40,
		},
	];

	const componentHeaderAndDescription = (score: number) => {
		if (score < 30) {
			return {
				header: 'Low',
				description: 'You need to take care of yourself',
			};
		} else if (score >= 30 && score < 70) {
			return {
				header: 'Anxious, Depressed',
				description: 'Please do 25mins of Mindfullness',
			};
		} else if (score >= 70) {
			return {
				header: 'High',
				description: 'Great job! Keep it up!',
			};
		} else if (score >= 90) {
			return {
				header: 'Very Happy',
				description: 'No Recommendation',
			};
		} else {
			return {
				header: 'Invalid Score',
				description: 'The score provided is not valid',
			};
		}
	};

	const monthAbb = (month: number) => {
		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];

		return months[month];
	};

	return (
		<MainLayout>
			<div className="flex flex-col h-screen overflow-hidden">
				<div className="h-1/2 bg-green-50 w-full -z-10"></div>

				<div className="h-1/2 overflow-y-auto bg-transparent relative">
					<div className="h-[960px] w-[960px] -ml-[300px] -mt-[50px] bg-white rounded-full fixed -z-1"></div>

					<div className="px-4 pb-8">
						<div className="flex items-center justify-between pt-4 mb-2">
							<h2 className="text-brown-80 text-lg font-extrabold">
								Mental Score History
							</h2>
							<Settings className="text-brown-20" />
						</div>

						<div className="pb-6">
							{dailyScore.map((score, index: number) => {
								const headerAndDescription = componentHeaderAndDescription(
									score.score
								);

								const dateComponent = (
									<div className="flex flex-col items-center justify-center">
										<span className="text-sm uppercase text-brown-20">
											{monthAbb(score.date.getMonth())}
										</span>

										<span className="text-brown-80 text-xl font-extrabold">
											{score.date.getDate()}
										</span>
									</div>
								);

								return (
									<TrackerComponent
										key={index}
										bg="bg-brown-10"
										header={headerAndDescription.header}
										description={headerAndDescription.description}
										leftComponent={dateComponent}
										leftComponentWidth="w-[48px]"
										leftComponentBg="bg-white"
										leftComponentRadius="rounded-[12px]"
										rightComponent={
											<MentalScore score={score.score} maxScore={100} />
										}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default FreudScorePage;
