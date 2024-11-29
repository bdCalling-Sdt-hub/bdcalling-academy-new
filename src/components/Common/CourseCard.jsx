import { imgUrl } from "@/config";
import styles from "@/styles/card.module.css";
import { BookOpenText, Clock8, Star, UsersRound } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const CourseCard = ({ course }) => {
  const {
    image,
    batch_name,
    start_date,
    id,
    status,
    price,
    seat_left,
    courseName,
    discount_price,
  } = course;
  // console.log('course', course)
  //remain day calculate here
  const today = new Date();
  const courseStartDate = new Date(start_date);
  const differentDate = today - courseStartDate;
  const dayLeft = Math.abs(Math.floor(differentDate / (1000 * 60 * 60 * 24)));
  return (
    <Link href={`/courses/${course?.course?.course_name}/${course?.course?.id}`}>
      <div
        className={`rounded-lg hover:-translate-y-4 group ${styles.courseCard}`}
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <img
          src={`${imgUrl}/${image}`}
          alt="course image"
          className="rounded-t-lg w-full h-[180px] object-cover"
        />
        <div className="p-3">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1 text-sm">
              {" "}
              <BookOpenText size={16} color="#1796fd" />
              Batch {batch_name}
            </p>
            <div className="bg-gradient-to-tr from-[#80b3dd] to-[#0779d6] text-white rounded-md py-1 px-5">
              {course?.course?.course_type}
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 border-b pb-2">
            <p className="flex items-center gap-2 text-sm">
              <UsersRound size={16} color="#1796fd" />
              {seat_left} Seats Left
            </p>
            <p className="flex items-center gap-1 text-sm">
              <Clock8 size={16} color="#1796fd" />
              {dayLeft} Days Left
            </p>
          </div>
          <h2 className="my-3 text-xl h-12 capitalize">{course?.course?.course_name}</h2>
          <div className=" space-y-2">
            <div className="lg:flex gap-4 items-center">
              <h2 className="text-lg font-bold">{course?.course?.price} BDT</h2>
              {/* <p className="line-through">BDT{course?.course?.price}</p> */}
            </div>
            <div className="flex items-center gap-1 ">
              <div className="flex mb-4">
                <Star size={20} color="#ffc60b" fill="#ffc60b" />
                <Star size={20} color="#ffc60b" fill="#ffc60b" />
                <Star size={20} color="#ffc60b" fill="#ffc60b" />
                <Star size={20} color="#ffc60b" fill="#ffc60b" />
                <Star size={20} color="#ffc60b" fill="#ffc60b" />
              </div>
              (5.0)
            </div>
          </div>
          <Button
            className={`w-full shadow text-white py-6 text-md ${styles.enrollBtn}`}
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
