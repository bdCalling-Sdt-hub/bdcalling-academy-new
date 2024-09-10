import FlexItem from "@/components/Common/FlexItem";
import CourseDetailDescription from "@/components/CourseDetail/CourseDetailDescription";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { baseUrl } from "@/config";
import RootLayout from "@/Layouts/RootLayout";
import MetaTag from "@/shared/MetaTag";
import { Clock, Globe, Presentation, Users } from "lucide-react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CourseDetail = () => {
  const router = useRouter();
  const params = router.query.slug;
  const [courseDetail, setCourseDetail] = useState({});
  const [courseData, setCourseData] = useState({})
  console.log('courseData', courseData)
  let id;
  let name
  useEffect(() => {
    if (Array.isArray(params) && params.length >= 2) {
      id = params[1];
      name = params[0];
      baseUrl
        .get(`/courses/${id}`)
        .then((res) => {
          setCourseDetail(res?.data?.data);
        })
        .catch((err) => console.log(err));
      baseUrl
        .get(`/filter-courses?course_name=${name}`)
        .then((res) => {
          setCourseData(res?.data?.data);
          // console.log(res)
        })
        .catch((err) => console.log(err));
    }
  }, [params]);

  const course = courseDetail;

  const features = [
    {
      icon: <Clock size={20} color="#2492EB" />,
      key: "Duration",
      value: `${courseDetail?.course_time_length} Month`,
    },
    // {
    //   icon: <Book size={20} color="#2492EB" />,
    //   key: "Lessons",
    //   value: courseDetail?.length,
    // },
    {
      icon: <Users size={20} color="#2492EB" />,
      key: "Students",
      value: courseDetail?.max_student_length || 50,
    },
    {
      icon: <Presentation size={20} color="#2492EB" />,
      key: "Skill Level",
      value: courseDetail?.skill_Level,
    },
    {
      icon: <Globe size={20} color="#2492EB" />,
      key: "Language",
      value: courseDetail?.language,
    },
  ];

  return (
    <div className="container my-10">
      <MetaTag title="Courses Details" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        <div className="lg:col-span-2">
          <CourseDetailDescription data={courseDetail} courseData={courseData?.data?.[0] ? courseData?.data?.[0] : {}} />
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
                Course Fee
              </h2>
              <h2 className="text-2xl font-bold text-white my-2">
                BDT {courseDetail.price}
              </h2>

              <Button
                onClick={() => {
                  if (!localStorage.getItem("token")) {
                    router.push("/login");
                  }
                  const data = {
                    course_id: courseData?.data?.[0]?.course?.id,
                    price: courseData?.data?.[0]?.course?.price,
                    gateway_name: 'sslcommerze',
                    batch_id: courseData?.data?.[0]?.id
                  }
                  const formData = new FormData()
                  Object.keys(data).forEach(key => formData.append(key, data[key]))
                  baseUrl
                    .post('/pay', formData, {
                      headers: {
                        "X-Custom-Header": "foobar",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                      },
                    })
                    .then((res) => {
                      if (res?.status === 200) {
                        if (res?.data?.data) {
                          console.log(res?.data?.data)
                          router.push(res?.data?.data)
                        } else {
                          Swal.fire({
                            title: "Error",
                            text: res?.data?.message || "Something went wrong",
                            icon: "error",
                            confirmButtonColor: "#1796fd",
                          })
                        }
                      }
                    })
                    .catch((err) => Swal.fire({
                      title: "Error",
                      text: err?.data?.message || "Something went wrong",
                      icon: "error",
                      confirmButtonColor: "#1796fd",
                    }))
                }
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
