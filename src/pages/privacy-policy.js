import RootLayout from "@/Layouts/RootLayout";
import policyData from "../../public/db/privacyPolicy.json";
import { useEffect, useState } from "react";

const PrivacyPolicyPage = () => {
  const [privacy, setPrivacy] = useState(null);
  useEffect(() => {
    baseUrl.get('/show/privacy').then((res) => {
      setPrivacy(res?.data?.data?.privacy)
    }).catch((err) => {})
  }, [])
  return (
    <div className="h-auto container py-8 " dangerouslySetInnerHTML={{ __html: privacy }}>
      {/* <div className="lg:mx-28">
        <h2 className="text-2xl font-bold text-gray-500">প্রাইভেসি পলিসি</h2>
        <div>
          {policyData.map((data, index) => (
            <div key={index} className="mt-6">
              <h2 className="text-lg font-bold mb-1">
                <span className="text-lg font-bold"></span>
                {data.title}
              </h2>
              {data.desTitle && <p>{data.desTitle}</p>}
              {data.description.map((item, index) => (
                <p key={index} className="mb-1 text-lg">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default PrivacyPolicyPage;

PrivacyPolicyPage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
