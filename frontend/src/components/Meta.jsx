import { Helmet } from "react-helmet-async";

const Meta = ({
  title = "Welcome to proShop",
  description = "We sell the best products way way cheaper...",
  keywords = "electronics, buy electronics, cheap electronics",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default Meta;
