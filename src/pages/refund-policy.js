import RootLayout from "@/Layouts/RootLayout";

const RefundPolicy = () => {
  const data = [
    "1). Refund request can be made within maximum 7 days of course enrollment. If you request a refund within 7 days of enrolment, your full course fee will be unconditionally refunded. You cannot request a course fee refund after 7 days have passed after course enrollment. (conditions apply)",
    "2). BDKling Academy may adjust the refundable amount against any course fee.",
    "3). Refundable amount can be adjusted by reference to other students before the commencement of the course.",
    "4). If you want to join any subsequent batch, you can adjust the amount, but the remaining amount must be paid except for those classes that are completed.",
    "5). If you want to cancel the course during the class, the remaining amount will be refunded considering the number of classes that will be completed.",
    "6). 100% money back guarantee if you are not satisfied after completing the course at Bidikling Academy (must be informed within 1 week of course completion).",
  ];
  return (
    <div className="h-[500px] container py-8">
      <div className="mx-28">
        <h2 className="text-2xl font-bold text-gray-500 border-b pb-2">
          Refund Policy
        </h2>
        <div className="mt-5">
          <h2 className="mb-4 text-xl">
            If a student wants to cancel the course and get a refund during the
            course, the following rules apply:
          </h2>
          {data.map((item, index) => (
            <p key={index} className="mt-2">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;

RefundPolicy.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
