import MainLayout from '@/components/layouts/MainLayout';
import Link from 'next/link';

const Contact = () => {
	return (
		<>
			<MainLayout>
				<h1>Contact</h1>
				<Link href="/">volver a home </Link>
			</MainLayout>
		</>
	);
};

export default Contact;
