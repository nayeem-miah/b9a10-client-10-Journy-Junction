import { useLoaderData } from "react-router-dom";
import PageTitle from "./PageTitle";


const MyList = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="min-h-[calc(100vh-250px)] my-5 animate__animated animate__slideInUp">
      <PageTitle title={"My List | MY dream Country"}></PageTitle>
      <h2 className="text-4xl text-center text-purple-500 my-6">
        Tourist Sport Information Table
      </h2>
      <div>
        <div className="overflow-x-auto border p-5">
          <table className="table table-xs">
            <thead>
              <tr>
                <th className="font-bold text-xl text-start underline">No</th>

                <th className="font-bold text-xl text-start underline">
                  Email{" "}
                </th>

                <th className="font-bold text-xl text-start underline">
                  Tourist Sport Name{" "}
                </th>
                <th className="font-bold text-xl text-start underline">
                  Average Cost{" "}
                </th>
                <th className="font-bold text-xl text-start underline">
                  Details{" "}
                </th>
                <th className="font-bold text-xl text-start underline">Edit</th>
                <th className="font-bold text-xl text-start underline">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((info, i = 0) => (
                <tr key={info._id}>
                  <th className="text-xl ">{(i = i + 1)}</th>
                  <td className="text-xl">{info.email}</td>

                  <td className="text-xl">{info.tourists_spot_name}</td>

                  <td className="text-xl">{info.average_cost}</td>
                  <td className="text-xl cursor-pointer  lg:ml-8">View Details</td>
                  <td className="text-xl cursor-pointer lg:ml-8">Edit</td>
                  <td className="text-xl cur  lg:ml-7 ">X</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;
