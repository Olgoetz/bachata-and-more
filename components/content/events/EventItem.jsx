import React from "react";
import { MdDateRange } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import Image from "next/image";

const EventItem = ({ image, title, venue, date, address, bookingLink }) => {
  const formatedAddress = address.replace(", ", "\n");

  return (
    <li className="flex flex-col items-center md:flex-row shadow-xl round-lg p-3 my-3">
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={venue}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col md:ml-4 w-full gap-2">
        <h2 className="text-lg mt-1 md:text-2xl font-bold">{venue}</h2>
        <h3 className="text-lg italic">&quot;{title}&quot;</h3>
        <div className="flex items-center justify-start md:justify-start gap-0.5">
          <MdDateRange size={20} className="mr-1" />
          <time className="font-bold">{date}</time>
        </div>
        <div className="flex items-center justify-start md:justify-start gap-0.5 whitespace-pre">
          <GrLocation size={20} className="mr-1" />
          <address className="text-sm">{formatedAddress}</address>
        </div>
        <button className="bg-[#FFC08E] mx-auto justify-content w-full md:w-[50%] text-black text-sm md:text-lg font-bold rounded-md px-3 py-1 mt-1 uppercase hover:bg-orange-300 active:bg-orange-500">
          <a href={bookingLink} target="_blank" rel="noreferrer">
            Buchen
          </a>
        </button>
      </div>
    </li>
  );
};

export default EventItem;
