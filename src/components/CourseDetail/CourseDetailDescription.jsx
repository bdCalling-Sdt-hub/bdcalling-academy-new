import { imgUrl } from "@/config";
import { useRouter } from "next/router";
import { useState } from "react";
import SkeletonCard from "../Common/SkeletonCard";
import { Button } from "../ui/button";
import Curriculum from "./TabContent/Curriculum";
import Instructor from "./TabContent/Instructor";
import Overview from "./TabContent/Overview";
import Reviews from "./TabContent/Reviews";

const CourseDetailDescription = ({ data, courseData }) => {
  const [title, setTitle] = useState("Overview");
  const buttons = ["Overview", "Curriculum", "Reviews", "Instructor"];
  const router = useRouter();
  return (
    <div>
      {data?.thumbnail ? (
        <img
          src={`${imgUrl}/${data?.thumbnail}`}
          alt="Course Image"
          className="w-full h-[450px] rounded mb-8"
        />
      ) : (
        <SkeletonCard />
      )}

      <h2 className="capitalize text-3xl mt-4  font-bold">
        {data?.course_name}
      </h2>
      <div className="bg-gray-100 p-4 rounded-md mt-8">
        <div className="flex flex-col lg:flex-row items-center gap-2">
          {buttons.map((btnText, index) => (
            <Button
              key={index}
              variant="link"
              onClick={() => setTitle(btnText)}
              className={`${title === btnText ? "bg-[#1796fd] text-white" : "bg-white"
                }  rounded-md`}
            >
              {btnText}
            </Button>
          ))}
        </div>
      </div>

      {title === "Overview" && <Overview data={data} />}
      {title === "Curriculum" && <Curriculum data={data} />}
      {title === "Reviews" && <Reviews data={courseData?.course?.reviews || []} />}
      {title === "Instructor" && <Instructor data={courseData?.teachers || []} />}
    </div>
  );
};

export default CourseDetailDescription;
