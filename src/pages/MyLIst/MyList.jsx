import { Link } from "react-router-dom";
import PageTitle from "./PageTitle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext) || {};
  const [users, setUsers] = useState([]);

  const handleDelete = (id) => {
    console.log("delete ", id);
    // are you sure
    fetch(`http://localhost:5000/myList/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "this form is deleted",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
          const remaining = users.filter((info) => info._id !== id);
          setUsers(remaining);
        }
      });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, [user]);
  //   console.log(data);
  return (
    <div className="min-h-[calc(100vh-250px)] my-5 animate__animated animate__slideInUp">
      <PageTitle title={"My List | MY dream Country"}></PageTitle>
      <h2 className="text-4xl text-center text-purple-500 animate__animated animate__bounce my-6">
        Tourist Sport Information Table
      </h2>
      <div>
        <div className="overflow-x-auto border p-5 px-10 animate__animated animate__slideInLeft">
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
                <th className="font-bold text-xl  text-start underline">
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

                  <td className="text-xl">{info.average_cost}$</td>
                  <td>
                    <Link
                      to={`/details/${info._id}`}
                      className="text-xl cursor-pointer   hover:underline hover:text-blue-600"
                    >
                      View Details
                    </Link>
                  </td>
                  <td className="text-xl cursor-pointer hover:underline hover:text-blue-600 lg:ml-8 ">
                    <Link to={`/updated/${info._id}`}>
                      <FaEdit></FaEdit>
                    </Link>
                  </td>

                  <td>
                    <button
                      onClick={() => {
                        handleDelete(info._id);
                      }}
                      className="text-xl cursor-pointer  lg:ml-7   hover:underline hover:text-red-600"
                    >
                      <MdDelete></MdDelete>
                    </button>
                  </td>
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
