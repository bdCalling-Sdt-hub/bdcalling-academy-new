import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { baseUrl } from "@/config";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    //only keep token at local storage
    const resToken = await baseUrl.post("/login", data);
    localStorage.setItem("token", resToken.data.access_token);

    if (!res?.ok) {
      setError("Credential are Wrong");
    } else {
      router.push(router.query.callbackUrl || "/");
    }

    reset();
  };

  return (
    <div className="container my-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="order-2 lg:order-1">
          <div className="mb-8">
            <h2 className="font-semibold text-2xl">Login</h2>
            <p>
              Log in with your data that you entered during your registration
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <Input
                placeholder="Email"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>

            <div>
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
            {error && <p className="text-red-500">{error}</p>}
            {/* <div className="flex items-center justify-between mb-7 mt-2">
              <div className="flex space-x-2">
                <Checkbox id="terms1" />
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Button variant="link" className="px-0">
                Forget password
              </Button>
            </div> */}
            <Button type="submit" className="w-full py-6 bg-primary mt-5">
              Login
            </Button>
          </form>
          <p className="my-5">
            I haven’t account?{" "}
            <Button
              onClick={() => router.push("/register")}
              variant="link"
              className="px-0 text-primary"
            >
              Sign up
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

export default Login;

Login.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getServerSideProps = async () => {
//   const res = await fetch("http://192.168.10.13:8000/api/login");
//   const data = await res.json();

//   console.log(data);

//   return {};
// };
