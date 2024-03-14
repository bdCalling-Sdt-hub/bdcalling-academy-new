import { baseUrl, imgUrl } from "@/config";
import { useEffect, useState } from "react";

const Reviews = ({ data }) => {
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
      {reviews.map((item, index) => (
        <div
          className="flex flex-col lg:flex-row items-center gap-4 mb-5 border-b pb-5"
          key={index}
        >
          <img
            src={
              item?.student.image
                ? `${imgUrl}/${item?.student?.image}`
                : "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"
            }
            className="w-16 h-16 rounded-full border"
            alt=""
          />
          <div>
            <h1 className="text-xl font-bold">{item?.student?.fullName}</h1>
            <p>{item?.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
