/* eslint-disable react/prop-types */
import { Helmet, HelmetProvider } from "react-helmet-async";

const PageTitle = ({title}) => {
    return (
        <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
    );
};

export default PageTitle;