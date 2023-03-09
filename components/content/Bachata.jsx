import MichiYOli from "../../public/images/MichiyOli_bachata.webp";
import React from "react";
import Image from "next/legacy/image";
//import Videos from './videos/Videos';
//import ReactPlayer from 'react-player';
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { useState, useEffect } from "react";
import Accordion from "../ui/Accordion";
const Bachata = ({ videos, bachata }) => {
  return (
    <>
      <div id="bachata" className="w-full bg-white py-16 px-4">
        <div className="max-w-[1024px] pt-8 mx-auto ">
          <div className="grid md:grid-cols-2 md:gap-x-3">
            <div className="flex flex-col justify-center">
              <p className="text-xl uppercase font-bold text-orange-400">
                BACHATA
              </p>
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                Bachata Sensual
              </h1>

              <p className="text-justify">
                Nothing is more trendy than Bachata. Bachata has its origin in
                the Dominican Republic and gained a broad community all over the
                world. There exist different Bachata styles. We focus on{" "}
                <span className="font-bold text-orange-400">
                  {" "}
                  &quot;Bachata Sensual&quot;{" "}
                </span>
                . For this style the music is tending slowlier. Sensuality and
                figures such as bodywaves and headroles are characterisc and
                highlight the physicality of the woman and man. We are keen on
                passing our passion to you. We offer Bachata classes from
                beginner to intermediate. Our classes usually last around 75 min
                with an ice-breaker, warm up, partner work and some final
                dances.
              </p>
            </div>
            <div className="flex flex-col justify-center my-4">
              <Image
                className="mx-auto my-4"
                src={MichiYOli}
                alt="Michi-und-Oli_BachataSensual"
              />
            </div>
          </div>

          {/* <div className='text-justify mx-auto grid gap-y-1 md:grid-cols-3 md:gap-x-3 my-3'>
						{bachata.map((b) => (
							<Accordion
								key={b.id}
								title={b.name}
								content={b.description}
								styling='bg-gray-100 rounded-lg'
							/>
						))}
					</div> */}

          <div className="max-w-[1024px] bg-white">
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
      </div>
    </>
  );
};

export default Bachata;
