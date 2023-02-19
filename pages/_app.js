import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			{/* <MainLayout />  */}
			{/* <NavBar /> */}
			<Component {...pageProps} />
		</>
	);
}

/* const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App; */
