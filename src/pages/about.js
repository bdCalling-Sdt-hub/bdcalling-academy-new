import Reveal from "@/animation/FramerMotion/Reveal";
import About from "@/components/About/About";
import Experts from "@/components/About/Experts";
import OurVision from "@/components/About/OurVision";
import TotalCourse from "@/components/About/TotalCourse";
import WhatBdCalling from "@/components/About/WhatBdCalling";
import Subscribe from "@/components/Common/Subscribe";
import RootLayout from "@/components/Layouts/RootLayout";
import MetaTag from "@/shared/MetaTag";

const AboutPage = () => {
  return (
    <div className="container">
      <MetaTag title="About" />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <WhatBdCalling />
      </Reveal>
      <OurVision />
      <Experts />
      <Reveal>
        <TotalCourse />
      </Reveal>
      <Reveal>
        <Subscribe
          title="Say Hello to Learn with!"
          description="Unlock a world of knowledge and endless growth opportunities"
        />
      </Reveal>
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
