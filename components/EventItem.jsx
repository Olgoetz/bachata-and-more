import React from 'react';
import { MdDateRange } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import Image from 'next/image';

const EventItem = ({ image, title, date, address, bookingLink }) => {
	const formatedAddress = address.replace(', ', '\n');

	return (
		<li className='flex flex-col items-center md:flex-row shadow-xl round-lg p-3 my-3'>
			<Image src={image} width={250} height={150} />
			<div className='flex flex-col md:ml-4 w-full gap-3'>
				<h2 className='text-lg text-center md:text-left md:text-2xl font-bold'>
					{title}
				</h2>
				<div className='flex items-center'>
					<MdDateRange size={20} className='mr-1' />
					<time className='font-bold'>{date}</time>
				</div>
				<div className='flex items-center'>
					<GrLocation size={20} className='mr-1' />
					<address className='text-sm'>{formatedAddress}</address>
				</div>
				<button className='bg-orange-400 mx-auto justify-content w-[50%] text-black text-sm md:text-lg font-bold rounded-md px-3 py-1 uppercase hover:bg-orange-300 active:bg-orange-500'>
					<a href={bookingLink} target='_blank' rel='noreferrer'>
						Buchen
					</a>
				</button>
			</div>
		</li>
	);
};

export default EventItem;
