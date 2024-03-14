import CourseCard from "@/components/Common/CourseCard";
import { baseUrl } from "@/config";
import { useEffect, useState } from "react";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    baseUrl
      .get(`/course`)
      .then((res) => setCourses(res.data?.data?.data))
      .catch((err) => console.log(err));
  }, []);

  const popularCourse = courses.filter((course) => course.popular === 1);

  return (
    <div className="my-24">
      <h1 className="text-center text-4xl font-bold my-10">Popular Courses</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {popularCourse.slice(0, 6).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
