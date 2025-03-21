import { Check } from "lucide-react";
import curriculum from "../../../../public/db/curriculum.json";
const Curriculum = ({ data }) => {
  const { solutions, certificate } = curriculum;
  // console.log('data', data?.curriculum)
  return (
    <div className="mt-5">
      <div>
        <h1 className="text-xl  font-bold -mb-4">
          Curriculum
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 border border-[#2492EB] rounded-md my-8 p-5">
          {data?.curriculum.map((item, index) => (
            <div key={item}>
              <div className="flex items-center gap-2">
                <p>
                  <Check size={20} color="#2492EB" />
                </p>
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-xl  font-bold">
          What you will learn by doing the course
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 border border-[#2492EB] rounded-md my-8 p-5">
          {data?.course_module.map((item, index) => (
            <div key={item?.module_title}>
              <div className="flex items-center gap-2">
                <p>
                  <Check size={20} color="#2492EB" />
                </p>
                <p>{item?.module_title}</p>
              </div>
              <ul className="ml-12">
                {
                  item?.videos?.map(vid => {
                    return <li key={vid?.name} className="list-disc">{vid?.name}</li>
                  })
                }
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* <div>
        {data?.course_type === "video" && <VideoContent data={data} />}
      </div> */}
      <div className="bg-gray-100 p-5 rounded-md my-14">
        <h1 className="text-xl font-bold mb-3">Software You&#39;ll Learn</h1>
        {data?.tools.map((item, index) => (
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
          {data?.job_position?.map((item, index) => (
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
