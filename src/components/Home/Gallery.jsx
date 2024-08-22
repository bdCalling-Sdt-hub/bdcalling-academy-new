import React from 'react'
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingText from "../Common/headingText";
import { AspectRatio } from "../ui/aspect-ratio";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import { Play } from "lucide-react";
import gallary1 from '../../../public/images/gallery/gallery1.png'
import gallary2 from '../../../public/images/gallery/gallery2.png'
import gallary3 from '../../../public/images/gallery/gallery3.png'
import gallary4 from '../../../public/images/gallery/gallery4.png'
import gallary5 from '../../../public/images/gallery/gallery5.png'
import gallary6 from '../../../public/images/gallery/gallery6.png'
import gallary7 from '../../../public/images/gallery/gallery7.png'
import gallary8 from '../../../public/images/gallery/gallery8.png'
import Image from 'next/image';
const Gallery = () => {
  const swiperContainerStyle = {
    width: "100%",
    height: "550px",
    marginTop: "30px",
    paddingBottom: "50px",
  };
  


  return (
    <div className="container my-24">
      <HeadingText title={"Gallery"} />

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          689: {
            slidesPerView: 2,
          },
        }}
        style={swiperContainerStyle}
      >
        
          <SwiperSlide >
            <div className="relative w-full h-full">
              <div className="w-full h-full image">
                <Image src={gallary1} height={400} width={600} style={{height : '100%'}} />
              </div>
            </div>
          </SwiperSlide>
        
          <SwiperSlide >
            <div className="relative w-full h-full">
              <div className="w-full h-full">
                <Image className='h-none' src={gallary2} height={400} width={600} style={{height : '100%'}} />
              </div> 
            </div>
          </SwiperSlide>
        
          <SwiperSlide >
            <div className="relative w-full h-full">
              <div className="w-full h-full">
                <Image src={gallary3} height={400} width={600} style={{height : '100%'}} />
              </div>   
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="relative w-full h-full">
              <div className="w-full h-full">
                <Image src={gallary4} height={400} width={600} style={{height : '100%'}} />
              </div>   
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="relative w-full h-full">
              <div className="w-full h-full">
                <Image src={gallary5} height={400} width={600} style={{height : '100%'}} />
              </div>   
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="relative w-full h-full">
              <div className="w-full h-full">
                <Image src={gallary6} height={400} width={600} style={{height : '100%'}} />
              </div>   
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="relative w-full h-full">
              <div className="w-full h-full">
                <Image src={gallary7} height={400} width={600} style={{height : '100%'}} />
              </div>   
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="relative w-full h-full">
              <div className="w-full h-full">
                <Image src={gallary8} height={400} width={600} style={{height : '100%'}} />
              </div>   
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Gallery