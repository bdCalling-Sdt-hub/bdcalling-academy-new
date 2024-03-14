import Lottie from "react-lottie-player";
import animationData from "../../../public/images/plane.json";

const LottiePlane = () => {
  return (
    <div>
      <Lottie loop play animationData={animationData} />
    </div>
  );
};

export default LottiePlane;
