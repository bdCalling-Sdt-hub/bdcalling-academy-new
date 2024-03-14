import FlexItem from "@/components/Common/FlexItem";
import CourseDetailDescription from "@/components/CourseDetail/CourseDetailDescription";
import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/config";
import MetaTag from "@/shared/MetaTag";
import { Book, Clock, Globe, Presentation, Users } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CourseDetail = () => {
  const router = useRouter();
  const params = router.query.slug;
  const [courseDetail, setCourseDetail] = useState([]);

  let id;

  useEffect(() => {
    if (Array.isArray(params) && params.length >= 2) {
      id = params[1];
      baseUrl
        .get(`/class/${id}`)
        .then((res) => {
          setCourseDetail(res?.data?.data);
        })
        .catch((err) => console.log(err));
    }
  }, [params]);

  const course = courseDetail[0];

  const features = [
    {
      icon: <Clock size={20} color="#2492EB" />,
      key: "Duration",
      value: `${course?.course?.courseTimeLength} Month`,
    },
    {
      icon: <Book size={20} color="#2492EB" />,
      key: "Lessons",
      value: courseDetail?.length,
    },
    {
      icon: <Users size={20} color="#2492EB" />,
      key: "Students",
      value: course?.course?.maxStudentLength,
    },
    {
      icon: <Presentation size={20} color="#2492EB" />,
      key: "Skill Level",
      value: course?.course?.skillLevel,
    },
    {
      icon: <Globe size={20} color="#2492EB" />,
      key: "Language",
      value: course?.course?.language,
    },
  ];

  return (
    <div className="container my-10">
      <MetaTag title="Courses Details" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        <div className="lg:col-span-2">
          <CourseDetailDescription data={courseDetail} />
        </div>
        <div className="w-full">
          <div className="shadow rounded-md p-4">
            <h1 className="font-bold border-b border-dashed pb-2">
              Course Features
            </h1>
            {features.map((item, index) => (
              <div key={index} className="py-2 border-b">
                <FlexItem justify="justify-between">
                  <FlexItem gap="gap-2">
                    <p>{item.icon}</p>
                    <h1>{item.key}</h1>
                  </FlexItem>
                  <h1>{item.value}</h1>
                </FlexItem>
              </div>
            ))}
            <div className="bg-primary text-center rounded-md py-6 mt-14">
              <h2 className="text-xl text-gray-200 font-semibold">
                Course Fee {course?.course?.status}
              </h2>
              <h2 className="text-2xl font-bold text-white my-2">
                BDT {course?.course?.discount_price}
              </h2>

              <Button
                onClick={() =>
                  router.push(
                    `/payment/${course?.course?.id}/${course?.course?.courseName}/${course?.course?.price}/${course?.course?.discount_price}/${course?.course?.startDate}`
                  )
                }
                className="  bg-white text-primary"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

CourseDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
