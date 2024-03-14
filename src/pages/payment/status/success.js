import Link from "next/link";

const PaymentSuccessPage = () => {
  return (
    <div className="flex justify-center items-center h-screen text-center bg-blue-50">
      <div>
        <div className="border-2 mx-auto mb-8 border-green-400 p-6 rounded-full w-32 h-32 flex items-center justify-center">
          <img
            src="/images/tick.png"
            className="w-full h-full mx-auto"
            alt=""
          />
        </div>
        <h1 className="text-4xl font-bold text-green-400">Thank You!</h1>
        <h className="text-lg">Payment done Successfully</h>

        <p className="mt-8 text-xl">
          Check your email we send a link to login your Dashboard
        </p>

        <Link
          href="/"
          className="bg-primary text-white px-5 py-2 rounded mt-10 inline-block"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
