import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import styles from "@/styles/home.module.css";
import { Play } from "lucide-react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

const SuccessStories = () => {
  const [videoLink, setVideoLink] = useState("");

  const videoLinkLists = [
    {
      video:
        "https://www.youtube.com/embed/9ab5fKohvHA?si=KZuraKey3IfX8voz&autoplay=1",
      thumb:
        "https://i.postimg.cc/9MWM8wLB/Digital-Marketing-Students-Openion-thumbnail.jpg",
    },
    {
      video:
        "https://www.youtube.com/embed/UGkIN-lhhbA?si=djN9Y9e9yUUsIiRd&autoplay=1",
      thumb:
        "https://i.postimg.cc/28775Mtc/Thumbnail-for-Flutter-to-Swapon-02.jpg",
    },

    {
      video:
        "https://www.youtube.com/embed/-qoaZ6sQp3s?si=0qlFnVAxTJuKCAOI&autoplay=1",
      thumb: "https://i.postimg.cc/gJWKJsNH/Students-Success-Story-Part-03.jpg",
    },
  ];
  const animationType = [
    "animate__backInLeft",
    "animate__backInRight",
    "animate__backInUp",
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-12">
      <Dialog>
        {videoLinkLists.map((item, index) => (
          <div key={index}>
            <div
              className={`relative w-full h-full animate__animated ${
                animationType.length <= index
                  ? animationType[0]
                  : animationType[index]
              }`}
            >
              <div className="w-full h-full">
                <img
                  src={item.thumb}
                  alt=""
                  loading="lazy"
                  className="w-full h-full rounded-md border"
                />
              </div>

              <div
                onClick={() => setVideoLink(item.video)}
                className="absolute top-0 left-0 h-full w-full  flex justify-center items-center cursor-pointer"
              >
                <div className={`${styles.playBtn}`}>
                  <DialogTrigger>
                    <Play />
                  </DialogTrigger>
                </div>
              </div>
            </div>
          </div>
        ))}

        <DialogContent>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <iframe
              src={videoLink}
              title="YouTube video player"
              allow="autoplay;"
              className="rounded-md w-full h-full"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SuccessStories;
