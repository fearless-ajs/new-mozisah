import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import img from "../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Footer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div  className="p-8 flex flex-col md:flex-row bg-purple-950 text-white gap-[5rem] leading-10 md:items-start">
      <div data-aos-duration="2000" data-aos="fade-up"  className="md:w-1/2">
        <img src={img} alt="" />
      </div>{" "}
      <div data-aos-duration="2000" data-aos="fade-up" >
        <h6 className="font-semibold text-3xl pt-8">About Mozisha</h6>
        <p>Why Mozisha</p>
        <p>Roles and Pricing</p>
        <p>Careers</p>
        <p className="mt-8">Terms of Use</p>
        <p>Privacy Policy</p>
      </div>

      <div data-aos-duration="2000" data-aos="fade-up" >
        <h6 data-aos-duration="2000" data-aos="fade-up"  className="font-semibold text-3xl pt-8">Contact Us</h6>
        <span data-aos-duration="2000" data-aos="fade-up" >Mozisha@gmail.com</span>{" "}
        <div className="text-3xl flex gap-4 mt-36">
        <FaInstagram  data-aos="zoom-in" className="hover:text-purple-500"/>
        <FaFacebook  data-aos="zoom-in" className="hover:text-purple-500"/>
        <FaLinkedin  data-aos="zoom-in" className="hover:text-purple-500"/>
        <FaWhatsapp  data-aos="zoom-in" className="hover:text-purple-500"/>
        <FaTwitter  data-aos="zoom-in" className="hover:text-purple-500"/>
      </div>
       
      </div>
    </div>
  );
}

export default Footer;
