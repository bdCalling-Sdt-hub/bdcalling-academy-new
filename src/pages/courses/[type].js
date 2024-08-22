import AccordionCard from "@/components/Common/AccordionCard";
import CourseCard from "@/components/Common/CourseCard";
import SkeletonCard from "@/components/Common/SkeletonCard";
import AccordionAnswerText from "@/components/Courses/AccordionAnswerText";
import JoinNow from "@/components/Courses/JoinNow";
import SearchCourse from "@/components/Courses/SearchCourse";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/config";
import useCategory from "@/hooks/useCategory";
import RootLayout from "@/Layouts/RootLayout";
import MetaTag from "@/shared/MetaTag";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CoursesPage = () => {
  const [courseLoad, setCourseLoad] = useState(6);
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const status = router.query.type;
  const [error, setError] = useState("");
  const { category: catagories } = useCategory();
  const [selectCategory, setSelectCategory] = useState(0);
  const [title, setTitle] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    baseUrl
      .get(
        `/course?status=${status}&category=${title | selectCategory
        }&per_page=${courseLoad}`
      )
      .then((res) => {
        setCourses(res.data?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response?.data?.message);
        setCourses([]);
        setLoading(false);
      });
  }, [status, title, selectCategory, courseLoad]);





  const coursesFilter = ["Online Courses", "Offline Courses", "Video Courses"];
  
  return (
    <div className="container">
      <MetaTag title="Courses" />
      <div className="text-center my-10">
        <h1 className="text-5xl font-bold mb-2">Courses</h1>
        <p className="w-3/4 mx-auto">
          Our comprehensive course catalog encompasses a wide range of subjects,
          from in-demand technical skills to creative pursuits and personal
          development topics. Delve into the intricacies of coding, master the
          art of photography, or unlock the secrets of effective communication.
        </p>
        <SearchCourse setTitle={setTitle} />
      </div>
      <div className="space-y-4">
        <AccordionCard title="Course Categories">
          {catagories?.map((item, index) => (
            <AccordionAnswerText
              key={index}
              data={item}
              setSelectCategory={setSelectCategory}
              selectCategory={selectCategory}
            />
          ))}
        </AccordionCard>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-12">

        <div className="col-span-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
            {loading ? (
              [...Array(6).keys()].map((index) => <SkeletonCard key={index} />)
            ) : courses.length > 0 ? (
              courses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))
            ) : (
              <p className="text-center text-4xl my-48 text-gray-200 ">
                {status} Courses not found
              </p>
            )}
          </div>
          {courses.length > 0 && (
            <Button
              className="mt-8 mx-auto block"
              onClick={() => setCourseLoad(courseLoad + 4)}
            >
              See More
            </Button>
          )}
        </div>
      </div>
      <JoinNow />
    </div>
  );
};

export default CoursesPage;

CoursesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
