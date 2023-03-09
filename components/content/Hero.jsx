import Head from 'next/head';
import Typed from 'react-typed';
import DownloadConceptButton from '../ui/DownloadConceptButton';

const Hero = () => {
	//console.log(process.env.NODE_ENV);
	return (
		<>
			<div id='home' className='w-full'>
				{/* <div className='absolute w-full h-screen top-0 left-0 bg-gray-900/30'></div> */}
				<div className='flex space-x-3 h-screen items-center justify-center text-center text-white bg-center bg-cover bg-[url(../public/images/MichiyOli_hero.webp)]'>
					<div className='max-w-[400px] mx-auto bg-gray-900/50 p-4 '>
						<h1 className='md:text-5xl text-2xl text-orange-400'>Bachata Sensual </h1>
						<p className='md:text-3xl text-l'>with Michaela and Oliver </p>
					
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
