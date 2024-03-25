import TopHeading from "@/components/Common/TopHeading";
import FormSection from "@/components/Contact/FormSection";
import useCategory from "@/hooks/useCategory";
import RootLayout from "@/Layouts/RootLayout";
import MetaTag from "@/shared/MetaTag";
import dynamic from "next/dynamic";

const ContactPage = () => {
  const DynamicMap = dynamic(() => import("@/components/Contact/Map"), {
    loading: () => <h1>Loading...</h1>,
    ssr: false,
  });
  const { category: categories } = useCategory();
  return (
    <div className="container">
      <MetaTag title="Contact" />
      <TopHeading blueText="CONTACT US" />
      <FormSection categories={categories} />
      <DynamicMap />
    </div>
  );
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
