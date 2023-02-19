import MainLayout from '@/components/layouts/MainLayout';
import Link from 'next/link';

const About = () => {
	return (
		<>
			<MainLayout>
				<h1>About</h1>
				<Link href="/">Home</Link>
			</MainLayout>
		</>
	);
};

export default About;
