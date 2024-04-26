import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Card from "../../Components/Cards/Card";

const Home = () => {
  const touristData = useLoaderData();
  console.log(touristData);
  const items = touristData.slice(0,6);
  console.log(items);
  return (
    <div className="min-h-[calc(100vh-250px)] px-5">
      <div className="">
        <Header></Header>
      </div>
      <div className="my-10">
        <h2 className="text-4xl my-5 text-center">
          Tourists Spots : {touristData.length}
        </h2>
        <p className="text-center">
          A tourist spot, also referred to as a tourist attraction or
          destination, is a discernible geographical location or site that has
          been intentionally developed or preserved for the purpose of
          attracting and accommodating tourists. These spots possess distinctive
          characteristics or features that make them notable, appealing, and
          worthy of visitation.Tourist spots encompass a diverse range of
          places, including natural wonders, cultural and historical landmarks,
          architectural marvels, recreational facilities, and entertainment
          venues. They often exhibit a combination of tangible and intangible
          attributes that contribute to their attractiveness, such as scenic
          beauty, historical significance, cultural heritage, unique ecosystems,
          or opportunities for leisure and adventure activities.
          <br />
        </p>
        <p className="text-blue-600 text-2xl text-center my-6">
          leTs go to Top Six Tourist Spots in the World.........{" "}
        </p>
      </div>
     <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        
     {
        
        items.map(data=><Card key={data._id} data={data}></Card> )
      }
     </div>
    </div>
  );
};

export default Home;
