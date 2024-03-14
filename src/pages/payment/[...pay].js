import RootLayout from "@/components/Layouts/RootLayout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Payment = () => {
  const router = useRouter();
  const DynamicPayment = dynamic(
    () => import("@/components/Payment/PaymentInfo"),
    {
      ssr: false,
    }
  );

  return (
    <>
      <DynamicPayment data={router.query?.pay} />
    </>
  );
};

export default Payment;

Payment.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
