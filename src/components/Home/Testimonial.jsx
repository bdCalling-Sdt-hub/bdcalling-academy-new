import Image from "next/image";
import "swiper/css";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonials from "../../../public/db/testimonial.json";
import HeadingText from "../Common/headingText";
import profileImage from "../../../public/images/profile.png";
// Import Swiper styles
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { baseUrl, imgUrl } from "@/config";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const { testimonialList } = testimonials;
  const [seeMore, setSeeMore] = useState(false);
  const [seeMoreId, setSeeMoreId] = useState();
  const [reviews, setReviews] = useState([]);
  const batches = ['21st Batch', '22nd Batch', '23rd Batch', '24th Batch'];
  const courseTimes = ['3 month', '6 months',]
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  console.log(getRandomElement(courseTimes))
  const formattedTestimonials = testimonialList?.map(testimonials => ({
    ...testimonials,
    batch: getRandomElement(batches),
    courseTime: getRandomElement(courseTimes)
  }))
  const swiperContainerStyle = {
    width: "100%",
    height: "450px",
    marginTop: "50px",
    padding: "0 10px",
  };
  useEffect(() => {
    baseUrl.get('/course-reviews').then((res) => {
      setReviews(res?.data?.data)
    })
  }, [])
  console.log(reviews)

  return (
    <div className="container">
      <HeadingText sTitle={"Testimonial"} title={"Student's Feedback"} />
      <div className="">
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            690: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          style={swiperContainerStyle}
        >
          {reviews?.slice(0, 10).map((testimonial, index) => (
            <SwiperSlide key={index} className="mt-16">
              <div
                className="p-5 rounded-md relative flex justify-center h-auto text-center"
                style={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <div className="absolute -top-16 bg-white p-1 shadow rounded-full">
                  <Image
                    src={testimonial?.user?.image ? `${imgUrl}/${testimonial?.user?.image}` : profileImage}
                    className="w-24 h-24 rounded-full"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <div className="my-3 mt-6">
                    <h2 className="text-xl">{testimonial?.name}</h2>
                    <div className="flex justify-between items-center my-3 w-full gap-4">
                      <p className=""><span className="font-semibold">course</span> : {testimonial?.course?.course_name}</p>
                      <p className="flex  justify-center items-center gap-1"> <span className="font-semibold">Rating</span> : {testimonial?.rating_value} <FaStar className="-mt-1 text-yellow-500" /></p>
                    </div>
                  </div>
                  <p>
                    {seeMore && testimonial.id === seeMoreId
                      ? testimonial?.message
                      : testimonial?.message?.slice(0, 220)}{" "}
                    {
                      testimonial?.message?.length > 220 && <button
                        className="text-blue-400"
                        onClick={() => {
                          setSeeMore(!seeMore);
                          setSeeMoreId(testimonial.id);
                        }}
                      >
                        {seeMore && testimonial.id === seeMoreId
                          ? "See less"
                          : "See More"}
                      </button>
                    }
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
