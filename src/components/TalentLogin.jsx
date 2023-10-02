import { useState } from "react";

const TalentLogin = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation and submit data to your server here
    console.log(formData); // For demonstration, logging form data
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6 p-6 bg-white rounded-lg shadow-md h-screen">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-purple-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-medium">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-purple-500"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 focus:outline-none"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default TalentLogin;
