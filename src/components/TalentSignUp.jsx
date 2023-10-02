import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TalentSignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted with data:', { firstName, lastName, email, password });
  };const navigate = useNavigate();

  const handleSignUp = () => {
    // Navigate to the login page when signup is clicked
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto h-screen  mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Talent Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-medium">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-medium">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-purple-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-purple-500"
            required
          />
        </div>
        <div className="flex justify-center">
          <button onClick={handleSignUp}
            type="submit"
            className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 focus:outline-none"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default TalentSignUp;
