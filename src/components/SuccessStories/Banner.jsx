import { useState } from "react";
import descriptions from "../../../public/db/successStories.json";
import TopHeading from "../Common/TopHeading";
import { Button } from "../ui/button";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import StudentJourney from "./components/StudentJourney";
import SuccessStories from "./components/SuccessStories";

const Banner = () => {
  const [title, setTitle] = useState("Success stories");
  const { successStories, studentJourney, gallery, events } = descriptions;

  const categoryLists = [
    { title: "Success stories" },
    { title: "Events" },
    { title: "Student Journey" },
    { title: "Gallery" },
  ];

  const description =
    title === "Success stories"
      ? successStories
      : title === "Events"
      ? events
      : title === "Student Journey"
      ? studentJourney
      : title === "Gallery"
      ? ""
      : "";

  return (
    <div>
      <TopHeading blueText={title} description={description} />
      <div className="mt-8 text-center flex flex-col lg:flex-row  gap-2">
        {categoryLists.map((category, index) => (
          <Button
            key={index}
            variant="link"
            onClick={() => setTitle(category.title)}
            className={`${
              title === category.title ? "bg-[#1796fd] text-white" : ""
            }  rounded-md`}
          >
            {category.title}
          </Button>
        ))}
      </div>
      <div>
        {title === "Success stories" && <SuccessStories />}
        {title === "Events" && <Events />}
        {title === "Student Journey" && <StudentJourney />}
        {title === "Gallery" && <Gallery />}
      </div>
    </div>
  );
};

export default Banner;
