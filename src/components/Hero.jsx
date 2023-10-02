/* eslint-disable react/no-unescaped-entities */
import { RxEnter } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";
// import African from "../assets/African.jpg";
import GroupImg from "../assets/group.jpg";
import group1 from "../assets/group.webp";
import group3 from "../assets/group3.jpg";
import workers1 from "../assets/workers1.jpg";
import { HiOutlineUserGroup } from "react-icons/hi";
import {
  AiOutlineFieldTime,
  AiOutlineTeam,
  AiTwotoneApi,
} from "react-icons/ai";
import { GiWireframeGlobe } from "react-icons/gi";
import { MdSchool, MdWavingHand } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { useEffect } from "react";
function Hero() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        data-aos-duration="2000"
        data-aos="fade-up"
        className=" bg-purple-200 ">
        <h2 className="font-bold text-center text-3xl pt-24 md:text-4xl mb-12">
          The support your team needs to unlock Growth
        </h2>
        <div
          data-aos-duration="2000"
          className="md:w-[600px] mx-auto "
          data-aos="fade-up">
          <p
            className="text-center text-gray-500 px-4  leading-8"
            data-aos="fade-up">
            From VC-backed startups to agencies to fast growing D2C brands – all
            use Mozisha to leverage global remote talent
          </p>
        </div>
        <div
          data-aos-duration="2000"
          className="flex max-w-[1240px] items-center justify-center gap-12 md:flex-row flex-col mt-12 mx-auto px-6 md:px-0"
          data-aos="fade-up">
          <div
            data-aos-duration="2000"
            className="bg-white  shadow-xl p-8 rounded-md w-full">
            <p className="py-2 px-6 bg-purple-300 font-bold rounded-md w-fit">
              BETTER TALENT
            </p>
            <p className="text-2xl mt-4" data-aos="fade-up">
              Top 1%
            </p>
            <p className="leading-8 text-gray-500 mb-4 " data-aos="fade-up">
              We exclusively welcome the most exceptional candidates in Mozisha
            </p>
            <div
              data-aos-duration="2000"
              className="flex gap-4 justify-center items-center"
              data-aos="fade-up">
              <span className="leading-8 text-purple-500 mb-4">
                <RxEnter />
              </span>
              <p className="leading-8 text-gray-500 mb-4" data-aos="fade-up">
                Furthermore, we tailor each role meticulously according to your
                specific requirements.{" "}
              </p>
            </div>
            <button
              className="mt-8 bg-purple-600 py-2 px-10 rounded-md text-purple-200 mx-auto"
              data-aos="fade-up">
              Get Started
            </button>
          </div>
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="bg-white  shadow-xl p-8 rounded-md w-full">
            <p
              className="py-2 px-6 bg-purple-300 font-bold rounded-md w-fit"
              data-aos="fade-up">
              FAST HIRING
            </p>
            <p data-aos="fade-up" className="text-2xl mt-4">
              Save over 70%
            </p>
            <p className="leading-8 text-gray-500 mb-4">
              Using Mozisha compared to entry-level US talent
            </p>
            <div
              data-aos-duration="2000"
              data-aos="fade-up"
              className="flex gap-4 justify-center items-center">
              <span
                data-aos="fade-up"
                className="leading-8 text-text-500  mb-4">
                <RxEnter />
              </span>
              <p data-aos="fade-up" className="leading-8 text-gray-500 mb-4">
                Simple pricing: most roles are just $3,000 per month
              </p>
            </div>
            <button
              data-aos="fade-up"
              className="mt-8 bg-purple-600 py-2 px-10 rounded-md text-purple-200 mx-auto">
              Get Started
            </button>
          </div>
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="bg-white  shadow-xl p-8   rounded-md w-full">
            <p
              data-aos="fade-up"
              className="py-2 px-6 bg-purple-300 font-bold rounded-md w-fit">
              LOWER COST
            </p>
            <p data-aos="fade-up" className="text-2xl mt-4">
              Hire within days
            </p>
            <p data-aos="fade-up" className="leading-8 text-gray-500 mb-4">
              We will identify and position your dedicated assistant within
              approximately two weeks.
            </p>
            <div
              data-aos-duration="2000"
              data-aos="fade-up"
              className="flex gap-4 justify-center items-center">
              <span className="leading-8 text-purple-500 mb-4">
                <RxEnter />
              </span>
              <p data-aos="fade-up" className="leading-8 text-gray-500 mb-4">
                All of the sourcing, interviewing and vetting process is done
                for you
              </p>
            </div>
            <button
              data-aos="fade-up"
              className="mt-8 bg-purple-600 py-2 px-10 rounded-md text-purple-200 mx-auto">
              Get Started
            </button>
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="h-full bg-white py-16  mt-24">
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="max-w-[1240px] mx-auto flex flex-col md:flex-row px-4">
            <div
              data-aos-duration="2000"
              data-aos="fade-up"
              className="mx-auto px-4">
              <h3 className="text-start mb-6 text-3xl md:text-4xl">
                The Secret to Success? Our "integrate" model.
              </h3>
              <p>
                We don't just offer talent; we seamlessly integrate a new team
                member into your company.
              </p>
              <div
                data-aos-duration="2000"
                data-aos="fade-up"
                className="grid md:grid-cols-2  gap-8 mt-8 flex-col md:flex-row">
                <div data-aos-duration="2000" data-aos="fade-up">
                  <span className="text-purple-600 text-6xl ">
                    <AiOutlineFieldTime />
                  </span>
                  <p className=" text-2xl my-2 ">As a “normal” team member</p>
                  <p className="text-gray-500 leading-8">
                  Grant them access to your company email, Slack, Zoom, and other relevant tools. Also, remember to include them in your virtual team gatherings!
                  </p>
                </div>
                <div data-aos-duration="2000" data-aos="fade-up">
                  <span className="text-purple-600 text-6xl ">
                    <GiWireframeGlobe />
                  </span>
                  <p className=" text-2xl my-2 ">According to your time zone.




