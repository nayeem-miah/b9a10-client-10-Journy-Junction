import { Link } from "react-router-dom";
import PageTitle from "../../pages/MyLIst/PageTitle";

const ErrorPage = () => {
  return (
    <div className="text-center items-center space-y-5 mt-20">
        <PageTitle title={'Error page | MY dream Country'}></PageTitle>
      <h3 className="text-9xl font-bold text-red-600">404 !!!</h3>
      <p className="text-3xl font-bold">No Found</p>
      <Link to={"/"}>
        <p className="link link-primary text-4xl">Go Back</p>
      </Link>
    </div>
  );
};

export default ErrorPage;
