import { ArrowUpRight, Check, Trophy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import associateData from "../../../public/db/assosiate.json";
const Exceptional = () => {
  const [img, setImag] = useState();
  const [tab, setTab] = useState('working');
  const items = [
    "Free Seminar",
    "Provide Best Support",
    "Expert Many Teacher",
    "Lifetime access",
  ];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 my-36 items-center justify-center container">
        <div className="relative">
          <img src="/images/exceptional.png" className="ml-auto" alt="image" />
          <div className="absolute bottom-0 left-0">
            <img src="/images/exceptional02.png" alt="image" />
          </div>
          <div className="absolute top-5 left-32 w-[120px] bg-white shadow text-center p-3 rounded-md">
            <div className="bg-primary w-12 h-12 rounded-md flex justify-center items-center mt-[-35px]">
              <Trophy color="#fff" size={40} strokeWidth={"0.75px"} />
            </div>
            <div className="mt-1">
              <h1 className="text-3xl font-bold text-primary">+250</h1>
              <p>Awesome Awards</p>
            </div>
          </div>
          <div className="absolute bottom-28">{/* <LottiePlane /> */}</div>
        </div>
        <div className="space-y-5 ">
          <h1 className="text-4xl font-bold ">Why We’re Exceptional</h1>
          <p>
            Bdcalling Academy offers various courses and upon successful
            completion, we offer job opportunities within our company.
            Additionally, we provide scholarships in different categories to
            support aspiring individuals. We guarantee a refund if anyone is
            dissatisfied with the course. Our training program includes hands-on
            experience with real client projects, ensuring a comprehensive
            learning experience.
          </p>

          <div className="bg-gray-50 rounded-md rounded-l-[55px] relative h-36">
            <img
              src="/images/flexible.png"
              className="absolute top-0 left-0"
              alt=""
            />
            <h1 className="font-bold   text-white absolute left-28 pt-2">
              Flexible Classes
            </h1>
            <p className="text-[11px] lg:text-[16px] text-justify px-4 py-3 absolute left-24 top-10">
              Fit education into your life, not the other way around. Flexible
              classes are designed to adapt to your busy schedule, so you can
              learn what you want when you want.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {items.map((item, index) => (
              <div key={index} className="flex items-center  gap-2">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <Check size={16} color="white" />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <Link href="/about">
            <Button className="text-white border-primary px-4 text-md py-6 mt-8 group transition-all hover:bg-[#1796fd]">
              More About{" "}
              <ArrowUpRight
                color="#fff"
                size={20}
                className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 duration-120"
              />
            </Button>
          </Link>
        </div>
        <img src={img} alt="" />
      </div>
      <div className="flex flex-wrap gap-2 justify-between items-center container mx-auto">
        <button onClick={() => setTab('working')} className={`rounded-md ${tab === 'working' ? 'bg-blue-600 font-semibold  p-2 px-6 text-white' : 'hover:bg-blue-600 font-semibold transition-all p-2 px-6 bg-blue-300'}`}>
          Working with
        </button>
        <button onClick={() => setTab('concerns')} className={`rounded-md ${tab === 'concerns' ? 'bg-blue-600 font-semibold  p-2 px-6 text-white' : 'hover:bg-blue-600 font-semibold transition-all p-2 px-6 bg-blue-300'}`}>
          Members of
        </button>
        <button onClick={() => setTab('member')} className={`rounded-md ${tab === 'member' ? 'bg-blue-600 font-semibold  p-2 px-6 text-white' : 'hover:bg-blue-600 font-semibold transition-all p-2 px-6 bg-blue-300'}`}>
          Our Concerns
        </button>
        <div className="w-full bg-gray-200 shadow-inner h-2 mt-2 rounded-md">

        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 container mx-auto my-14 justify-center items-center gap-3">
        {
          associateData[tab]?.map((item, index) => {
            return <div key={index} className="flex justify-center items-center">
              <img key={index} src={item} alt={item} width={100} height={100} loading="lazy" />
            </div>
          })
        }
      </div>
    </div>
  );
};

export default Exceptional;
