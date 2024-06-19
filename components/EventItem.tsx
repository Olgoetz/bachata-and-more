import React from "react";
import { MdDateRange } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

function checkIfDateIsInPast(dateString: string): boolean {
  // Split the string to get start and end date parts
  const [startDatePart, endDatePart] = dateString.split(" - ");

  // Extract the day, month, and year for both dates
  const startDay = startDatePart.split(".")[0];
  const startMonth = startDatePart.split(".")[1];
  const endDay = endDatePart.split(".")[0];
  const endMonth = endDatePart.split(".")[1];
  const year = endDatePart.split(".")[2];

  // Create Date objects
  const startDate = new Date(`${year}-${startMonth}-${startDay}`);
  const endDate = new Date(`${year}-${endMonth}-${endDay}`);

  // Get the current date
  const currentDate = new Date();

  // Compare the end date with the current date
  if (endDate < currentDate) {
    return true;
  } else {
    return false;
  }
}

const EventItem = ({
  image,
  title,
  venue,
  date,
  address,
  bookingLink,
}: {
  image: string;
  title: string;
  venue: string;
  date: string;
  address: string;
  bookingLink: string;
}) => {
  const formatedAddress = address.replace(", ", "\n");

  return (
    <li className="grid grid-cols-1 md:grid-cols-2 gap-3 shadow-xl round-lg p-3 my-3 h-full">
      <div className="relative w-full md:h-auto h-48">
        <Image
          src={image}
          alt={venue}
          fill
          sizes="33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col w-full gap-2">
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
        <Link
          href={bookingLink}
          target="_blank"
          rel="noreferrer"
          className={clsx(
            "bg-bm-main mx-auto text-center w-full text-black text-sm md:text-lg font-bold rounded-md px-3 py-1 mt-1 uppercase hover:bg-orange-300 active:bg-orange-500",
            checkIfDateIsInPast(date) && "pointer-events-none bg-slate-300"
          )}
        >
          Buchen
        </Link>
      </div>
    </li>
  );
};

export default EventItem;
