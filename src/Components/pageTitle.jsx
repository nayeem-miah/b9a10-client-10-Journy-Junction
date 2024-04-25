import { Helmet, HelmetProvider } from "react-helmet-async";

const pageTitle = ({title}) => {
    return (
        <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
    );
};

export default pageTitle;