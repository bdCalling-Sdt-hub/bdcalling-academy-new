import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const TotalCourse = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const successList = [
    { title: "Courses", total: 10 },
    { title: "Certified Teachers", total: 20 },
    { title: "Students Enroll", total: 1200 },
    { title: "Success Ratio", total: 80 },
  ];

  return (
    <div ref={ref} className="bg-primary  py-20 px-10 rounded-md  my-14">
      <div className="text-center mb-10">
        <p className="text-white mb-3">What is bdCalling</p>
        <h2 className="text-4xl text-white">
          Master the Skills to drive <br /> your career
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 text-center">
        {successList.map((success, index) => (
          <div
            key={index}
            className="bg-white px-5 py-14 rounded-md text-primary space-y-2"
          >
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
  );
};

export default TotalCourse;
