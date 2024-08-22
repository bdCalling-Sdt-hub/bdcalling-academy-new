import Image from "next/image";
import "swiper/css";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonials from "../../../public/db/testimonial.json";
import HeadingText from "../Common/headingText";

// Import Swiper styles
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const { testimonialList } = testimonials;
  const [seeMore, setSeeMore] = useState(false);
  const [seeMoreId, setSeeMoreId] = useState();

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
          {testimonialList.map((testimonial, index) => (

            <SwiperSlide key={index} className="mt-16">

              <div
                className="p-5 rounded-md relative flex justify-center h-auto text-center"
                style={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <div className="absolute -top-16 bg-white p-1 shadow rounded-full">
                  <Image
                    src={testimonial?.image}
                    className="w-24 h-24 rounded-full"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <div className="my-6">
                    <h2 className="text-xl">{testimonial?.name}</h2>
                    <div className="flex justify-between items-center my-5">
                      <p className=""><span className="font-semibold">Batch</span> : {testimonial?.batch}</p>
                      <p className=""> <span className="font-semibold">Course duration</span> : {testimonial?.courseTime}</p>
                    </div>
                  </div>
                  <p>
                    {seeMore && testimonial.id === seeMoreId
                      ? testimonial?.feedback
                      : testimonial?.feedback.slice(0, 220)}{" "}
                    <button
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
