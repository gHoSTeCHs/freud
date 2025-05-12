import MainLayout from '../layout/main-layout';
import HealthMetricsSection from './sections/health-metrics-section';
import PersonalSection from './sections/personal-section';

const Home = () => {
	return (
		<MainLayout>
			<div className="space-y-6">
				<PersonalSection />
				<HealthMetricsSection />
			</div>
		</MainLayout>
	);
};

export default Home;
