import React from "react";

const Teaser = () => {
  return (
    <>
      <div id="teaser" className="w-full py-10 bg-black">
        <iframe
          src="https://www.youtube-nocookie.com/embed/xNotsP2Fewk?autoplay=1&controls=1&mute=1&rel=0&playsinline=1&vq=hd1080&loop=1&fs=1&modestbranding=1&showinfo=0"
          title="Bachata Event 2023 at Sobar in Soma Bay, Egypt"
          className="w-full aspect-video mx-auto"
          allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </>
  );
};

export default Teaser;
