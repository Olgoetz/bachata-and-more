import React from 'react';
import VideoJS from '../../ui/VideoJS';
import 'video.js/dist/video-js.css';

const VideoItem = ({ title, hlsUrl }) => {
	const playerRef = React.useRef(null);

	const videoJsOptions = {
		autoplay: false,
		controls: true,
		responsive: true,
		fluid: true,
		sources: [
			{
				src: hlsUrl,
			},
		],
	};

	const handlePlayerReady = (player) => {
		playerRef.current = player;

		// You can handle player events here, for example:
		player.on('waiting', () => {
			videojs.log('player is waiting');
		});

		player.on('dispose', () => {
			videojs.log('player will dispose');
		});
	};
	return (
		<>
			<div className='shadow-xl round-lg'>
				<h5 className='font-bold text-center text-orange-400 uppercase my-2'>
					{title}
				</h5>
				<VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
			</div>
		</>
	);
};

export default VideoItem;
