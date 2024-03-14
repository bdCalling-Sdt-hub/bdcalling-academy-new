import EventCard from "@/components/Common/EventCard";
import { baseUrl } from "@/config";
import { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    baseUrl
      .get("/events")
      .then((res) => setEvents(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-12">
      {events.map((item, index) => (
        <EventCard key={index} data={item} index={index} />
      ))}
    </div>
  );
};

export default Events;
