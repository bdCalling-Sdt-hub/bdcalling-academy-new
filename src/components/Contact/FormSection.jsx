import Reveal from "@/animation/FramerMotion/Reveal";
import { baseUrl } from "@/config";
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const FormSection = ({ categories }) => {
  let [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    baseUrl
      .post("/contacts", data)
      .then((res) => {
        if (res.data?.data) {
          Swal.fire({
            title: "Good Job!",
            text: res.data?.data,
            icon: "success",
            confirmButtonColor: "#1796fd",
          });
          setLoading(false);
        }
        reset();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const contacts = [
    {
      title: "Give us a call",
      value: "+88 01321231802",
      icon: <PhoneCall size={20} color="#2492EB" />,
    },
    {
      title: "Chat with us",
      value: "info@bdcallingacademy.com",
      icon: <Mail size={20} color="#2492EB" />,
    },
    {
      title: "Office Visit Time",
      value: "Saturday- Friday 9:00 am to 6:00 pm",
      icon: <Clock size={20} color="#2492EB" />,
    },
    {
      title: "Visit us",
      value: "Daisy Garden, House 14,Block A, Banasree, main road, Dhaka-1219",
      icon: <MapPin size={20} color="#2492EB" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 my-16">
      <div>
        <h2 className="text-[#2492EB] font-bold text-xl mb-4">
          Let&#39;s Talk
        </h2>
        <Reveal>
          <p>
            For all your needs, Bdcalling Academy is there. For information
            about the course, contact the number below or visit Bdcalling
            Academy directly. And you can send messages through Facebook.
          </p>
        </Reveal>
        <Reveal>
          {contacts.map((item, index) => (
            <div key={index} className="my-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white shadow flex items-center justify-center rounded-full">
                  {item.icon}
                </div>
                <p>{item.title}</p>
              </div>
              <p className="ml-10">{item.value}</p>
            </div>
          ))}
        </Reveal>
      </div>
      <div>
        <h2 className="text-[#2492EB] font-bold text-xl mb-4">
          Inbox your queries
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <Input
            type="text"
            name="name"
            {...register("name", { required: true })}
            placeholder="Your Name"
          />
          <p>
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </p>
          <Input
            type="email"
            name="email"
            {...register("email", { required: true })}
            placeholder="Your Email"
          />
          <p>
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </p>
          <Input
            type="number"
            name="phone"
            {...register("phone", { required: true })}
            placeholder="Your Phone number"
          />
          <p>
            {errors.phone && (
              <span className="text-red-500">Phone number is required</span>
            )}
          </p>

          <Input
            type="text"
            name="subject"
            {...register("subject", { required: true })}
            placeholder="Subject"
          />
          <p>
            {errors.name && (
              <span className="text-red-500">Subject is required</span>
            )}
          </p>
          <Textarea
            name="details"
            {...register("details", { required: true })}
            placeholder="Type your message here."
          />
          <p>
            {errors.message && (
              <span className="text-red-500">Message is required</span>
            )}
          </p>
          <Button type="submit" className="bg-primary" disabled={loading}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
