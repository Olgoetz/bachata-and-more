import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Bachata and More</title>
				<meta
					name='description'
					content='Bachata & More - Eventkonzept für Urlaubsorte'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
