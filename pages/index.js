import AboutUs from '../src/components/AboutUs';
import Bachata from '../src/components/Bachata';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import Hero from '../src/components/Hero';
import More from '../src/components/More';
import Navbar from '../src/components/Navbar';
import '../node_modules/video-react/dist/video-react.css';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Bachata />
			<More />
			<Contact />
			<AboutUs />
			<Footer />
		</>
	);
}

export default App;
