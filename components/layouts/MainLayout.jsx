import NavBar from '../NavBar';

const MainLayout = ({ children }) => {
	return (
		<>
			<NavBar />
			<main>{children}</main>
		</>
	);
};

export default MainLayout;

/* import NavBar from '../navBar';

const MainLayout = ({ children }) => {
	return (
		<>
			<NavBar />
			<main>{children}</main>
		</>
	);
};

export default MainLayout;
 */
