import FlexItem from "@/components/Common/FlexItem";
import { Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import AccordionCard from "../Common/AccordionCard";
import { baseUrl } from "@/config";

const VideoContent = ({ data }) => {
  const [video, setVideo] = useState();
  useEffect(() => {
    baseUrl.get(`filter-courses?course_category_id=${data?.id}`)
      .then((res) => {
        console.log('res', res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <div className="my-8">
        <h2 className="text-xl mb-5 font-bold">Course Content</h2>
        {[].map((module, index) => (
          <div key={index} className="mb-5">
            <AccordionCard title={module.module_title}>
              {module?.module_class?.map((video, index) => {
                return (
                  <div
                    className="border-b w-full rounded-none py-3"
                    key={index}
                  >
                    <FlexItem gap="gap-2">
                      <Youtube size={20} fill="#fff" strokeWidth={1.5} />
                      <p className=" text-[15px] text-gray-500">
                        {index}. {video.name}
                      </p>
                    </FlexItem>
                  </div>
                );
              })}
            </AccordionCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoContent;
