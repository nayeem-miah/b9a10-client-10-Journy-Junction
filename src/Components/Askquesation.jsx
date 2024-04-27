/* eslint-disable react/no-unescaped-entities */
import img from "../assets/ask.jpg";
const Askquesation = () => {
  return (
    <div className="grid grid-cols-2 gap-6 my-10">
      <div>
        <img src={img} className="rounded" alt="" />
      </div>
      <div className="space-y-6">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            How can our tourism management website stand out from competitors?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              tabIndex={0} To stand out from competitors, we All focus on
              creating a visually appealing website with stunning imagery and
              engaging content that highlights the unique aspects of your
              destination. We all also prioritize user experience, ensuring easy
              navigation, quick booking processes, and personalized
              recommendations to enhance visitor satisfaction.
            </p>
          </div>
          {/*  */}
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
          How will the website attract more tourists to our destination?
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} The website will feature comprehensive destination pages with detailed information about attractions, activities, and travel tips to inspire and inform potential tourists. Additionally, we all implement effective SEO strategies to improve search engine visibility, run targeted digital marketing campaign</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
          Can the website accommodate different types of travelers with varying interests and budgets?
          </div>
          <div className="collapse-content">
            <p>tabIndex={0}: Absolutely. We all design the website to offer a diverse range of tour packages catering to different traveler preferences, whether they are seeking adventure, cultural experiences, relaxation, or family-friendly activities. Each package will be customizable, allowing travelers to tailor their itineraries based on their interests and budget constraints.</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
          How secure will the booking and payment process be for our customers?
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} Security is a top priority. We all integrate a secure payment gateway to facilitate safe transactions, encrypt sensitive information to protect user data, and implement industry-standard security measures to prevent unauthorized access. Additionally, we all provide clear and transparent booking terms and conditions to reassure customers of their privacy and security.</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
          How will the website engage and retain customers after their initial visit?
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} To engage and retain customers, we'll implement features such as personalized recommendations based on past bookings and preferences, a blog or news section with regularly updated content to keep users informed and entertained, and email marketing campaigns to nurture relationships and encourage repeat bookings. We all also gather feedback through surveys and reviews to continuously improve the user experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Askquesation;
