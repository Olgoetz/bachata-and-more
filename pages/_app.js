import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Bachata and More</title>
				<meta name='description' content='Bachata and More Events' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
