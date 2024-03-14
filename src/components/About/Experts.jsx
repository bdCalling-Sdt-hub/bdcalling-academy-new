import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ExpertCard from "../Common/Expert.Card";
import HeadingText from "../Common/headingText";

// Import Swiper styles
import { baseUrl } from "@/config";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

const Experts = () => {
  const [expertList, setExpertList] = useState([]);
  const swiperContainerStyle = {
    width: "100%",
    padding: "50px 0",
  };
  useEffect(() => {
    baseUrl
      .get("/mentors/all")
      .then((res) => setExpertList(res.data?.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="my-8 bg-blue-50 p-2 lg:p-5 rounded-md">
      <HeadingText sTitle="Our Mentors" title="Meet Our Experts Mentors" />
      <p className="text-center">
        Develop skills with the best instructors in the country, click the
        button below.
      </p>
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={1}
        breakpoints={{
          689: {
            slidesPerView: 4,
          },
        }}
        navigation
        style={swiperContainerStyle}
      >
        {expertList.map((expert, index) => (
          <SwiperSlide key={index}>
            <ExpertCard data={expert} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Experts;
