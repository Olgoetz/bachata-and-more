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
					content='Workout-, Yoga- sowie Bachatakurse für Events'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta property='og:title' content='Bachata & More' />
				<meta property='og:url' content='https://www.bachata-and-more.de' />
				<meta
					property='og:description'
					content='Workout-, Yoga- sowie Bachatakurse für Events'
				/>
				<meta
					property='og:image'
					content='../public/images_original/MichiyOli_hero.jpg'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:locale' content='de_DE' />
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
