import React from "react";
import Head from "next/head";
import { MetaTags } from "../../constants/metaTags";

interface MetaProps {
  metaTags: MetaTags;
}

export const Meta = ({ metaTags }: MetaProps) => {
  const { title, description, keywords, url, image } = metaTags;
  return (
    <Head>
      <title>{title}</title>
      {/* <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" /> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image as unknown as string} />
    </Head>
  );
};

export default Meta;
