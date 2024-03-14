import { baseUrl } from "@/config";
import { BadgeDollarSign, Lock, PhoneCall } from "lucide-react";
import { useState } from "react";
import FlexItem from "../Common/FlexItem";
import { Button } from "../ui/button";

const PaymentMethod = ({ data }) => {
  const [code, setCode] = useState("");
  const token = localStorage.token;
  const [couponPrice, setCouponPrice] = useState();
  let id, title, price, discountPrice, date;
  const [gateway, setGateway] = useState("sslcommerze");

  if (Array.isArray(data) && data.length >= 5) {
    let [item1, item2, item3, item4, item5] = data;

    id = item1;
    title = item2;
    price = item3;
    discountPrice = item4;
    date = item5;
  }

  const handleCouponCode = () => {
    const value = {
      course_id: id,
      coupon_code: code,
    };
    baseUrl
      .post("/coupon-discount", value, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setCouponPrice(res.data["coupon-price"]))
      .catch((err) => console.log(err));
  };

  let amount;
  if (couponPrice) {
    amount = discountPrice
      ? parseInt(discountPrice) - parseInt(couponPrice)
      : parseInt(price) - parseInt(couponPrice);
  } else {
    amount = discountPrice ? parseInt(discountPrice) : parseInt(price);
  }

  const handlePayment = () => {
    const value = {
      course_id: id,
      price: amount,
      gateway_name: gateway,
    };

    if (gateway === "sslcommerze") {
      baseUrl
        .post("/pay", value, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.status === "success") {
            const redirectUrl = res.data.data;

            if (typeof redirectUrl === "string" && redirectUrl.trim() !== "") {
              window.location.href = redirectUrl;
            } else {
              console.error("Invalid redirect URL:", redirectUrl);
            }
          }
        })
        .catch((err) => console.log(err));
    }

    if (gateway === "bkash") {
      baseUrl
        .post(`/bkash/create-payment`, value, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data) {
            window.location.href = res.data;
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const items = [
    {
      title: "Payment",
      value: "bkash",
      image: "/images/bkash.png",
      color: "#E2136E",
    },
    // {
    //   title: "Payment",
    //   value: "nagad",
    //   image: "/images/nagad.png",
    //   color: "#ed1d26",
    // },
    // {
    //   title: "",
    //   value: "sslcommerze",
    //   image: "/images/ssl.png",
    //   color: "",
    // },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12 lg:mx-32">
      <div>
        <div className="border border-[#2492EB] rounded-md p-4">
          <div>
            <div>
              <h1 className=" text-xl capitalize">{title} </h1>
              <p className="text-sm">Starts on: {date}</p>
            </div>
            <h1 className="my-5">Payment Details</h1>
            <div className="bg-white shadow  rounded-md  flex items-center p-1 gap-1 w-full mb-7">
              <input
                type="text"
                placeholder="Discount coupon code"
                className="h-full w-full  bg-transparent outline-none px-2 py-2"
                onChange={(e) => setCode(e.target.value)}
              />

              <Button
                onClick={handleCouponCode}
                className="bg-primary rounded-md px-5 text-white py-2"
              >
                Apply
              </Button>
            </div>
            <div className="space-y-1 mt-2 border-b mb-4">
              <FlexItem justify="justify-between">
                <p>Sub Total</p>
                <p>BDT {discountPrice ? discountPrice : price}</p>
              </FlexItem>
              <FlexItem justify="justify-between">
                <p>Discount</p>
                <p className="">BDT {couponPrice ? couponPrice : 0}</p>
              </FlexItem>
            </div>
            <FlexItem justify="justify-between">
              <p>Total</p>
              <p>BDT {amount}</p>
            </FlexItem>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <div className="w-7 h-7 bg-white shadow flex items-center justify-center rounded-full">
            <PhoneCall size={18} color="#2492EB" />
          </div>
          <p>For Any Queries, Call +88 01321231802</p>
        </div>
      </div>
      <div className="border border-[#2492EB] rounded-md p-4 ">
        <h1 className=" font-medium mb-5 text-lg">Payment Medium</h1>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center shadow gap-4 p-2 rounded mb-3"
          >
            <input
              type="radio"
              id={`r${index}`}
              className="w-5 h-5"
              name="payment"
              checked={item.value === gateway}
              onChange={() => setGateway(item.value)}
            />
            <label
              htmlFor={`r${index}`}
              className="flex items-center gap-2 w-full"
            >
              <img
                src={item.image}
                width={!item.title ? "200" : " 100"}
                alt=""
              />
              <p className={`text-lg`}>{!item.title ? "" : item.title}</p>
            </label>
          </div>
        ))}

        <div className="my-4 border-t pt-5">
          <FlexItem justify="justify-between">
            <p className="text-lg">Sub Total</p>
            <p className="text-lg">BDT {amount}</p>
          </FlexItem>
        </div>
        <Button
          className="flex gap-1 bg-primary py-6 px-8 w-full"
          onClick={handlePayment}
        >
          <p className="text-md uppercase">Complete Payment</p>
          <BadgeDollarSign size={20} />
        </Button>
        <p className="text-center mt-5 flex items-center justify-center gap-1">
          <Lock size={18} color="green" />
          <span className="text-sm text-gray-400">Secured Payment</span>
        </p>
      </div>
    </div>
  );
};

export default PaymentMethod;
