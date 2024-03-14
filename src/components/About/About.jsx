const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
      <div>
        <img
          src="https://i.postimg.cc/J72yMLMc/ezgif-com-speed.gif"
          className="animate__animated animate__zoomIn"
          alt="banner image"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold text-primary">About Us</h1>
        <p>
          We believe in a learner-centered approach, where individuals have the
          flexibility to learn at their own pace and convenience. Our platform
          offers a user-friendly interface, making it easy for learners to
          navigate and access the content they need.
        </p>
      </div>
    </div>
  );
};

export default About;
