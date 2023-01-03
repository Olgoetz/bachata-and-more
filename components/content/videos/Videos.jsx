import React from 'react';
import VideoItem from './VideoItem';
const Videos = ({ videos }) => {
	return (
		<>
			<div id='videos' className='bg-white'>
				<h3 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-3'>
					Videos
				</h3>
				<div className='text-justify mx-auto grid md:grid-cols-3 md:gap-x-3'>
					{videos.map((video) => (
						<VideoItem
							key={video.id}
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
