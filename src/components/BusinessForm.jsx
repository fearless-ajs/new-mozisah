import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const BusinessForm = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    talentRequirements: "",
    otherRequirements: "",
    numberOfTalents: 1,
    startDate: new Date(),
  });

  const talentOptions = [
    "Administrative",
    "Data",
    "Sales",
    "Marketing",
    "Customer Service",
    "Technology",
    "Others",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  const url = "https://mozisha-47b2f-default-rtdb.firebaseio.com/talents.json";

  const formDataToSave = {
    name: formData.name,
    companyName: formData.companyName,
    email: formData.email,
    talentRequirements: formData.talentRequirements,
    otherRequirements: formData.talentRequirements === "Others" ? formData.otherRequirements : "",
    numberOfTalents: formData.numberOfTalents,
    startDate: formData.startDate.toISOString(),
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataToSave),
    });

    if (response.ok) {
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 3000, // Close the toast after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      // Optionally, you can perform the redirection here.
    } else {
      console.error("Data could not be saved.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
    // Optionally, you can reset the form after submission
    setFormData({
      name: "",
      companyName: "",
      email: "",
      talentRequirements: "",
      otherRequirements: "",
      numberOfTalents: 1,
      startDate: new Date(),
    });
  };

  return (


    <div className="mt-4 md:mt-8 h-screen ">
      <h2 className="font-bold text-2xl text-center my-8">
        Talent Request Form
      </h2>
      <form className="leading-10 h-full md:px-16 ">
        <div>
          <label className="font-bold mr-8">Name:</label>
          <input
            className="border w-full px-4"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mt-4 md:mt-8">
          <label className="font-bold mr-8">Company Name:</label>
          <input
            className="border w-full px-4"
            type="text"
            name="companyName"
            placeholder="Enter your company name"
            value={formData.companyName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mt-4 md:mt-8">
          <label className="font-bold mr-8">Email:</label>
          <input
            className="border w-full px-4"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mt-4 md:mt-8">
          <label className="font-bold mr-8 w-full">Talent Requirements:</label>
          <select
            className="border py-4 px-4 w-full"
            name="talentRequirements"
            value={formData.talentRequirements}
            onChange={handleInputChange}
          >
            <option value="">Select a talent requirement</option>
            {talentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {formData.talentRequirements === "Others" && (
          <div className="mt-4 md:mt-8">
            <label className="font-bold mr-8">Other Requirements:</label>
            <textarea
              className="border w-full px-4"
              name="otherRequirements"
              placeholder="Enter your other requirements"
              value={formData.otherRequirements}
              onChange={handleInputChange}
            />
          </div>
        )}
        <div className="mt-4 md:mt-8">
          <label className="font-bold mr-8">Number of Talents Needed:</label>
          <input
            className="border pl-4"
            type="number"
            name="numberOfTalents"
            placeholder="1"
            value={formData.numberOfTalents}
            onChange={handleInputChange}
            min="1"
            max="10"
          />
        </div>
        <div className="mt-4 md:mt-8">
          <label className="font-bold mr-8">
            Preferred Start Date for Talents:
          </label>
          <DatePicker
            selected={formData.startDate}
            onChange={(date) => setFormData({ ...formData, startDate: date })}
            className="w-full border px-4"
          />
        </div>
        <div className="mt-4 md:mt-8 mb-44">
          <button
            onClick={handleSubmit}
            className="bg-purple-700 text-white rounded-md md:px-4 md:py-2 py-2  hover:bg-purple-100 mb-4 hover:text-purple-800 hover:font-bold md:w-full justify-center items-center w-full "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessForm;
