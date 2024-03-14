const TopHeading = ({ blueText, description = "" }) => {
  return (
    <div className="text-center my-10">
      <h2 className="text-3xl font-bold text-primary">{blueText}</h2>
      <p className="w-3/4 mx-auto mt-4">{description}</p>
    </div>
  );
};

export default TopHeading;
