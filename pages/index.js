import AboutUs from '../components/content/AboutUs';
import Bachata from '../components/content/Bachata';
import Contact from '../components/content/Contact';
import Events from '../components/content/events/Events';
import Hero from '../components/content/Hero';
import More from '../components/content/More';

import events from '../data/events.json';
import videos from '../data/videos.json';

function Home() {
	return (
		<>
			<Hero />
			<Bachata videos={videos} />
			<More />
			<Events events={events} />
			<Contact />
			<AboutUs />
		</>
	);
}

export default Home;
