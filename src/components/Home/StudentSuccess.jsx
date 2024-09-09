import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import styles from "@/styles/home.module.css";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingText from "../Common/headingText";
import { AspectRatio } from "../ui/aspect-ratio";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { baseUrl, imgUrl } from "@/config";
import { usePathname } from "next/navigation";

const StudentSuccess = ({ type }) => {
  const [videoLink, setVideoLink] = useState("");
  const [StoryData, setStoryData] = useState([])
  const swiperContainerStyle = {
    width: "100%",
    height: "440px",
    marginTop: "30px",
    paddingBottom: "50px",
  };
  useEffect(() => {
    baseUrl.get(`/success/story?type=${type || 'story'}`).then((res) => {
      Array.isArray(res?.data?.data) ? setStoryData(res?.data?.data) : setStoryData([])
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  console.log(`${imgUrl}/${StoryData?.[0]?.file}`)
  const pathname = usePathname()
  return (
    <div className="container my-24">
      {
        pathname != '/success-stories' && <HeadingText title={"Success Story"} />
      }
      <Dialog>
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
          {StoryData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <div className="w-full h-full">
                  <video className="w-full h-full rounded-md" src={`${imgUrl}/${item?.
                    file}`}></video>
                </div>
                <div
                  onClick={() => setVideoLink(`${imgUrl}/${item?.file}`)}
                  className="absolute top-0 left-0 h-full w-full  flex justify-center items-center cursor-pointer"
                >
                  <div className={`${styles.playBtn}`}>
                    <DialogTrigger>
                      <Play />
                    </DialogTrigger>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <DialogContent>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <iframe
              src={videoLink}
              title="YouTube video player"
              allow="autoplay;"
              className="rounded-md w-full h-full"
            ></iframe>
          </AspectRatio>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StudentSuccess;
