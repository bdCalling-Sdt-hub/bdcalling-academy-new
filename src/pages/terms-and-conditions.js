import RootLayout from "@/Layouts/RootLayout";
import termsData from "../../public/db/terms.json";
import { useEffect, useState } from "react";

const TermAndConditionPage = () => {
  const [terms, setTerms] = useState(null);
  useEffect(() => {
    baseUrl.get('/show/terms').then((res) => {
      setTerms(res?.data?.data?.terms)
    }).catch((err) => console.log(err))
  }, [])
  return (
    <div className="h-auto container py-8 " dangerouslySetInnerHTML={{ __html: terms }}>
      {/* <div className="lg:mx-28">
        <h2 className="text-3xl font-medium  text-gray-500">শর্তাবলি</h2>
        <div>
          {termsData.map((data, index) => (
            <div key={index} className="mt-6">
              <h2 className="text-lg font-bold">
                <span className="text-lg font-bold"> </span>
                {data.title}
              </h2>
              {data.desTitle && <p>{data.desTitle}</p>}
              {data?.description.map((item, index) => (
                <div key={index} className="mt-1">
                  <p key={index}>{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default TermAndConditionPage;

TermAndConditionPage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
