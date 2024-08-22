import Reveal from "@/animation/FramerMotion/Reveal";
import Banner from "@/components/Home/Banner";

import Event from "@/components/Home/Event";
import Exceptional from "@/components/Home/Exceptional";
import Gallery from "@/components/Home/Gallery";
import JoinUs from "@/components/Home/JoinUs";
import RecordingCourse from "@/components/Home/RecordingCourse";
import StudentSuccess from "@/components/Home/StudentSuccess";
import Testimonial from "@/components/Home/Testimonial";
import TotalSuccess from "@/components/Home/TotalSuccess";
import useCategory from "@/hooks/useCategory";
import RootLayout from "@/Layouts/RootLayout";
import MetaTag from "@/shared/MetaTag";
import dynamic from "next/dynamic";

const HomePage = () => {
  const DynamicCourses = dynamic(() => import("@/components/Home/Courses"), {
    loading: () => <h1>Loading...</h1>,
  });
  const { category } = useCategory();

  return (
    <div>
      <MetaTag title="Bdcalling Academy" />
      <Banner />
      <Reveal>
        <DynamicCourses categories={category} />
      </Reveal>
      <Reveal>
        <RecordingCourse />
      </Reveal>
      <Reveal>
        <Exceptional />
      </Reveal>
      <Reveal>
        <Event />
      </Reveal>
      <Reveal>
        <StudentSuccess />
      </Reveal>
      <Reveal>
        <Testimonial />
      </Reveal>
      <Reveal>
        <TotalSuccess />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <JoinUs />
      </Reveal>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
