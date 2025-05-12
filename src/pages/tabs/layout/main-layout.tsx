import BottomNavigation from '../../../components/bottom-navigation';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-brown-10 mb-10">
			{children}
			<BottomNavigation />
		</div>
	);
};

export default MainLayout;