</p>
                  <p className="text-gray-500 leading-8">
                  They operate during your standard business hours, regardless of the time zone difference.
                  </p>
                </div>
              </div>
              <div
                data-aos-duration="2000"
                data-aos="fade-up"
                className="grid md:grid-cols-2 gap-8 mt-8 flex-col md:flex-row">
                <div data-aos-duration="2000" data-aos="fade-up">
                  <span className="text-purple-600 text-6xl ">
                    <MdWavingHand />
                  </span>
                  <p className=" text-2xl my-2 ">Full Time</p>
                  <p className="text-gray-500 leading-8">
                  Our skilled professionals work full-time, dedicating 40 hours a week exclusively to your tasks and projects.
                  </p>
                </div>
                <div data-aos-duration="2000" data-aos="fade-up">
                  <span className="text-purple-600 text-6xl ">
                    <FaRegHandshake />
                  </span>
                  <p className=" text-2xl my-2 ">
                    With plenty of support to get it right
                  </p>
                  <p className="text-gray-500 leading-8">
                  Engaging global talent can seem daunting at first, but we're here to support you continuously, without any restrictions. Our success is intertwined with yours; we only consider it a win when you succeed.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos-duration="2000" data-aos="fade-up">
              <img
                data-aos-duration="2000"
                data-aos="zoom-in"
                src={GroupImg}
                alt=""
                className="h-full w-screen object-cover"
              />
            </div>
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="bg-purple-400 py-16 px-8">
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="bg-white p-8 text-center  font-semibold">
            <h2 className="text-2xl">
            Allow us to assist you in taking the first step with our recruitment proficiency.
            </h2>
            <button className="mt-8 bg-purple-600 py-2 px-10 rounded-md text-purple-200 mx-auto">
            Enroll in the waitlist.            </button>{" "}
          </div>
        </div>
      </div>{" "}
      <div
        data-aos-duration="2000"
        data-aos="fade-up"
        className="bg-purple-50 ">
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="py-16 px-4  leading-8 md:px-10 md:max-w-[1000px] text-start">
          <h5 className="text-3xl font-semibold pb-4">
            Mozisha is the unfair advantage to scale faster
          </h5>
          <p>
          Exceptional talents can truly excel when they have the necessary time to dedicate to their tasks. 
            <br /> We alleviate them from routine responsibilities, allowing them to focus more on strategic initiatives and making a significant impact. <br /> Delegate all your manual and repetitive tasks related to campaign management, design, and reporting to our skilled personnel, freeing up valuable time for your team.
          </p>
        </div>

        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="md:flex md:flex-row gap-36 md:px-36 my-36">
          <div data-aos-duration="2000" data-aos="fade-up">
            <img
              data-aos-duration="2000"
              data-aos="zoom-in"
              src={group1}
              alt=""
              className="w-[800px]"
            />
          </div>
          <div data-aos-duration="2000" data-aos="fade-up" className="px-4">
            <span
              data-aos-duration="2000"
              data-aos="fade-up"
              className="text-3xl md:text-4xl text-purple-600">
              <AiOutlineTeam className="my-4" />
            </span>
            <span
              data-aos-duration="2000"
              data-aos="fade-up"
              className="text-2xl font-semibold">
              Top 1% Talent
            </span>
            <p
              data-aos-duration="2000"
              data-aos="fade-up"
              className="leading-8 max-w-[500px] my-6">
              We select just 1 candidate out of every 400 applicants, ensuring that you collaborate with the most outstanding offshore talent available. Our selection process is even more competitive than gaining admission to Harvard!
            </p>
            <span
              data-aos-duration="2000"
              data-aos="fade-up"
              className="font-semibold ">
              Work with the best of the best &rarr;
            </span>
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="md:flex md:flex-row gap-36 md:px-36 my-36">
          <div data-aos-duration="2000" data-aos="fade-up">
            <img
              data-aos-duration="2000"
              data-aos="zoom-in"
              src={workers1}
              alt=""
              className="w-[800px]"
            />
          </div>
          <div data-aos-duration="2000" data-aos="fade-up" className="px-4">
            <span
              data-aos-duration="2000"
              data-aos="fade-up"
              className="text-3xl md:text-4xl text-purple-600">
              <AiTwotoneApi className="my-4" />
            </span>
            <span
              data-aos-duration="2000"
              data-aos="fade-up"
              className="text-2xl font-semibold">
              Perfect Match
            </span>
            <p
              data-aos-duration="2000"
              data-aos="fade-up"
              className="leading-8 max-w-[500px] my-6">
             We identify the ideal candidate for you. Each team member is sourced to align with your specific requirements.





            </p>
            <span
              data-aos-duration="2000"
              data-aos="fade-up"
              className="font-semibold ">
              The perfect candidate for you &rarr;
            </span>
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="md:flex md:flex-row gap-36 md:px-36 my-36">
          <div data-aos-duration="2000" data-aos="fade-up">
            <img
              data-aos-duration="2000"
              data-aos="zoom-in"
              src={group3}
              alt=""
              className="w-[800px]"
            />
          </div>
          <div data-aos-duration="2000" data-aos="fade-up" className="px-4">
            <span
              data-aos-duration="2000"
              data-aos="fade-up"
              className="text-3xl  md:text-4xl text-purple-600">
              <MdSchool className="my-4" />
            </span>
            <span
              data-aos-duration="2000"
              data-aos="fade-up"
              className="text-2xl font-semibold">
              Plug & Play
            </span>
            <p
              data-aos-duration="2000"
              data-aos="fade-up"
              className="leading-8 max-w-[500px] my-6">
             Every team member is prepared to deliver results. They are all university graduates, highly proficient in English, and possess extensive, relevant work experience.
            </p>
            <span
              data-aos-duration="2000"
              data-aos="fade-up"
              className="font-semibold ">
              The perfect candidate for you &rarr;
            </span>
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="md:flex md:flex-row gap-36 md:px-36 my-36">
          <div data-aos-duration="2000" data-aos="fade-up">
            <img
              data-aos-duration="2000"
              data-aos="zoom-in"
              src={group3}
              alt=""
              className="w-[800px]"
            />
          </div>
          <div data-aos-duration="2000" data-aos="fade-up" className="px-4">
            <span
              data-aos-duration="2000"
              data-aos="fade-up"
              className="text-3xl  md:text-4xl text-purple-600">
              <HiOutlineUserGroup className="my-4" />
            </span>
            <span
              data-aos-duration="2000"
              data-aos="fade-up"
              className="text-2xl font-semibold">
              Ready to Scale
            </span>
            <p
              data-aos-duration="2000"
              data-aos="fade-up"
              className="leading-8 max-w-[500px] my-6">
              Whether you require 2 or 20 team members, we are here to support you. Many of our clients utilize multiple professionals across various departments.
            </p>
            <span
              data-aos-duration="2000"
              data-aos="fade-up"
              className="font-semibold ">
              Scale with Mozisha &rarr;
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
