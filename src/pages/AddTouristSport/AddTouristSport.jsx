const AddTouristSport = () => {
  return (
    <div className="min-h-[calc(100vh-250px)]">
      <div className=" pt-10 animate__animated animate__slideInDown">
        <div className="shadow-2xl p-5  dark:bg-[#121c26d5]">
          <div className="mt-5 mb-8">
            <p className="text-center text-3xl font-semibold">
              <span className="mr-3 text-[#FF497C]">
                <i className="bx bxs-alarm-add"></i>
              </span>
              <span className="text-[#FF497C]">
                <span className="text-[#FF497C]"></span>
                Your added Country
              </span>
            </p>
          </div>
          {/* form */}
          <form
          //    onSubmit={handleAddProduct}
          >
            <div className="flex gap-8 ">
              <div className="flex-1">
                <label className="block mb-2 dark:text-white">image</label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="image"
                  name="image"
                />

                <label className="block mt-4 mb-2 dark:text-white">
                  country_Name
                </label>

                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="country_Name"
                  name="country_Name"
                />

                <label className="block mt-4 mb-2 dark:text-white">
                  tourists_spot_name
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="tourists_spot_name"
                  name="tourists_spot_name"
                />

                <label className="block mt-4 mb-2 dark:text-white">
                  seasonality
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="seasonality"
                  name="seasonality"
                />

                <label className="block mt-4 mb-2 dark:text-white">
                  location
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="location"
                  name="location"
                />
              </div>
              {/* Right side */}
              <div className="flex-1">
                <label className="block mb-2 dark:text-white">Email</label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                />
                <label className="block mb-2 mt-4 dark:text-white">
                  User Name
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="user Name"
                  id="type"
                  name="userName"
                />

                <label className="block mt-4 mb-2 dark:text-white">
                  total Visitors PerYear
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="number"
                  placeholder="total Visitors PerYear"
                  name="totaVisitorsPerYear"
                />
                <label className="block mt-4 mb-2 dark:text-white">
                  travel_time
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="travel_time"
                  name="travel_time"
                />
                <label className="block mt-4 mb-2 dark:text-white">
                  average_cost
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="number"
                  placeholder="average_cost"
                  name="average_cost"
                />
              </div>
            </div>
            <label className="block mt-4 mb-2 dark:text-white">
              short description
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="description"
              name="description"
            />
            <input
              className="px-4 w-full py-4 mt-4 rounded hover:bg-[#ec0a4a]  bg-purple-600 duration-200 text-white cursor-pointer font-semibold"
              type="submit"
              value="Add Tourists Sport"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTouristSport;
