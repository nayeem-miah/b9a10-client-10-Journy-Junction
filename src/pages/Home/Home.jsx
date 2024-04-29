import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Card from "../../Components/Cards/Card";
import Askquesation from "../../Components/Askquesation";
import PageTitle from "../MyLIst/PageTitle";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const touristData = useLoaderData();
  // console.log(touristData);
  const items = touristData.slice(0,6);
  // console.log(items);
  return (
    <div className="min-h-[calc(100vh-250px)] px-5">
        <PageTitle title={'Home page | MY dream Country'}></PageTitle>
      <div className="">
        <Header></Header>
      </div>
      <div className="my-10">
        <h2 className="text-4xl my-5 text-center">
          Tourists Spots 
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
        <Typewriter
                  words={['leTs go to Top Six Tourist Spots in the World.........', 'leTs go to Top Six Tourist Spots in the World.........' ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  // onLoopDone={handleDone}
                  // onType={handleType}
                />
        </p>
      </div>
     <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        
     {
        
        items.map(data=><Card key={data._id} data={data}></Card> )
      }
     </div>
   <div className="my-10 py-4 px-2 rounded-lg bg-slate-700">
   <h2 className='text-4xl text-center my-5'>Asking Question ?</h2>
   <Askquesation></Askquesation>
   </div>
    </div>
  );
};

export default Home;
