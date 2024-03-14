import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { baseUrl } from "@/config";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const value = { ...data, userType: "STUDENT", signAs: "website" };

      const res = await baseUrl.post("/register", value);

      if (res.data?.message) {
        Swal.fire({
          title: "Let's verify",
          text: "Check your email & click the link to activate your account",
          icon: "success",
          confirmButtonColor: "#1796fd",
        });
        setLoading(false);
      }

      setError("");
      reset();
    } catch (err) {
      if (err.response.data && err.response.data.email) {
        setError(err.response.data.email[0]);
      } else if (err.response.data && err.response.data.userName) {
        setError(err.response.data.userName[0]);
      } else if (err.response.data && err.response.data.password) {
        setError(err.response.data.password[0]);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="order-2 lg:order-1">
          <div className="mb-8">
            <h2 className="font-semibold text-2xl">Create a new account</h2>
            <p>Enter your details to register</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Full Name"
                name="fullName"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="User Name"
                name="userName"
                {...register("userName", { required: true })}
              />
              {errors.userName && (
                <span className="text-red-500">Username is required</span>
              )}
            </div>
            <div className="mb-4">
              <Input
                type="email"
                placeholder="Email"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="mb-4">
              <Input
                type="number"
                placeholder="Phone number"
                name="mobileNumber"
                {...register("mobileNumber", { required: true })}
              />
              {errors.mobileNumber && (
                <span className="text-red-500">Phone number is required</span>
              )}
            </div>
            <div className="mb-4">
              <Input
                type="password"
                placeholder="Password"
                name="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>
            <div>
              <Input
                type="password"
                placeholder="Confirm password"
                name="password_confirmation"
                {...register("password_confirmation", { required: true })}
              />
              {errors.password_confirmation && (
                <span className="text-red-500">
                  Confirm password is required
                </span>
              )}
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <Button className="w-full py-6 bg-primary mt-5" disabled={loading}>
              Register
            </Button>
          </form>
          <p className="mt-5">
            I already haven an account?{" "}
            <Button
              onClick={() => router.push("/login")}
              variant="link"
              className="px-0 text-primary"
            >
              Sign In
            </Button>
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin.cc7f1c14.png&w=640&q=75"
            alt=""
            className="ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

Register.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
