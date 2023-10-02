import { GrStatusGood } from 'react-icons/gr'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AiOutlineCheck } from 'react-icons/ai';
function Pricing() { useEffect(() => {
  AOS.init();
  AOS.refresh();
}, []);
  return (
    <div      data-aos-duration="2000"
          data-aos="fade-up" className='md:px-40 '>
      <h2 className="text-center font-bold text-4xl my-16">Simple pricing, unbeatable value</h2>
      <div      data-aos-duration="2000"
          data-aos="fade-up" className="flex flex-col md:flex-row md:items-center">

      <div      data-aos-duration="2000"
          data-aos="fade-up" className="bg-purple-300  h-fit leading-8 m mx-8 rounded-md md:w-1/2 p-8">
        <h3 className="text-center pt-8 text-3xl">$2000</h3>
        <p className="text-sm text-center mt-4">per month</p>
          <button className='mt-8 bg-purple-600 py-2 px-10 rounded-md text-purple-200 mx-auto w-full'>Get Started</button>      </div>
        <div      data-aos-duration="2000"
          data-aos="fade-up" className="px-8 py-16 w-full">
          <ul className='leading-8'>
            <li className='flex gap-4 items-center'><span className='text-2xl '> <AiOutlineCheck className='text-purple-400'/> </span> Elite Growth Marketing talent from all around the world</li>
            <li className='flex gap-4 items-center'><span className='text-2xl '> <AiOutlineCheck className='text-purple-400'/> </span> Full-time team member (40 hours per week)
</li>
            <li className='flex gap-4 items-center'><span className='text-2xl '> <AiOutlineCheck className='text-purple-400'/> </span> Working alongside you during your normal working hours
</li>
            <li className='flex gap-4 items-center'><span className='text-2xl '> <AiOutlineCheck className='text-purple-400'/> </span> A perfect fit: We find the perfect candidate for you</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pricing
