import { imgUrl } from "@/config";

const Instructor = ({ data }) => {
  const course = data;
  // console.log('Instructor,', data)
  return (
    <div className="mt-5">
      {data?.map((item, index) => (

        <div
          className="flex flex-col lg:flex-row items-center gap-4 mb-5 border-b pb-5"
          key={index}
        >

          <img
            src={`${imgUrl}/${item?.image}`}
            className="w-16 h-16 rounded-full object-cover"
            alt=""
          />
          <div className="space-y-1">
            <h1 className="text-xl font-bold">{item.fullName}</h1>
            <p><span className="font-semibold">Designation</span>: {item?.designation}</p>
            <p><span className="font-semibold">Expertise</span>: {item?.expert}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructor;
