import { useLoaderData } from "react-router-dom";
import AllTouristCard from "../../Components/AllTouristCard/AllTouristCard";
import PageTitle from "../MyLIst/PageTitle";

const AllTouristsSpot = () => {
  const items = useLoaderData();
  // console.log(items);

  return (
    <div className="min-h-[calc(100vh-250px)] my-8">
        <PageTitle title={'AllTourist page | MY dream Country'}></PageTitle>
      <h2 className="text-center text-4xl font-bold text-blue-700">
        All Tourist Sport
      </h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 my-8">
        {items.map((data) => (
          <AllTouristCard key={data._id} data={data}></AllTouristCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
