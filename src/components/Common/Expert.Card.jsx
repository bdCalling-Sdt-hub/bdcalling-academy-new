import { imgUrl } from "@/config";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const ExpertCard = ({ data }) => {
  const { image, fullName, expert } = data;

  const src = image.startsWith("https") ? image : `${imgUrl}/${image}`;

  return (
    <Card className="w-full h-[420px] hover:scale-[102%] duration-200 hover:shadow-xl  bg-[#3099fbf5] p-2">
      <CardHeader className="">
        <img
          src={src}
          alt=""
          className="rounded-md h-[340px] w-full object-cover"
          loading="lazy"
        />
      </CardHeader>
      <CardContent className="text-white mt-2">
        <CardTitle className="text-lg">{fullName}</CardTitle>
        <CardDescription className="text-gray-300  text-[13px]">
          {expert}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ExpertCard;
