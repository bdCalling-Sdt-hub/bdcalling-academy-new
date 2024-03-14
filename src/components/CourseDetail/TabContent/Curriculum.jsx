import { Check } from "lucide-react";
import curriculum from "../../../../public/db/curriculum.json";
import VideoContent from "../VideoContent";

const Curriculum = ({ data }) => {
  const { solutions, certificate } = curriculum;
  const [course] = data;

  return (
    <div className="mt-5">
      <div>
        <h1 className="text-xl  font-bold">
          What you will learn by doing the course
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 border border-[#2492EB] rounded-md my-8 p-5">
          {course?.course?.carriculum.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              <p>
                <Check size={20} color="#2492EB" />
              </p>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        {course?.course?.status === "video" && <VideoContent data={data} />}
      </div>
      <div className="bg-gray-100 p-5 rounded-md my-14">
        <h1 className="text-xl font-bold mb-3">Software You&#39;ll Learn</h1>
        {course?.course?.software.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <p>
              <Check size={20} color="#2492EB" />
            </p>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-xl  font-bold">Open Job Positions</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 border border-[#2492EB] rounded-md my-8 p-5">
          {course?.course?.job_position?.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              <p>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </p>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold">
          Exclusive Solutions That Set Us <br /> Apart
        </h1>
        <div className=" p-5">
          {solutions.map((item, index) => (
            <div className="flex items-center gap-2 mb-1" key={index}>
              <p>
                <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
                  <Check size={20} color="#fff" />
                </div>
              </p>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-xl  font-bold mt-6">Course certificate</h1>
        <p className="my-4">
          On successful completion of the course you will receive a certificate
          which will enable you to-
        </p>
        {certificate.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <p>
              <Check size={20} color="#2492EB" />
            </p>
            <p>{item}</p>
          </div>
        ))}

        <div className="mt-10">
          <img src="/images/certificate.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
