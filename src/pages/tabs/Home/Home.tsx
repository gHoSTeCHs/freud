import MainLayout from '../layout/main-layout';
import PersonalSection from './sections/personal-section';

const Home = () => {
	return (
		<MainLayout>
			<div className="space-y-6">
				<PersonalSection />
			</div>
		</MainLayout>
	);
};

export default Home;
