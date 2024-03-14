import { baseUrl } from "@/config";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import CourseCard from "../Common/CourseCard";
import SkeletonCard from "../Common/SkeletonCard";
import { Button } from "../ui/button";

const Courses = ({ categories }) => {
  const [title, setTitle] = useState(0);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    baseUrl
      .get(`/course?category=${title}`)
      .then((res) => {
        if (res.data) {
          setCourses(res.data?.data?.data);
          setLoading(false);
        }
      })
      .catch((err) => setCourses([]))
      .finally(() => {
        setLoading(false);
      });
  }, [title]);

  return (
    <div className="container ">
      <div className="flex justify-between mt-24">
        <div>
          <h2 className="text-2xl font-bold">Most Popular Courses</h2>
        </div>
        <Link href="/courses">
          <Button className="bg-[#1796fd]">
            View Courses <ChevronRight color="#e8e3e3" size={15} />
          </Button>
        </Link>
      </div>
      <div className="mt-8 text-center flex flex-col lg:flex-row  gap-2">
        <Button
          variant="link"
          onClick={() => setTitle(0)}
          className={`${
            title === 0 ? "bg-[#1796fd] text-white" : ""
          } text-md font-medium`}
        >
          All
        </Button>

        {categories?.map((category, index) => (
          <Button
            key={index}
            variant="link"
            onClick={() => setTitle(category.id)}
            className={`${
              title === category.id ? "bg-[#1796fd] text-white" : ""
            }  text-md font-medium`}
          >
            {category.category_name === "ux/ui design" ? (
              <span>{`UX/UI Design`}</span>
            ) : (
              <span className="capitalize">{category.category_name}</span>
            )}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 gap-y-6 my-16">
        {loading ? (
          <SkeletonCard />
        ) : courses.length > 0 ? (
          courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))
        ) : (
          <h2 className="text-center col-span-3 text-3xl text-gray-200 mb-72 mt-24">
            Data Not Found
          </h2>
        )}
      </div>
    </div>
  );
};

export default Courses;
