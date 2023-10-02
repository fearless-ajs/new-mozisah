/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HowItWorks() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="bg-purple-50 px-8 md:px-36 py-16 ">
      <h2 className="text-4xl my-4 font-semibold" data-aos-duration="2000" data-aos="fade-up">How It Works</h2>
      <p className="max-w-[400px] leading-8" data-aos-duration="2000" data-aos="fade-up">
        When you collaborate with Mozisha, you won't need to review resumes or
        take part in any interviews – we completely handle this process for you!
      </p>

      <div data-aos-duration="2000" data-aos="fade-up">
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="flex flex-col md:grid md:grid-cols-3 md:flex-row gap-16 mt-8">
          <div data-aos-duration="2000" data-aos="fade-up ">
            <span
              data-aos="fade-zoom-in"
              data-aos-duration="2000"
              className="text-9xl text-purple-600 font-extrabold ">
              1
            </span>
            <h6 className="text-3xl font-semibold my-4">Take the survey</h6>
            <p className="leading-8">
            Once you've moved off the waitlist, you'll have a meeting with our team to verify your needs.
            </p>
          </div>
          <div data-aos-duration="2000" data-aos="fade-up">
            <span className="text-9xl text-purple-700 font-extrabold ">2</span>
            <h6 className="text-3xl font-semibold my-4">Recruitment</h6>
            <p className="leading-8">
            We onboard a dedicated assistant tailored to your specific requirements, including working hours, and this process typically takes around 14 days.
            </p>
          </div>
          <div data-aos-duration="2000" data-aos="fade-up">
            <span className="text-9xl text-purple-800 font-extrabold ">3</span>
            <h6 className="text-3xl font-semibold my-4">Meet Your Skilled Personnel</h6>
            <p className="leading-8">
            And let's grow together! Your newly onboarded assistant is seamlessly integrated as a full-time member of your team.
            </p>
          </div>

        </div>
          <button className='mt-8 bg-purple-600 py-2 px-10 rounded-md text-purple-200 mx-auto'>Get Started</button>
      </div>
    </div>
  );
}

export default HowItWorks;
