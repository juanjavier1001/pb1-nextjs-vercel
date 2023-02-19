import ActiveLink from './ActiveLink';

const menuItems = [
	{ text: 'Home', href: '/' },
	{ text: 'About', href: '/about' },
	{ text: 'Contact', href: '/contacts' },
	{ text: 'Pricing', href: '/pricing' },
];

const NavBar = () => {
	return (
		<>
			<nav>
				{menuItems.map(({ text, href }, i) => {
					return <ActiveLink key={i} text={text} href={href} />;
				})}
				{/* {menuItems.map((e) => {
					return <ActiveLink text={e.text} href={e.href} />;
				})} */}
				{/* <ActiveLink text="home" href="/" />
				<ActiveLink text="about" href="/about" />
				<ActiveLink text="contact" href="/contacts" />
				<ActiveLink text="pricing" href="/pricing" /> */}
			</nav>
		</>
	);
};

export default NavBar;
