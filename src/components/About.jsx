import img2 from "../assets/group3.jpg";
import img3 from "../assets/pexels.jpg";
import img4 from "../assets/united.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Team from "./Team";
import { FaWhatsapp } from "react-icons/fa";
function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div data-aos-duration="2000" data-aos="fade-up" className="md:p-20 p-8"> <div
    className="fixed top-[80%] md:right-16 right-4 z-40"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
    <a href="https://wa.me/+27824277902" target="_blank" rel="noreferrer">
      <div className="relative">
        <FaWhatsapp
          data-aos="zoom-in"
          className="hover:text-green-500 w-8 h-8 text-green-600 font-extrabold cursor-pointer"
        />
        {isHovered && (
          <div className="absolute text-[10px] text-black mb-4 rounded-md  bottom-full">
            Contact us now!
          </div>
        )}
      </div>
    </a>
  </div>
      <h1
        data-aos-duration="2000"
        data-aos="fade-up"
        className="text-4xl font-bold text-center">
        Our Mission
      </h1>
      <p
        data-aos-duration="2000"
        data-aos="fade-up"
        className="md:px-8 leading-8 py-8">
        At Mozisha, our mission is clear: to nurture premium African talents and
        connect them with businesses worldwide. We work to address the challenge
        of skills mismatch by equipping young Africans with in-demand skills
        through our innovative practice-based training model. Mozisha also
        collaborates with global businesses to facilitate access to employment
        opportunities. Through these partnerships, we aim to help companies
        scale efficiently while tackling the problem of youth unemployment in
        Africa. Mozisha provides top-notch outsourcing solutions for business
        growth.
      </p>

      <div
        data-aos-duration="2000"
        data-aos="fade-up"
        className="flex flex-col md:flex-row gap-4 md:gap-24 my-24 items-center">
        <div data-aos-duration="2000" data-aos="fade-up" className="md:w-1/2 ">
          <img src={img4} alt="" className="rounded-md " />
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="md:w-1/2 leading-8">
          <h1 className="text-center py-8 font-bold text-2xl">
            Enrich Your Diversity
          </h1>
          <p data-aos-duration="2000" data-aos="fade-up">
            We pride ourselves in the rich diversity of our talents. Mozishans
            come from over 50 countries, 3000 ethnic groups, and 2100 languages
            in Africa. We also ensure that at least 50% of all our talents are
            women. By partnering with Mozisha, you are sure to significantly
            enhance diversity, equity and inclusion in your organization
          </p>
        </div>
      </div>
      <div
        data-aos-duration="2000"
        data-aos="fade-up"
        className="flex items-center flex-col md:flex-row-reverse pt-20 gap-4 md:gap-24 my-24">
        <div data-aos-duration="2000" data-aos="fade-up" className="md:w-1/2 ">
          <img src={img2} alt="" className="rounded-md" />
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="md:w-1/2 leading-8">
          <h1 className="text-center py-8 font-bold text-2xl">
            Unique Training Model
          </h1>
          <p>
            Mozisha leverges a combination of study and on the job learning to
            nurture its talents. Through our partnership with businesses around
            the world with whom we co-design our courses, we ensure that our
            talents are trained and retrained to meet the demands of the
            constantly changing labour market.
          </p>
        </div>
      </div>
      <div
        data-aos-duration="2000"
        data-aos="fade-up"
        className="flex flex-col items-center md:flex-row pt-20 gap-4 md:gap-24 my-24">
        <div data-aos-duration="2000" data-aos="fade-up" className="md:w-1/2 ">
          <img src={img3} alt="" className="rounded-md" />
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="md:w-1/2 leading-8">
          <h1 className="text-center py-8 font-bold text-2xl">
            A Footprint in Africa.
          </h1>
          <p>
            As the most youthful continent in the world, Africa is poised to be
            the major supplier of human capital in the next few decades. With
            Mozisha’s access to talents from over 50 countries in Africa, we are
            well positioned to help your organization tap into the future of the
            global labour force.
          </p>
        </div>{" "}
       
      </div>
      <Team />
    </div>
  );
}

export default About;
