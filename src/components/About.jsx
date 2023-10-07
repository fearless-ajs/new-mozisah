import img from "../assets/afr.avif";
import img2 from "../assets/9870.jpg";
import img3 from "../assets/pexels.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function About() {useEffect(() => {
  AOS.init();
  AOS.refresh();
}, []);
  return (
    <div  data-aos-duration="2000"
          data-aos="fade-up"  className="md:p-20 p-8">
      <h1 data-aos-duration="2000"
          data-aos="fade-right" className="text-4xl font-bold text-center">Our Mission</h1>
      <p data-aos-duration="2000"
          data-aos="fade-left" className="md:px-8 leading-8 py-8">
        At Mozisha, our mission is clear: to nurture African talent and connect
        them with businesses worldwide. Through these partnerships, we aim to
        help companies scale efficiently while creating opportunities for our
        talented workforce.
      </p>

      <div  data-aos-duration="2000"
          data-aos="fade-right"  className="flex flex-col md:flex-row gap-4 md:gap-24 my-24 "  >
        <div  data-aos-duration="2000"
          data-aos="fade-left"  className="md:w-1/2 ">
          <img src={img} alt="" className="rounded-md "/>
        </div>
        <div  data-aos-duration="2000"
          data-aos="fade-right"  className="md:w-1/2 leading-8">
          <h1 className="text-center py-8 font-bold text-2xl">WHO WE ARE</h1>
          <p  data-aos-duration="2000"
          data-aos="fade-left" >
            We pride ourselves in the rich diversity of our talents. Mozishans
            cut across 54 countries, 3000 ethnic groups, and over 2100 languages
            in Africa. We also ensure that 55% of all our talents are women. By
            partnering with Mozisha, you are sure to significantly enhance
            diversity, equity and inclusion in your organization
          </p>
        </div>
      </div>
      <div  data-aos-duration="2000"
          data-aos="fade-right"  className="flex flex-col md:flex-row-reverse pt-20 gap-4 md:gap-24 my-24">
        <div  data-aos-duration="2000"
          data-aos="fade-up"  className="md:w-1/2 ">
          <img src={img2} alt="" className="rounded-md"/>
        </div>
        <div  data-aos-duration="2000"
          data-aos="fade-left"  className="md:w-1/2 leading-8">
          <h1 className="text-center py-8 font-bold text-2xl">Unique Training Model
</h1>
          <p>
          Mozisha leverges a powerful combination of study and on the job learning to nurture its talent. Through our partnership with businesses around the world with whom we co-design our courses, we ensure that our talents are trained and retrained to meet the demands of the constantly changing labour market.
          </p>
        </div>
      </div>
      <div  data-aos-duration="2000"
          data-aos="fade-up"  className="flex flex-col md:flex-row pt-20 gap-4 md:gap-24 my-24">
        <div  data-aos-duration="2000"
          data-aos="fade-right"  className="md:w-1/2 ">
          <img src={img3} alt="" className="rounded-md"/>
        </div>
        <div  data-aos-duration="2000"
          data-aos="fade-up"  className="md:w-1/2 leading-8">
          <h1 className="text-center py-8 font-bold text-2xl">A Footprint in Africa. 
</h1>
          <p>
          As the most youthful continent in the world, Africa is poised to be the major supplier of human capital in the next few decades. With Mozisha’s access to talents from the 54 countries in Africa, we are well positioned to help your organization tap into the future of the global labour force.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
