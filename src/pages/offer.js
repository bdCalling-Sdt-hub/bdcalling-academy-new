import RootLayout from "@/Layouts/RootLayout";
import Link from "next/link";

const OfferPage = () => {
  const courses = [
    {
      title: "Certified Digital Marketing Specialist ",
      time: "🕥 সময়-সীমা:",
      des: [
        "কোর্সটি ৪ মাস ব্যাপি হবে (৩২+ক্লাস)",
        "প্রতি ক্লাস ০২+ ঘন্টা করে সপ্তাহে ০২-০৩ দিন",
      ],
      link: " https://shorturl.at/bklPY",
    },
    {
      title: "Certified Graphics Design",
      time: "🕥 সময়-সীমা:",
      des: [
        "কোর্সটি ৪ মাস ব্যাপি হবে (৩২+ক্লাস)",
        "প্রতি ক্লাস ০২+ ঘন্টা করে সপ্তাহে ০২-০৩ দিন",
      ],
      link: " https://shorturl.at/uySYZ",
    },
    {
      title: "Certified WordPress Specialist",
      time: "🕥 সময়-সীমা:",
      des: [
        "কোর্সটি ৭৫ দিন ব্যাপি হবে (২৫+ক্লাস)",
        "প্রতি ক্লাস ০২+ ঘন্টা করে সপ্তাহে ০২-০৩ দিন",
      ],
      link: " https://shorturl.at/eglnE",
    },
  ];

  const offerDetails = [
    "ওয়ান টাইম পেমেন্টে অথবা সর্বনিম্ন ৫০% পেমেন্টে ভর্তি হতে হবে।",
    "২৭ রমজান (৭ই এপ্রিল) এর মধ্যে এনরোল করতে হবে।",
    "গিফট ভাউচারের উল্লেখিত ব্রান্ডের শোরুম থেকে শপিং করতে হবে।",
    "এই অফারটি শুধু মাত্র অফলাইন কোর্সের ক্ষেত্রে প্রযোজ্য।",
  ];
  return (
    <div className="container">
      <div className="my-10">
        <h2 className="mb-10 text-3xl font-bold text-center">
          ঈদ শপিংয়ের সাথেও সম্ভব স্কিল ডেভেলপমেন্ট! কিন্তু কিভাবে!
        </h2>
        <p>
          কেননা বিডিকলিং একাডেমি দিচ্ছে ডিজিটাল মার্কেটিং, গ্রাফিক্স ডিজাইন এবং
          ওয়ার্ডপ্রেস এই তিনটির মধ্যে পছন্দের যেকোনো একটি অফলাইন কোর্সে এনরোল
          করলেই &#34;SaRa&#34; থেকে ৪,০০০ টাকা সম-মূল্যের আকর্ষণীয় গিফট ভাউচার।
          ফলে এবারের ঈদ উদযাপন হবে আপনার পছন্দের কোর্সে এনরোল করার মাধ্যমে।
        </p>
      </div>

      <div>
        <h2 className="mb-4">🌐কোর্স বিস্তারিতঃ</h2>
        <div>
          {courses.map((data, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl mb-2 font-bold text-primary">
                🚀{data.title}
              </h2>
              <h2>{data.time}</h2>
              {data.des.map((item, index) => (
                <p key={index} className="mb-1">
                  {item}
                </p>
              ))}
              <p className="mt-5">
                কোর্স সম্পর্কে আরও বিস্তারিত জানতে ভিজিট করুন:{" "}
                <Link className="text-primary hover:underline" href={data.link}>
                  {data.link}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>

      <p>
        📢যেভাবে এনরোল করবেন: আপনাকে সরাসরি আমাদের বিডিকলিং একাডেমি’র অফিসে এসে
        এনরোল করতে হবে। আপনি যদি আগ্রহী হোন অথবা কোনো কিছু জানার থাকে তাহলে উক্ত
        গুগল ফর্মটি পূরণ করুন:{" "}
        <a
          className="text-primary hover:underline"
          target="_blank"
          href="https://forms.gle/DMd55SWHBzojfDZZ6"
        >
          https://forms.gle/DMd55SWHBzojfDZZ6
        </a>
      </p>

      <div className="my-10">
        <h2 className="font-bold">
          ⚠️ গিফট পেতে যে শর্তগুলো আপনাকে মানতে হবে:
        </h2>
        {offerDetails.map((item, index) => (
          <p key={index} className="mb-1">
            ✅{item}
          </p>
        ))}
      </div>

      <div className="mb-10">
        <p>
          অফিস ঠিকানা: ডেইজি গার্ডেন (লিফট-৫), বাড়ি#১৪, মেইন রোড, ব্লক এ, বনশ্রী
          ১২১৯, ঢাকা।
        </p>
        <p>মোবাইল: 01321-231802</p>
        <p>অথবা ভিজিট করুনঃ www.bdcallingacademy.com</p>
      </div>
    </div>
  );
};

export default OfferPage;

OfferPage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
