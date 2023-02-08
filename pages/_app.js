import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/globals.css';

import { Raleway } from '@next/font/google';

const raleway = Raleway({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-raleway',
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Bachata and More</title>
				<meta
					name='description'
					content='Eventkonzept für Workout-, Yoga- und Bachatakurse'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta property='og:title' content='Bachata & More' />
				<meta property='og:url' content='https://www.bachata-and-more.de' />
				<meta
					property='og:description'
					content='Workout-, Yoga- sowie Bachatakurse für Events'
				/>
				<meta property='og:type' content='image/png' />
				<meta
					property='og:image'
					content='https://bachata-and-more.s3.eu-central-1.amazonaws.com/pictures/MichiyOli_hero.png'
				/>
				<meta property='og:image:width' content='600' />

				<meta property='og:image:height' content='300' />
				<meta property='og:locale' content='de_DE' />
			</Head>
			<main className={`${raleway.variable} font-sans`}>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</main>
		</>
	);
}

export default MyApp;
