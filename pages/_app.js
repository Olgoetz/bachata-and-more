
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/globals.css';

import { Raleway } from '@next/font/google';
import {DefaultSeo} from 'next-seo';
import SEO from '../next-seo.config';
const raleway = Raleway({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-raleway',
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			
			<DefaultSeo {...SEO} />
			<main className={`${raleway.variable} font-sans`}>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</main>
		</>
	);
}

export default MyApp;
