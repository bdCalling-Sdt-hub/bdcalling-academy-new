import { imgUrl } from "@/config";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "../ui/button";
import Curriculum from "./TabContent/Curriculum";
import Instructor from "./TabContent/Instructor";
import Overview from "./TabContent/Overview";
import Reviews from "./TabContent/Reviews";

const CourseDetailDescription = ({ data }) => {
  const [title, setTitle] = useState("Overview");
  const buttons = ["Overview", "Curriculum", "Reviews", "Instructor"];
  const router = useRouter();

  const [course] = data;

  return (
    <div>
      <img
        src={`${imgUrl}/${course?.course?.courseThumbnail}`}
        alt=""
        className="w-full h-[450px] rounded mb-8"
      />
      <h2 className="capitalize text-3xl mt-4  font-bold">
        {course?.course?.courseName}
      </h2>
      <div className="bg-gray-100 p-4 rounded-md mt-8">
        <div className="flex flex-col lg:flex-row items-center gap-2">
          {buttons.map((btnText, index) => (
            <Button
              key={index}
              variant="link"
              onClick={() => setTitle(btnText)}
              className={`${
                title === btnText ? "bg-[#1796fd] text-white" : "bg-white"
              }  rounded-md`}
            >
              {btnText}
            </Button>
          ))}
        </div>
      </div>

      {title === "Overview" && <Overview data={data} />}
      {title === "Curriculum" && <Curriculum data={data} />}
      {title === "Reviews" && <Reviews data={course} />}
      {title === "Instructor" && <Instructor data={data} />}
    </div>
  );
};

export default CourseDetailDescription;
