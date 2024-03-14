import TopHeading from "@/components/Common/TopHeading";
import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { baseUrl } from "@/config";
import useCategory from "@/hooks/useCategory";
import MetaTag from "@/shared/MetaTag";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FreeSeminar = () => {
  let [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { category: categories } = useCategory();

  const onSubmit = (data) => {
    setLoading(true);
    baseUrl
      .post("/seminers", data)
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

  return (
    <div className="container lg:w-2/6 my-14">
      <MetaTag title="Free Seminar" />
      <TopHeading blueText="JOIN FREE SEMINAR" />
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

        <select
          {...register("category")}
          className="border w-full py-4  rounded-md"
        >
          <option>Select category</option>
          {categories?.map((item, index) => (
            <option
              value={item.category_name}
              className="capitalize"
              key={index}
            >
              {item.category_name}
            </option>
          ))}
        </select>
        <Textarea
          name="address"
          {...register("address", { required: true })}
          placeholder="Type your message here."
        />
        <p>
          {errors.address && (
            <span className="text-red-500">Address is required</span>
          )}
        </p>

        <Button type="submit" className="bg-primary" disabled={loading}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FreeSeminar;

FreeSeminar.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
