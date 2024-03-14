import { imgUrl } from "@/config";
import { timeFormat } from "@/lib/utils";
import { Calendar, Clock8, MapPinned } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const EventCard = ({ data, index }) => {
  const {
    date,
    starttime,
    endtime,
    courseName,
    image,
    description,
    status,
    officeLocation,
  } = data;

  const animationType = [
    "animate__backInLeft",
    "animate__backInRight",
    "animate__backInUp",
  ];

  return (
    <div
      className={`rounded-lg animate__animated ${
        animationType.length <= index ? animationType[0] : animationType[index]
      }`}
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <img
        src={`${imgUrl}/${image}`}
        alt="course image"
        className="rounded-t-lg w-full h-[350px]"
        loading="lazy"
      />
      <div className="p-3">
        <div className="lg:flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <p size={18} className="flex items-center gap-1">
              <Calendar size={18} color="#1796fd" />
              <span className=" text-gray-600">{date}</span>
            </p>
            <p size={18} className="flex items-center gap-1">
              <Clock8 size={18} color="#1796fd" />
              <span className=" text-gray-600">{timeFormat(starttime)}</span>-
              <span className=" text-gray-600">{timeFormat(endtime)}</span>
            </p>
          </div>
          <p
            className={`${
              status === "OFFLINE" ? "text-black" : "text-green-500"
            } text-md`}
          >
            {status}
          </p>
        </div>
        <div className="flex items-center mt-1 gap-1">
          <MapPinned size={20} color="#1796fd" />
          <p className="text-md capitalize text-gray-500">{officeLocation}</p>
        </div>
        <h2 className="text-2xl capitalize my-3">{courseName}</h2>
        <p>{description}</p>
        <Link href="/free-seminar">
          <Button className="bg-primary mt-5">Join Seminar</Button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
