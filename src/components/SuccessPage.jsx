import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import welcome from "../assets/welcome.jpeg";
const SuccessPage = () => {
  
  return (
    <div className="bg-green-50 h-screen my-20">
      <h2 className="text-center text-3xl font-bold text-green-500 py-16">
        Thank you for your submission🤝
      </h2>
      <div className="px-4  object-cover max-w-[500px] rounded-lg mb-8 mx-auto">
        <img src={welcome} alt="welcome" />
      </div>
      <p className="text-purple-600 text-center  font-extrabold">
        We&apos;ll be in touch within the next six hours.
      </p>
      <div className="mx-auto">
        <button className="mt-8 bg-purple-600 w-full md:w-fit  py-2 px-10 rounded-md text-purple-200 ">
          <Link to={"/"}>Back to Homepage </Link>
        </button>{" "}
      </div>
    </div>
  );
};

export default SuccessPage;
