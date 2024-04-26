/* eslint-disable react/prop-types */
import { FaDollarSign, FaLocationDot } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
    const { image,
        _id,
        country_Name,
        tourists_spot_name,
        seasonality,
        location,
        email,
        userName,
        totaVisitorsPerYear,
        travel_time,
        average_cost,
        description} = data;
  return (
    <div>
      <div className="card card-compact bg-gray-700 shadow-xl">
        <figure>
          <img
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tourists_spot_name}</h2>
          <div className="flex"><p>Country : {country_Name}</p>
          <p className="flex items-center gap-4"><FaLocationDot></FaLocationDot>{location}</p></div>
          <div className="flex ">
          <p className="flex items-center gap-4"><IoMdEye></IoMdEye>{totaVisitorsPerYear}</p>
          <p className="flex items-center "><FaDollarSign></FaDollarSign> : {average_cost}<FaDollarSign></FaDollarSign></p>
          </div>
          <p>{description.slice(0,50)}</p>
          <div className="card-actions justify-end border-t-2 pt-3">
            <Link to={`/details/${_id}`} className="btn btn-primary">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
