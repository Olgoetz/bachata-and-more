import MichiYOli from "../../public/images/MichiyOli_bachata.webp";
import React from "react";
import Image from "next/legacy/image";
//import Videos from './videos/Videos';
//import ReactPlayer from 'react-player';
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Videos = ({ videos }) => {
  return (
    <>
      <div id="videos" className="w-full bg-white py-16 px-4">
        <div className="max-w-[1024px] bg-white mx-auto">
          <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 my-3">
            Videos
          </h3>
          <div className="text-justify grid md:grid-cols-2 md:gap-x-3">
            {videos.map((video) => (
              <div key={video.hlsUrl} className="shadow-xl round-lg">
                <div>
                  <h5 className="font-bold text-center text-orange-400 uppercase my-2">
                    {video.title}
                  </h5>
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    controls
                    playsinline
                    url={video.hlsUrl}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
