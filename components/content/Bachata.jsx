import MichiYOli from '../../public/images/MichiyOli_bachata.webp';
import React from 'react';
import Image from 'next/image';
//import Videos from './videos/Videos';
import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';
const Bachata = ({ videos }) => {
	const [hasWindow, setHasWindow] = useState(false);
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setHasWindow(true);
		}
	}, []);
	return (
		<>
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

					<div className='max-w-[1024px] bg-white'>
						<h3 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-3'>
							Videos
						</h3>
						<div className='text-justify grid md:grid-cols-2 md:gap-x-3'>
							{videos.map((video) => (
								<div key={video.hlsUrl} className='shadow-xl round-lg'>
									<div>
										<h5 className='font-bold text-center text-orange-400 uppercase my-2'>
											{video.title}
										</h5>
										{hasWindow && (
											<ReactPlayer
												width='100%'
												height='100%'
												controls
												playsinline
												url={video.hlsUrl}
											/>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Bachata;
