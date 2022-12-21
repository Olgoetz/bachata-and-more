import AboutUs from '../components/content/AboutUs';
import Bachata from '../components/content/Bachata';
import Contact from '../components/content/Contact';
import Events from '../components/content/events/Events';
import Hero from '../components/content/Hero';
import More from '../components/content/More';
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
		</>
	);
}

export default Home;
