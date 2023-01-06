import AboutUs from '../components/content/AboutUs';
import Bachata from '../components/content/Bachata';
import Contact from '../components/content/Contact';
import Events from '../components/content/events/Events';
import Hero from '../components/content/Hero';
import More from '../components/content/More';

import { getAllEvents, getAllVideos } from '../helpers/api-utils';

function Home(props) {
	return (
		<>
			<Hero />
			<Bachata videos={props.videos} />
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
			videos: await getAllVideos(),
		},
	};
}

export default Home;
