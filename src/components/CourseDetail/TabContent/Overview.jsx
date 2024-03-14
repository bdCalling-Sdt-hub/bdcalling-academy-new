const Overview = ({ data }) => {
  const [course] = data;

  return (
    <div>
      <div className="mt-5 space-y-4">
        <p className="text-xl">{course?.course?.courseDetails}</p>
      </div>
      <div>
        <h1 className="text-2xl font-bold my-10">Career Opportunities</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {course?.course?.careeropportunities?.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              <p>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </p>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold border-b pb-2 mb-4">Helpline</h2>
        <p>
          For any queries regarding this batch, call{" "}
          <span className="font-bold">+88 01321231802</span> (09 Am to 06 Pm)
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-bold border-b pb-2 mb-4">Payment</h2>
        <p className="mb-5">If you want to join live batch and make payment-</p>
        <ul className="space-y-4">
          <li>1. Click on the&#39;Join Live Batch&#39;button</li>
          <li>2. Select your batch schedule</li>
          <li>3. Click on the &#39;Purchase&#39; button</li>
          <li>4. Select the payment method at your convenience</li>
          <li>5. Complete the payment</li>
        </ul>
        <p className="mt-5">
          At the end of the process you will get a message and your batch will
          show up in your dashboard. Start the course according to your study
          plan.,
        </p>
      </div>
    </div>
  );
};

export default Overview;
