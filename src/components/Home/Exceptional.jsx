import { ArrowUpRight, Check, Trophy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import bteb from '../../assest/assosiate/working/1_bteb.png';
import ict from '../../assest/assosiate/working/2_ict.png';
import iitu from '../../assest/assosiate/working/3_iitu.png';
import edge from '../../assest/assosiate/working/4_edge.png';
import nsda from '../../assest/assosiate/working/5_nsda.png';
import dhaka_university from '../../assest/assosiate/working/6_dhaka_university.jpg';
import crown_institute from '../../assest/assosiate/working/7_crown_institute_of_business_and_technology.jpg';
import eastern_university from '../../assest/assosiate/working/8_eastern_eniversity.png';
import jagannath_university from '../../assest/assosiate/working/9_jagannath_university.png';
import dhaka_college from '../../assest/assosiate/working/10_dhaka_college.png';
import united_international_university from '../../assest/assosiate/working/11_united_international_university.png';
import metropolitan_university from '../../assest/assosiate/working/12_metropolitan_university.png';
import north_south_university from '../../assest/assosiate/working/13_north_south_university.png';
import east_west_university from '../../assest/assosiate/working/14_east_west_university.png';
import smuct from '../../assest/assosiate/working/15_smuct.png';
import bracu from '../../assest/assosiate/working/16_bracu.png';
import polytechnic_17 from '../../assest/assosiate/working/17_polytechnic.png';
import polytechnic_18 from '../../assest/assosiate/working/18_polytechnic.png';
import polytechnic_19 from '../../assest/assosiate/working/19_polytechnic.jpg';
import polytechnic_20 from '../../assest/assosiate/working/20_polytechnic.jpg';
import polytechnic_21 from '../../assest/assosiate/working/21_polytechnic.png';
import polytechnic_22 from '../../assest/assosiate/working/22_polytechnic.jpg';
import polytechnic_23 from '../../assest/assosiate/working/23_polytechnic.png';
import polytechnic_24 from '../../assest/assosiate/working/24_polytechnic.png';
import polytechnic_25 from '../../assest/assosiate/working/25_polytechnic.png';
import polytechnic_26 from '../../assest/assosiate/working/26_polytechnic.png';
import polytechnic_27 from '../../assest/assosiate/working/27_polytechnic.jpg';
import polytechnic_28 from '../../assest/assosiate/working/28_polytechnic.png';
import polytechnic_29 from '../../assest/assosiate/working/29_polytechnic.png';
import polytechnic_30 from '../../assest/assosiate/working/30_polytechnic.png';
import polytechnic_31 from '../../assest/assosiate/working/31_polytechnic.jpg';
import polytechnic_32 from '../../assest/assosiate/working/32_polytechnic.png';
import polytechnic_33 from '../../assest/assosiate/working/33_polytechnic.jpg';
import polytechnic_34 from '../../assest/assosiate/working/34_polytechnic.png';
import polytechnic_35 from '../../assest/assosiate/working/35_polytechnic.jpg';
import polytechnic_36 from '../../assest/assosiate/working/36_polytechnic.jpg';
import polytechnic_37 from '../../assest/assosiate/working/37_polytechnic.png';
import polytechnic_38 from '../../assest/assosiate/working/38_polytechnic.png';
import softvence from '../../assest/assosiate/concerns/1_softvence.png';
import sm_technology from '../../assest/assosiate/concerns/2_sm_technology.png';
import backbencher_studio from '../../assest/assosiate/concerns/3_backbencher_studio.png';
import sparktech from '../../assest/assosiate/concerns/4_sparktech.png';
import scaleup from '../../assest/assosiate/concerns/5_scaleup.png';
import basis from '../../assest/assosiate/member/1_basis.png';
const Exceptional = () => {
  const [img, setImag] = useState();
  const [tab, setTab] = useState('working');
  const items = [
    "Free Seminar",
    "Provide Best Support",
    "Expert Many Teacher",
    "Lifetime access",
  ];

  const associateData = {
    working: [bteb, ict, iitu, edge, nsda, dhaka_university, crown_institute, eastern_university,
      jagannath_university, dhaka_college, united_international_university, metropolitan_university,
      north_south_university, east_west_university, smuct, bracu, polytechnic_17, polytechnic_18,
      polytechnic_19, polytechnic_20, polytechnic_21, polytechnic_22, polytechnic_23, polytechnic_24,
      polytechnic_25, polytechnic_26, polytechnic_27, polytechnic_28, polytechnic_29, polytechnic_30,
      polytechnic_31, polytechnic_32, polytechnic_33, polytechnic_34, polytechnic_35, polytechnic_36,
      polytechnic_37, polytechnic_38
    ],
    concerns: [
      softvence, sm_technology, backbencher_studio, sparktech, scaleup
    ],
    member: [
      basis
    ]
  }
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
            // console.log(`${basePath}/${tab}/${item}`)
            return <div key={index} className="flex justify-center items-center">
              <Image key={index} src={item} alt={item} width={100} height={100} />
            </div>
          })
        }
      </div>
    </div>
  );
};

export default Exceptional;
