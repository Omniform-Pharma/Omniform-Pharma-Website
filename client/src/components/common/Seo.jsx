import { Helmet } from "react-helmet-async";

function Seo({ title, description }) {
  const finalTitle = title ? `${title} | Omniform Pharma` : "Omniform Pharma";
  const finalDescription =
    description ||
    "Omniform Pharma provides third-party pharma manufacturing, private labeling, product development, and export solutions across India and global markets.";

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default Seo;

