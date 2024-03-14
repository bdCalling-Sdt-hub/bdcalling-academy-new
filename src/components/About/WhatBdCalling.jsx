const WhatBdCalling = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  items-center mt-20 mb-64">
      <div className="space-y-7">
        <h1 className="text-4xl font-semibold text-primary">
          What Is bdCalling
        </h1>
        <p>
          bdCalling IT Ltd is a freelancing-based company that started its
          journey in 2014 from a small corner of the drawing room of the
          honorable CEO MD. Monir Hossain of bdCalling IT. We started with a
          computer that 5 members used. However, bdCalling IT is a company of
          450 members now. We work in 6 categories Business Support, Web Design
          and Development, Software Development, Visual and Graphics Design,
          Digital Marketing, and Skill Development. Additionally, bdCalling IT
          is working as a group of companies with SMT, SparkTech Agency,
          Softvence, and Backbenchers Studio.
        </p>
      </div>
      <div className="relative">
        <div className=" w-[88%] mx-auto">
          <img
            src="https://i.postimg.cc/8CMqRsPW/About-1.jpg"
            alt="image"
            className="w-full h-80 object-cover rounded-lg animate__animated animate__zoomIn"
          />
        </div>
        <div className="absolute -bottom-32 left-14 p-2 bg-white rounded-full">
          <img
            src="https://i.postimg.cc/vHSFMpN1/About-3.jpg"
            alt="image"
            className="w-[200px] h-[200px] animate__animated animate__zoomIn rounded-[50%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatBdCalling;
