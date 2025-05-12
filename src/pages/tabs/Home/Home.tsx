import { Heart, Smile, FileText } from 'lucide-react';
import type { MetricData } from '../../..';
import MainLayout from '../layout/main-layout';
import PersonalSection from './sections/personal-section';
import MentalHealthCarousel from './sections/mental-health-carousel';
import MindfulTrackerSection from './sections/mindful-tracker-section';
import ArticlesSection from './sections/articles-section';

const Home = () => {
	const sampleMetrics: MetricData[] = [
		{
			id: '1',
			type: 'freud',
			title: 'Freud Score',
			value: 80,
			bgColor: '#9BB068', // green-50
			icon: <Heart className="text-white" size={20} />,
		},
		{
			id: '2',
			type: 'mood',
			title: 'Mood',
			value: 'Sad',
			bgColor: '#ED7E1C', // orange-40
			icon: <Smile className="text-white" size={20} />,
		},
		{
			id: '3',
			type: 'journal',
			title: 'Health Journal',
			value: 31,
			bgColor: '#8978E1', // purple-50
			icon: <FileText className="text-white" size={20} />,
		},
		{
			id: '4',
			type: 'sleep',
			title: 'Sleep Quality',
			value: 75,
			bgColor: '#6C5FC8', // purple-60
			icon: null,
		},
		{
			id: '5',
			type: 'exercise',
			title: 'Exercise',
			value: 45,
			bgColor: '#AC8C6C',
			icon: null,
		},
	];
	return (
		<MainLayout>
			<div className="space-y-6">
				<PersonalSection />
				<MentalHealthCarousel metrics={sampleMetrics} />
				<MindfulTrackerSection />
				<ArticlesSection />
			</div>
		</MainLayout>
	);
};

export default Home;
