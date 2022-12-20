import Head from 'next/head';
import React from 'react';
import EventItem from './EventItem';

const Events = ({ events }) => {
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
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-10'>
						Übersicht unserer Events
					</h1>
					<div className='text-justify mx-auto max-w-[800px]'>
						<ul>
							{events.map((event) => (
								<EventItem
									key={event.id}
									title={event.title}
									venue={event.venue}
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
