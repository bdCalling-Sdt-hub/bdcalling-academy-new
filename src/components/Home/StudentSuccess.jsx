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
import ReactPlayer from "react-player";

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
      // console.log(err)
    })
  }, [type])
  // console.log(`${imgUrl}/${StoryData?.[0]?.file}`)
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
              <div className="relative w-full h-full bg-green-400">
                <div className="w-full h-full">
                  <ReactPlayer
                    url={item?.file}
                    playing={false}
                    controls
                    width='100%'
                    height='100%'
                    className='react-player'
                  />
                </div>
                <div
                  onClick={() => setVideoLink(item?.file)}
                  className="absolute left-0 top-0  h-full w-full  flex justify-center items-center cursor-pointer"
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
            <ReactPlayer
              url={videoLink}
              playing={false}
              controls
              width='100%'
              height='100%'
              className='react-player'
            />
          </AspectRatio>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StudentSuccess;
