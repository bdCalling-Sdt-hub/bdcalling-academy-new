import RootLayout from "@/Layouts/RootLayout";
import termsData from "../../public/db/terms.json";

const TermAndConditionPage = () => {
  return (
    <div className="h-auto container py-8 ">
      <div className="mx-28">
        <h2 className="text-3xl font-medium border-b pb-2 text-gray-500">
          Terms and Conditions
        </h2>
        <div>
          {termsData.map((data, index) => (
            <div key={index} className="mt-4">
              <h2 className="text-lg">
                <span className="text-lg font-bold">{index + 1}. </span>
                {data.title}
              </h2>
              <p className="text-justify">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermAndConditionPage;

TermAndConditionPage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
