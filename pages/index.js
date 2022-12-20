import AboutUs from '../components/AboutUs';
import Bachata from '../components/Bachata';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Events from '../components/Events';
import Hero from '../components/Hero';
import More from '../components/More';
import Head from 'next/head';
import '../node_modules/video-react/dist/video-react.css';
import events from '../data/events.json';
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
			<Events events={events} />
			<Contact />
			<AboutUs />
			<Footer />
		</>
	);
}

export default Home;
