import PageTitle from "../../pages/MyLIst/PageTitle";

const MyListedForm = ({info}) => {
    const {
        image,
        _id,
        country_Name,
        tourists_spot_name,
    
        location,
    
        totaVisitorsPerYear,
    
        average_cost,
        description,
      } = info;
    return (
        <div>
            <PageTitle title={"My List | MY dream Country"}></PageTitle>
        {/* <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th className="font-bold text-xl text-start underline">NO</th>
                <th className="font-bold text-xl text-start underline">
                  Email{" "}
                </th>
                <th className="font-bold text-xl text-start underline">
                  User Name
                </th>
                <th className="font-bold text-xl text-start underline">
                  Country
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
              <tr>
                <th>1</th>
                <td></td>
                <td>Quality Control Specialist</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>Canada</td>
                <td>12/16/2020</td>
                <td>Blue</td>
              </tr>
             
            </tbody>
          </table>
        </div> */}
      </div>
    );
};

export default MyListedForm;