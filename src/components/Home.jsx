/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import mainimage2 from "/Users/decagon/mozisha2/mozisha-website/src/assets/portrait-two-creative-colleagues-using-laptop-discuss-work-project-office-ai-generated_773922-2249.jpeg";
import { useEffect } from "react";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Testimonial from "./Testimonial";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import { Link, } from "react-router-dom";
import Video from "./Video";
function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
 
  
  return (
    <>
      <div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="flex justify-between items-center gap-16 leading-8  max-w-[1240px] mx-auto flex-col lg:flex-row px-4">
          <div data-aos-duration="2000" data-aos="fade-up">
            <h1 className="md:text-6xl text-4xl leading-[60px] font-bold md:leading-[80px] flex items-center justify-center  text-gray-700   md:text-start  ">
              Unlocking African Talent for Global Success
            </h1>
            <p className=" mt-8 text-[18px] text-gray-500 md:text-start ">
              Welcome to Mozisha, Your Gateway to Premium Talent to Supercharge
              Your Business Growth.{" "}
            </p>
            <div className="flex flex-col lg:flex-row mt-16   md:gap-8">
              {" "}
             
              <div>
                <button className="bg-purple-700 text-white rounded-md md:px-4 md:py-2 py-2 hover:bg-purple-100 mb-4 hover:text-purple-800 hover:font-bold w-full">
                <Link to="business"> For Businesses</Link>
                </button>
                <p className="text-sm text-center mb-16">Boost your Business with Top Talents</p>
              </div>
              <div>
                <button className="bg-purple-700 text-white rounded-md md:px-4 md:py-2 py-2 hover:bg-purple-100 mb-4 hover:text-purple-800 hover:font-bold w-full">
                  For Talents
                </button>
                <p className="text-sm text-center mb-16">Access In-Demand Skills and Jobs</p>
              </div>
              <div>
                <button className="bg-purple-700 text-white rounded-md md:px-4 md:py-2 py-2 hover:bg-purple-100 mb-4 hover:text-purple-800 hover:font-bold md:w-full justify-center items-center w-full">
                  For Mentors
                </button>
                <p className="text-sm text-center mb-16">Guide Emerging Talent to Success</p> 
              </div>
            </div>
          </div>
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="h-[600px] ">
            <img
              data-aos-duration="2000"
              data-aos="zoom-in"
              src={mainimage2}
              alt="main photo"
              className="rounded-lg h-[400px] md:h-full md:px-0  object-cover px-6"
            />
          </div>
        </div>
        <p className="mx-auto max-w-[1240px] text-gray-500 ml-28 mb-8 md:my-8">
        {/* Join other VC backed start-ups  to experience exponential growth. */}
        </p>
      </div>
      <Hero />
      <HowItWorks />
      <Testimonial />
      <Video />
      <FrequentlyAskedQuestions />
    </>
  );
}

export default Home;
