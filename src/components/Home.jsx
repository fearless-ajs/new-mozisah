/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";

import mainimage2 from "/Users/decagon/mozisha2/mozisha-website/src/assets/portrait-two-creative-colleagues-using-laptop-discuss-work-project-office-ai-generated_773922-2249.jpeg";
import { useEffect } from "react";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import {  useNavigate } from "react-router-dom";
function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };
  return (
    <>
      <div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="flex justify-between items-center gap-16 leading-8  max-w-[1240px] mx-auto flex-col md:flex-row px-4">
          <div data-aos-duration="2000" data-aos="fade-up">
            <h1 className="md:text-6xl text-4xl leading-[60px] font-bold md:leading-[80px] flex items-center justify-center  text-gray-700   md:text-start  ">
              Unlocking African Talent for Global Success
            </h1>
            <p className=" mt-8 text-[18px] text-gray-500 md:text-start ">
              Welcome to Mozisha, a platform where Africa's brightest talents
              unite to empower global businesses. We specialize in providing
              efficient outsourcing solutions to elevate your startup's
              potential.
            </p>
            <div className="flex flex-col md:flex-row mt-16 gap-4  md:gap-12">
              <button onClick={handleSignUp} className="bg-purple-700 text-white rounded-md md:px-8 md:py-2 py-2 hover:bg-purple-100 hover:text-purple-800 hover:font-bold">
             
                  For Talents
                
              </button>

              <button className="bg-purple-700 text-white rounded-md md:px-8 md:py-2 py-2 hover:bg-purple-100 hover:text-purple-800 hover:font-bold">
                For Businesses
              </button>
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
        <p className="mx-auto max-w-[1240px] text-gray-500 mb-8 md:my-8">
          Trusted by 100+ customers to fuel business growth
        </p>
      </div>
      <Hero />
      <HowItWorks />
      <Pricing />
      <Testimonial />
      <FrequentlyAskedQuestions />
    </>
  );
}

export default Home;
