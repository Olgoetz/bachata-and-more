import React from "react";
import EventItem from "./EventItem";
import events from "@/data/events.json";

type Event = {
  id: string;
  address: string;
  bookingLink: string;
  date: string;
  image: string;
  title: string;
  venue: string;
};

const Events = () => {
  return (
    <div id="events" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-5xl text-bm-main font-bold">
          Übersicht unserer Events
        </h2>

        <div className="text-justify mx-auto max-w-[800px] py-10">
          <ul>
            {events.map((event: Event) => (
              <EventItem
                key={event.id}
                title={event.title}
                venue={event.venue}
                image={event.image}
                date={event.date}
                address={event.address}
                bookingLink={event.bookingLink}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Events;
