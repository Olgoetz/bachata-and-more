import Head from 'next/head';
import Typed from 'react-typed';
import DownloadConceptButton from './DownloadConceptButton';
const Hero = () => {
	console.log(process.env.NODE_ENV);
	return (
		<>
			<Head>
				<title>Willkommen zu Bachata and More</title>
				<meta
					name='description'
					content='Bachata Sensual und Fitnesskurse für Events'
				/>
			</Head>

			<div id='home' className='w-full'>
				{/* <div className='absolute w-full h-screen top-0 left-0 bg-gray-900/30'></div> */}
				<div className='flex space-x-3 h-screen items-center justify-center text-center text-white bg-center bg-cover bg-[url(../public/images/MichiyOli_hero.webp)]'>
					<div className='max-w-[400px] mx-auto bg-gray-900/50 p-4 '>
						<p className='md:text-3xl text-xl'>Eine Kursangebot aus </p>
						<Typed
							strings={['Bachata', 'Dance', 'Yoga', 'Animal Flow', 'HIIT']}
							typeSpeed={40}
							backSpeed={50}
							attr=''
							loop
							className='md:text-4xl text-2xl uppercase border-none font-bold text-orange-400'
						/>

						<div className='mt-4'>
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
		</>
	);
};

export default Hero;
