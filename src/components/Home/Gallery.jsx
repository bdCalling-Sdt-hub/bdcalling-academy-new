import React, { useEffect, useState } from 'react'
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingText from "../Common/headingText";
import { AspectRatio } from "../ui/aspect-ratio";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import { Play } from "lucide-react";
import { baseUrl, imgUrl } from '@/config';
import { usePathname } from 'next/navigation';
const Gallery = () => {
  const [galleryData, setGalleryData] = useState([])
  const swiperContainerStyle = {
    width: "100%",
    height: "450px",
    marginTop: "30px",
    paddingBottom: "50px",
  };
  useEffect(() => {
    baseUrl.get('/gallery?per_page=999999').then((res) => {
      setGalleryData(Array.isArray(res?.data?.data?.data) ? res?.data?.data?.data : [])
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  const pathname = usePathname()
  return (
    <div className="container my-24">
      {
        pathname == '/success-stories' ? <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-3">
            {
              galleryData?.map(item => {
                return <div key={item?.id}>
                  <img className='w-full h-[400px] object-cover' src={`${imgUrl}/${item?.image}`} alt='' />
                </div>
              })
            }
          </div>
        </> : <>
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
                slidesPerView: 3,
              },
            }}
            style={swiperContainerStyle}
          >
            {
              galleryData?.map(item => {
                return <SwiperSlide key={item?.id}>
                  <img className='w-full h-[400px] object-cover' src={`${imgUrl}/${item?.image}`} alt='' />
                </SwiperSlide>
              })
            }
          </Swiper>
        </>
      }

    </div>
  )
}

export default Gallery