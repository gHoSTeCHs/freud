import BottomNavigation from '../../../components/bottom-navigation';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="">
			{children}
			<BottomNavigation />
		</div>
	);
};

export default MainLayout;
