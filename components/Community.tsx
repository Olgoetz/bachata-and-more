import React from "react";
import Image from "next/image";
import qr from "@/public/community_qr.jpeg";
const Community = () => {
  return (
    <div className="">
      <h2 className="text-xl text-bm-main font-bold">
        Unsere What&apos;s App Community
      </h2>
      <div className="my-4">
        <Image src={qr} alt="QR Code Bachata & More" width={150} />
      </div>
    </div>
  );
};

export default Community;
