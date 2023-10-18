import business from "../assets/handshake2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import BusinessForm from "./BusinessForm";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
function Business()
{
  useEffect(() => {
  AOS.init();
    AOS.refresh();
    
}, []);  const [isHovered, setIsHovered] = useState(false);

const handleMouseEnter = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
};
  return (
    <div  data-aos-duration="2000"
              data-aos="fade-up" className=" "> <div
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
      <h1  data-aos-duration="2000"
              data-aos="fade-up" className="text-center  text-3xl md:text-4xl font-bold">
        Mozisha, Your Growth Partner
      </h1>

      <div  data-aos-duration="2000"
              data-aos="fade-up">
        <img
          src={business}
          alt=""
          className=" mx-auto rounded-md w-[800px] py-16  px-4 my-8"
        />
        <p  data-aos-duration="2000"
              data-aos="fade-up" className="py-4 leading-8 px-4 md:px-16">
          Join other VC-backed companies supported by Mozisha. As your trusted
          growth partner, we specialize in providing top-notch operations,
          sales, marketing and customer support talents tailored to your unique
          needs. We also provide data and technology talents Our commitment is to empower your business with  strategic
          resources for accelerated growth.
        </p>
      </div>

     

      <div   className="max-w-[1000px] mx-auto px-8 h-full pb-48 shadow-2xl mb-44">
        <h3 className="text-purple-800 leading-8 text-center  mt-20">
          Fill out the form below and let Mozisha be the driving force behind
          your success.
        </h3>

        <BusinessForm />
      </div>
    </div>
  );
}

export default Business;
