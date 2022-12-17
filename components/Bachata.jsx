import Head from 'next/head';
import MichiYOli from '../public/images/MichiyOli_bachata.webp';
import React from 'react';
import { Player } from 'video-react';
import Image from 'next/image';

const Bachata = () => {
	return (
		<>
			<Head>
				<title>Bachata Sensual</title>
				<meta
					name='description'
					content='Bachata Sensual Beschreibung und Videos'
				/>
			</Head>

			<div id='bachata' className='w-full bg-white py-16 px-4'>
				<div className='max-w-[1024px] pt-8 mx-auto '>
					<div className='grid md:grid-cols-2 md:gap-x-3'>
						<div className='flex flex-col justify-center'>
							<p className='text-xl uppercase font-bold text-orange-400'>
								BACHATA
							</p>
							<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
								Bachata Sensual
							</h1>

							<p className='text-justify'>
								Nichts ist derzeit mehr im Trend als Bachata. Bachata stammt
								ursprünglich aus der Dominikanischen Republik und hat
								mittlerweile eine sehr große Community in Europa. Es gibt
								verschiedene Formen des Bachatas. Wir fokussieren uns auf den
								Stil &quot;Bachata Sensual&quot;. Dieser ist geprägt von
								tendenziell langsamerer Musik und somit einfach zu Erlernen.
								Sinnlichkeit und Figuren wie Bodywaves oder Headrolls sind
								charakteristisch und betonen die Körperlichkeit von Mann und
								Frau. Wir möchten unsere Leidenschaft an euch weitergeben. Wir
								bieten Bachatakurse inklusive täglicher Übungungsabende sowie
								einen fulminanten 3-stündigen Abschlussabend an.
							</p>
						</div>
						<div className='flex flex-col justify-center'>
							<Image
								className='mx-auto my-4'
								src={MichiYOli}
								alt='Michi-und-Oli_BachataSensual'
							/>
						</div>
					</div>
					<h3 className='md:text-3xl sm:text-2xl text-1xl font-bold py-2'>
						Bachata Videos
					</h3>
					<div className='max-w-[1024px] mx-auto grid md:grid-cols-3 gap-y-3 md:gap-x-3'>
						<div>
							<h5 className='font-bold text-orange-400'>ROBINSON Camyuva</h5>
							<Player className='py-2 md:py-5 my-5'>
								<source
									src='https://bachata-and-more.s3.eu-central-1.amazonaws.com/videos/robinsoncamyuva-bachatasensual-michiyoli-1.MOV'
									type='video/mp4'
								/>
							</Player>
						</div>
						<div>
							<h5 className='font-bold text-orange-400'>ROBINSON SomaBay</h5>
							<Player className='py-2 md:py-5 my-5'>
								<source
									src='https://bachata-and-more.s3.eu-central-1.amazonaws.com/videos/robinsonsomabay-bachatasensual-michiyoli-3.MOV'
									type='video/mp4'
								/>
							</Player>
						</div>
						<div>
							<h5 className='font-bold text-orange-400'>ROBINSON Camyuva</h5>
							<Player className='py-2 md:py-5 my-5'>
								<source
									src='https://bachata-and-more.s3.eu-central-1.amazonaws.com/videos/robinsoncamyuva-bachatasensual-michiyoli-3.MOV'
									type='video/mp4'
								/>
							</Player>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Bachata;
