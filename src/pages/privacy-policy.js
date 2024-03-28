import RootLayout from "@/Layouts/RootLayout";
import policyData from "../../public/db/privacyPolicy.json";

const PrivacyPolicyPage = () => {
  return (
    <div className="h-auto container py-8 ">
      <div className="mx-28">
        <h2 className="text-2xl font-bold text-gray-500 border-b pb-2">
          Privacy Policy
        </h2>
        <div>
          {policyData.map((data, index) => (
            <div key={index} className="mt-4">
              <h2 className="text-lg font-bold mb-1">
                <span className="text-lg font-bold">{index + 1}. </span>
                {data.title}
              </h2>
              {data.description.map((item, index) => (
                <p key={index} className="mb-1 text-lg">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

PrivacyPolicyPage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
