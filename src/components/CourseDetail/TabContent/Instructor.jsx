import { imgUrl } from "@/config";

const Instructor = ({ data }) => {
  const [course] = data;

  return (
    <div className="mt-5">
      {course?.course?.mentors.map((item, index) => (
        <div
          className="flex flex-col lg:flex-row items-center gap-4 mb-5 border-b pb-5"
          key={index}
        >
          <img
            src={`${imgUrl}/${item.image}`}
            className="w-20 h-20 rounded-full"
            alt=""
          />
          <div>
            <h1 className="text-xl font-bold">{item.fullName}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructor;
