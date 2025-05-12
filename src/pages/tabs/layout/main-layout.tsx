import BottomNavigation from "../../../components/bottom-navigation";

const MainLayout = ({children} : {children: React.ReactNode}) => {
	return <div>
		{children}
		<BottomNavigation/>
	</div>;
};

export default MainLayout;
