import React from "react";
// Next
import Head from "next/head";
// Interface
interface OGImageProps {
  ogImageSRC: string;
}
const OGImage = ({ ogImageSRC }: OGImageProps) => {
  return (
    <Head>
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImageSRC} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="630" />
    </Head>
  );
};

export default OGImage;
