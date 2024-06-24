import React from "react";

function BackgroundVideo() {
  return (
    <div className="relative overflow-hidden w-full h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source
          src="https://bachata-and-more.s3.eu-central-1.amazonaws.com/videos/Bachata_Soma_02.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVideo;
