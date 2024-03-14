import Head from "next/head";

const MetaTag = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" description="this page in created by next js" />
      <meta
        name="keywords"
        content="Next.js, React, Web Development,courses, bdCalling,shadcn,tailwind"
      />
      <meta name="author" content="siffahim, saiful islam" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default MetaTag;
