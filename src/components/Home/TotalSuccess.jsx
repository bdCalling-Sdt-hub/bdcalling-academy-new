import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const TotalSuccess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const successList = [
    { title: "Successful Students", total: 1000 },
    { title: "Skilled Job Holders", total: 800 },
    { title: "Success Ratio", total: 80 },
    { title: "Professional Mentors", total: 20 },
  ];

  return (
    <div ref={ref} className="bg-primary  px-10 rounded-md lg:h-[250px] my-14">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 text-center">
          {successList.map((success, index) => (
            <div key={index} className="text-white mt-24 space-y-2">
              <h1 className="text-4xl font-semibold">
                {isInView && (
                  <CountUp start={0} end={`${success.total}`} duration={5} />
                )}
                {success.title === "Success Ratio" ? "%" : "+"}
              </h1>
              <p>{success.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalSuccess;
