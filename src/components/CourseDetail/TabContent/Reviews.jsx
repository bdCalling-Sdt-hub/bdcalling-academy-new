import { baseUrl, imgUrl } from "@/config";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
const Reviews = ({ data }) => {
  console.log(data)
  const id = data?.course_id;
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    baseUrl
      .get(`reviews/${id}`)
      .then((res) => setReviews(res?.data?.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="mt-5">
      {data?.map((item, index) => (
        <div
          className="flex flex-col lg:flex-row items-center gap-4 mb-5 border-b pb-5"
          key={index}
        >
          <img
            src={
              item?.user.image
                ? `${imgUrl}/${item?.user?.image}`
                : "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"
            }
            className="w-16 h-16 rounded-full border"
            alt=""
          />
          <div>
            <div className="flex justify-start items-center gap-3">
              <h1 className="text-xl font-bold">{item?.user?.name}</h1>
              <p className="flex justify-start gap-1 items-center text-xl">{item?.rating_value} <FaStar className="-mt-1 text-yellow-400" /> </p>
            </div>
            <p>{item?.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
