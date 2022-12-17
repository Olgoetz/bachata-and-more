import Head from 'next/head';
import React from 'react';
import EventItem from './EventItem';

const Events = () => {
	const data = [
		{
			id: '1',
			title: 'ROBINSON Soma Bay - Stretch Your Mind',
			image:
				'https://www.robinson.com/media/_processed_/c/5/csm_sm96__7320_5c03d9b8f6.jpg',
			date: '18.03 - 25.03.2023',
			address:
				'Soma Bay km 48, Safaga Road P.O. Box 149, 84651 Hurghada (Ägypen)',
			bookingLink:
				'https://www.robinson.com/de/de/cluburlaub/aegypten/soma-bay/detailseite/',
		},
		{
			id: '2',
			title: 'ROBINSON Camyuva - Bachata & More',
			image:
				'https://www.robinson.com/media/_processed_/8/c/csm_cv41_13780_Hauptpool_ecc946438c.jpg',
			date: '11.08 - 18.08.2023',
			address: 'Çamyuva No:2, Turizm Blv., 07980 Kemer/Antalya (Türkei)',
			bookingLink:
				'https://www.robinson.com/de/de/cluburlaub/tuerkei/camyuva/club-details/',
		},
		{
			id: '3',
			title: 'ROBINSON Soma Bay - Bachata & More',
			image:
				'https://www.robinson.com/media/_processed_/c/5/csm_sm96__7320_5c03d9b8f6.jpg',
			date: '19.10 - 26.10.2023',
			address:
				'Soma Bay km 48, Safaga Road P.O. Box 149, 84651 Hurghada (Ägypen)',
			bookingLink:
				'https://www.robinson.com/de/de/cluburlaub/aegypten/soma-bay/detailseite/',
		},
	];
	return (
		<>
			<Head>
				<title>Events</title>
				<meta
					name='description'
					content='Bachata and More Events bzw. Eventübersicht'
				/>
			</Head>

			<div id='events' className='w-full bg-white py-16 px-4'>
				<div className='max-w-[1024px] pt-8 mx-auto '>
					<p className='text-xl uppercase font-bold text-orange-400'>Events</p>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-20'>
						Übersicht unserer Events
					</h1>
					<div className='text-justify mx-auto max-w-[800px]'>
						<ul>
							{data.map((event) => (
								<EventItem
									key={event.id}
									title={event.title}
									image={event.image}
									date={event.date}
									address={event.address}
									bookingLink={event.bookingLink}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Events;
