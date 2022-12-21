import Head from 'next/head';
import AboutsUsImg from '../../public/images/MichiyOli_aboutus.webp';
import Image from 'next/image';
const AboutUs = () => {
	return (
		<>
			<Head>
				<title>Über uns</title>
				<meta
					name='description'
					content='Mich und Oli persönglich und ihr Werdegang'
				/>
			</Head>

			<div id='aboutus' className='w-full bg-white py-16 px-4'>
				<div className='max-w-[1024px] py-8 mx-auto grid md:grid-cols-2 md:gap-x-3'>
					<div className='flex flex-col justify-center'>
						<p className='text-xl uppercase font-bold text-orange-400'>
							Über uns
						</p>
						<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
							Michi & Oli
						</h1>
						<div className='text-justify'>
							<p>
								<span className='font-bold'>Michi</span> unterrichtet gut 20
								Jahre schon erfolgreich verschiedenste Kurse im Group Fitness
								Bereich in namhaften Fitness Studios in München und ist als
								Personaltrainerin tätig. Zudem ist sie Referentin für die IFAA.
							</p>
							<p className='py-1'>
								<span className='font-bold'> Oli</span> ist über 10 Jahre im
								Fitness Bereich tätig, absolvierte zahlreiche Ausbildungen und
								bildet regelmäßig für IFHIAS aus.
							</p>
							<p>
								<span className='font-bold'>Michi & Oli</span> lernten sich 2018
								im ROBINSON Club Soma Bay kennen. Nach dieser Zeit waren sie in
								diversen Clubanlagen mit Events aktiv. Michi ist schon immer
								eine leidenschaftliche Tänzerin, Oli entdeckte seine mit Bachata
								&quot;Sensual&quot;. 2021 boten sie zum ersten mal, anfangs als
								Experiment gedacht, einen Bachata Basic Kurs an. Der Kurs war
								dermaßen erforlgeich, dass noch weitere folgten. Dies war die
								Geburtsstunde von
								<span className='font-bold text-orange-400'> Bachata&More</span>
								.
							</p>
						</div>
					</div>
					<div className='flex flex-col justify-center'>
						<Image className='h-[70] mx-auto my-4' src={AboutsUsImg} alt='/' />
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
