import Link from "next/link";

const PaymentFailedPage = () => {
  return (
    <div className="flex justify-center items-center h-screen text-center bg-blue-50">
      <div>
        <div className="border-2 mx-auto mb-8 border-red-400 p-6 rounded-full w-32 h-32 flex items-center justify-center">
          <img
            src="/images/cross.png"
            className="w-full h-full mx-auto"
            alt=""
          />
        </div>
        <h1 className="text-4xl font-bold text-red-400">Payment failed</h1>

        <p className="mt-8">
          You will be redirected the home page shortly or
          <br /> click here to return to home page
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

export default PaymentFailedPage;
