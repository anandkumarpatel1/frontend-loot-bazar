import React from "react";

import Helmet from "react-helmet";

const MetaData = ({ title, desc, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content={desc}
      />
      <meta
        name="keywords"
        content={keyword}
      />
      <meta name="author" content="Anand kumar" />
    </Helmet>
  );
};

export default MetaData;

