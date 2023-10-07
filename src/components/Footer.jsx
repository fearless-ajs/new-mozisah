/* eslint-disable react/jsx-no-target-blank */
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
      <div   className="md:w-1/2">
        <img src={img} alt="" />
      </div>{" "}
      <div data-aos-duration="1000" data-aos="fade-up">
        <h6 className="font-semibold text-3xl pt-8">About Mozisha</h6>
        <p>Why Mozisha</p>
        <p>Roles and Pricing</p>
        <p>Careers</p>
        <p className="mt-8">Terms of Use</p>
        <p>Privacy Policy</p>
      </div>

      <div data-aos-duration="1000" data-aos="fade-up" >
        <h6 data-aos-duration="1000" data-aos="fade-up"  className="font-semibold text-3xl pt-8">Contact Us</h6>
        <span data-aos-duration="2000" data-aos="fade-up" >info@mozisha.com</span>{" "}
        <div className="text-3xl flex gap-4 mt-36">
       <a href="https://www.instagram.com/mozishaorg/" target="_blank"><FaInstagram  data-aos="zoom-in" className="hover:text-purple-500"/></a> 
       <a href="https://web.facebook.com/mozishaafrica/?_rdc=1&_rdr" target="_blank"><FaFacebook  data-aos="zoom-in" className="hover:text-purple-500"/></a> 
        <a href="https://www.linkedin.com/company/mozisha/?originalSubdomain=ng" target="_blank">
  <FaLinkedin data-aos="zoom-in" className="hover:text-purple-500" />
</a>
        <FaWhatsapp  data-aos="zoom-in" className="hover:text-purple-500"/>
       <a href="https://twitter.com/MozishaOrg" target="_blank"><FaTwitter  data-aos="zoom-in" className="hover:text-purple-500"/></a> 
      </div>
       
      </div>
    </div>
  );
}

export default Footer;
