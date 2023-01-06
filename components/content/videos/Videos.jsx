import React from 'react';
import VideoItem from './VideoItem';
import ReactPlayer from 'react-player';
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
				{/* <div className='text-justify grid md:grid-cols-2 md:gap-x-3'>
					{videos.map((video) => (
						<VideoItem
							poster={getPoster()}
							key={video.hlsUrl}
							title={video.title}
							hlsUrl={video.hlsUrl}
						/>
					))}
				</div> */}
				<div className='text-justify grid md:grid-cols-2 md:gap-x-3'>
					{videos.map((video) => (
						<div key={video.hlsUrl} className='shadow-xl round-lg'>
							<div>
								<h5 className='font-bold text-center text-orange-400 uppercase my-2'>
									{video.title}
								</h5>
								<ReactPlayer
									width='100%'
									height='100%'
									controls
									playsinline
									url={video.hlsUrl}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Videos;
