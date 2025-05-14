import BottomNavigation from '../../../components/bottom-navigation';

const MainLayout = ({
	children,
	bg,
}: {
	children: React.ReactNode;
	bg?: string;
}) => {
	return (
		<div className={`${bg}`}>
			{children}
			<BottomNavigation />
		</div>
	);
};

export default MainLayout;
