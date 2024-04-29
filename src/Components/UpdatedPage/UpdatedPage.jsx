import Swal from "sweetalert2";

import PageTitle from "../../pages/MyLIst/PageTitle";
import { useLoaderData, useParams } from "react-router-dom";

const UpdatedPage = () => {
  const updateDetais = useLoaderData();
  const {id} = useParams();
console.log(id);
  // console.log(updateDetais.image);
  const {
    _id,
    image,
    country_Name,
    tourists_spot_name,
    seasonality,
    location,
    email,
    userName,
    totaVisitorsPerYear,
    travel_time,
    average_cost,
    description,
  } = updateDetais;
  const handleUpdated = (e) => {
    console.log(' button a click kora hosre', _id);
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const country_Name = form.country_Name.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const seasonality = form.seasonality.value;
    const location = form.location.value;
    const email = form.email.value;
    const userName = form.userName.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const travel_time = form.travel_time.value;
    const average_cost = form.average_cost.value;
    const description = form.description.value;

    const updatedTourist = {
      image,
      country_Name,
      tourists_spot_name,

      seasonality,
      location,
      email,
      userName,
      totaVisitorsPerYear,
      travel_time,
      average_cost,
      description,
    };

    fetch(`http://localhost:5000/tourist/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTourist),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "updated successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }

        form.reset();
      });
  };
  return (
    <div className="min-h-[calc(100vh-250px)]">
      <PageTitle title={"update page | Our Dream country"}></PageTitle>
      <div className=" pt-10 animate__animated animate__slideInDown">
        <div className="shadow-2xl p-5  dark:bg-[#121c26d5]">
          <div className="mt-5 mb-8">
            <p className="text-center text-3xl font-semibold">
              <span className="mr-3 text-[#FF497C]">
                <i className="bx bxs-alarm-add"></i>
              </span>
              <span className="text-[#ef36c4]">
                Your Data Updating : {tourists_spot_name}
              </span>
            </p>
          </div>
          {/* form */}
          <form onSubmit={handleUpdated}>
            <div className="flex gap-8 ">
              <div className="flex-1">
                <label className="block mb-2 dark:text-white">image</label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  defaultValue={image}
                  placeholder="image Link"
                  name="image"
                  required
                />

                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="brand"
                >
                  country_Name
                </label>
                <select
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  placeholder="select country_Name"
                  name="country_Name"
                  defaultValue={country_Name}
                  required
                >
                  <option value="Thailand" selected>
                    Thailand
                  </option>
                  <option value="Indonesia" selected>
                    Indonesia
                  </option>
                  <option value="Malaysia" selected>
                    Malaysia
                  </option>
                  <option value="Vietnam" selected>
                    Vietnam
                  </option>
                  <option value="Cambodia" selected>
                    Cambodia
                  </option>
                  <option value="Bangladesh" selected>
                    Bangladesh
                  </option>
                </select>

                <label className="block mt-4 mb-2 dark:text-white">
                  tourists_spot_name
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  defaultValue={tourists_spot_name}
                  placeholder="tourists_spot_name"
                  name="tourists_spot_name"
                  required
                />

                <label className="block mt-4 mb-2 dark:text-white">
                  seasonality
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  defaultValue={seasonality}
                  placeholder="seasonality"
                  name="seasonality"
                  required
                />

                <label className="block mt-4 mb-2 dark:text-white">
                  location
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  defaultValue={location}
                  placeholder="location"
                  name="location"
                  required
                />
              </div>
              {/* Right side */}
              <div className="flex-1">
                <label className="block mb-2 dark:text-white">Email</label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="email"
                  // defaultValue={email}
                  placeholder="Enter Email"
                  name="email"
                  defaultValue={email}
                  required
                />
                <label className="block mb-2 mt-4 dark:text-white">
                  User Name
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  name="userName"
                  defaultValue={userName}
                  placeholder="user Name"
                  required
                />

                <label className="block mt-4 mb-2 dark:text-white">
                  total Visitors PerYear
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="number"
                  placeholder="total Visitors PerYear"
                  name="totaVisitorsPerYear"
                  defaultValue={totaVisitorsPerYear}
                  required
                />
                <label className="block mt-4 mb-2 dark:text-white">
                  travel_time
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  defaultValue={travel_time}
                  placeholder="travel_time"
                  name="travel_time"
                  required
                />
                <label className="block mt-4 mb-2 dark:text-white">
                  average_cost
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="number"
                  defaultValue={average_cost}
                  placeholder="average_cost"
                  name="average_cost"
                  required
                />
              </div>
            </div>
            <label className="block mt-4 mb-2 dark:text-white">
              short description
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              defaultValue={description}
              placeholder="description"
              name="description"
              required
            />
            <input
              className="px-4 w-full py-4 mt-4 rounded hover:bg-[#ec0a4a]  bg-purple-600 duration-200 text-white cursor-pointer font-semibold"
              type="submit"
              value="Updated Tourists Sport"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatedPage;
