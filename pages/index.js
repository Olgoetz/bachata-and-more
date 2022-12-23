import AboutUs from '../components/content/AboutUs';
import Bachata from '../components/content/Bachata';
import Contact from '../components/content/Contact';
import Events from '../components/content/events/Events';
import Hero from '../components/content/Hero';
import More from '../components/content/More';
import Head from 'next/head';
import '../node_modules/video-react/dist/video-react.css';
import { getAllEvents } from '../helpers/api-utils';

function Home(props) {
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
			<Events events={props.events} />
			<Contact />
			<AboutUs />
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {
			events: await getAllEvents(),
		},
	};
}

export default Home;
