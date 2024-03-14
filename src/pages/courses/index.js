import CourseCard from "@/components/Common/CourseCard";
import SkeletonCard from "@/components/Common/SkeletonCard";
import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/config";
import MetaTag from "@/shared/MetaTag";
import { useEffect, useState } from "react";

const CourseHomePage = () => {
  const [courses, setCourses] = useState([]);
  const [seeMore, setSeeMore] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    baseUrl
      .get(`/course?per_page=${seeMore.toString()}`)
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
  }, [seeMore]);

  return (
    <>
      <MetaTag title="Courses" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 gap-y-6 my-12 container">
        {loading ? (
          <SkeletonCard />
        ) : courses.length > 0 ? (
          courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))
        ) : (
          <h2 className="text-center col-span-3 text-2xl text-gray-400">
            Data Not Found
          </h2>
        )}
      </div>
      <Button
        className="my-10 mx-auto block"
        onClick={() => setSeeMore(seeMore + 6)}
      >
        See More
      </Button>
    </>
  );
};

export default CourseHomePage;

CourseHomePage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
