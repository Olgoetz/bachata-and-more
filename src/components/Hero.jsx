import Typed from 'react-typed';
import DownloadConceptButton from './DownloadConceptButton';

const Hero = () => {
	return (
		<div className='w-full h-screen'>
			<video
				className='w-full h-screen object-cover'
				autoPlay
				loop
				muted
				playsInline
			>
				<source
					src={require('../../public/videos/hero_teaser.mp4')}
					type='video/mp4'
				/>
			</video>
			<div className='absolute w-full h-screen top-0 left-0 bg-gray-900/30'></div>
			<div className='absolute top-0 w-full h-full flex flex-col justify-top text-center text-white'>
				<div>
					<h2 className='md:text-5xl text-3xl font-bold text-orange-400'>
						Bachata&More.
					</h2>
					<div className='flex mt-4 space-x-3 justify-center'>
						<p className='md:text-3xl text-xl'>Eine Kursangebot aus </p>
						<Typed
							strings={['Bachata', 'Dance', 'Yoga', 'Animal Flow', 'HIIT']}
							typeSpeed={40}
							backSpeed={50}
							attr=''
							loop
							className='md:text-4xl text-2xl uppercase border-none font-bold text-orange-400'
						/>
					</div>
					<div className='flex mt-4 justify-center'>
						<DownloadConceptButton />
					</div>
				</div>
			</div>
			{/* <img
				alt='bachata_michi&oli'
				className='max-lg:hidden w-full h-full object-cover'
				src={hero_img}
			/> */}
		</div>
	);
};

export default Hero;
