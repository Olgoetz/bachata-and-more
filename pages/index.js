import AboutUs from '../components/AboutUs';
import Bachata from '../components/Bachata';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import More from '../components/More';
import Head from 'next/head';
import '../node_modules/video-react/dist/video-react.css';

function Home() {
	return (
		<>
			<Head>
				<title>Bachata & More</title>
				<meta
					name='description'
					content='Bachata & More - Eventkonzept für Urlaubsorte'
				/>
				<link rel='icon' href='/fav.png' />
			</Head>

			<Hero />
			<Bachata />
			<More />
			<Contact />
			<AboutUs />
			<Footer />
		</>
	);
}

export default Home;
