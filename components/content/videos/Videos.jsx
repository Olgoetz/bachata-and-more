import React from 'react';
import VideoItem from './VideoItem';

const getPoster = () => {
	const num = Math.floor(Math.random() * 4);
	const locations = [
		'/images/MichiyOli_bachata.webp',
		'/images/MichiyOli_contact.webp',
		'/images/MichiyOli_contact2.webp',
		'/images/MichiyOli_hero.webp',
	];

	return locations[num];
};
const Videos = ({ videos }) => {
	return (
		<>
			<div id='videos' className='bg-white'>
				<h3 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-3'>
					Videos
				</h3>
				<div className='text-justify grid md:grid-cols-3 md:gap-x-2'>
					{videos.map((video) => (
						<VideoItem
							poster={getPoster()}
							key={video.hlsUrl}
							title={video.title}
							hlsUrl={video.hlsUrl}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Videos;
