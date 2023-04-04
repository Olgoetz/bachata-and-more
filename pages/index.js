import AboutUs from '../components/content/AboutUs';
import Introduction from '../components/content/Introduction';
import Teaser from '../components/ui/Teaser';
import Videos from '../components/ui/Videos';
import Contact from '../components/content/Contact';
import Events from '../components/content/events/Events';
import Hero from '../components/content/Hero';
import More from '../components/content/More';

import events from '../data/events.json';
import videos from '../data/videos.json';
import bachata from '../data/bachata.json';
import more from '../data/more.json';
function Home() {
	return (
		<>
			<Hero />
			<Introduction bachata={bachata} />
			<Teaser/>
			<Videos videos={videos} />
			
			<More classes={more} />
			<Events events={events} />
			<Contact />
			<AboutUs />
		</>
	);
}

export default Home;
