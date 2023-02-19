import Link from 'next/link';
import { useRouter } from 'next/router';

const style = {
	color: 'red',
	textDecoration: 'underline',
};

const ActiveLink = ({ href, text }) => {
	const { asPath } = useRouter();

	// console.log(asPath);

	return (
		<>
			<Link style={asPath === href ? style : null} href={href}>
				{text}
			</Link>
		</>
	);
};

export default ActiveLink;
