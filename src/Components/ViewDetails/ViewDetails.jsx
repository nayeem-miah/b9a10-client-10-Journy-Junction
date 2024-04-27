import { useLoaderData } from "react-router-dom";
import { FaBusinessTime, FaDollarSign, FaLocationDot } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { SiSession } from "react-icons/si";
import PageTitle from "../../pages/MyLIst/PageTitle";

const ViewDetails = () => {
  const details = useLoaderData();
  console.log(details);
//   const { id } = useParams;

  const {
    image,

    country_Name,
    tourists_spot_name,
    seasonality,
    location,

    totaVisitorsPerYear,
    travel_time,
    average_cost,
    description,
  } = details;
  return (
    <div className="my-10"> 
    <PageTitle title={'View Details | MY dream Country'}></PageTitle>
    <h2 className="text-center font-bold animate__animated animate__bounce text-4xl my-4">View Details of TourViewpoint</h2>
      <div className=" bg-gray-700 shadow-xl ">
        <div>
          <figure>
            <img src={image} className="p-8 w-full h-full" />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">{tourists_spot_name}</h2>
          <div className="">
            <p>Country : {country_Name}</p>
            <p className="flex items-center gap-2">
              <FaLocationDot></FaLocationDot>
              {location}
            </p>
          </div>
          <div className="flex border px-2">
            <p className="flex items-center gap-4">
              <IoMdEye></IoMdEye>
              {totaVisitorsPerYear} k
            </p>
            <p className="flex items-center ">
              <FaDollarSign></FaDollarSign> : {average_cost}
              <FaDollarSign></FaDollarSign>
            </p>

          </div>
          <div>
            <p className="flex items-center gap-2"><SiSession></SiSession> {seasonality}</p>
            <p className="flex items-center gap-2"><FaBusinessTime></FaBusinessTime> {travel_time}</p>
          </div>
          <p><span className="font-bold underline uppercase">description:</span> {description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
