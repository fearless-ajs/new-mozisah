import { NavLink } from "react-router-dom";
function ErrorPage() {
  return (
    <div>
      <>
        <NavLink >
          <li>Error! Go Back to Home Page!</li>
        </NavLink>
      </>
      <button to="/home">
        <NavLink to={'home'}>Go Home</NavLink>
      </button>
    </div>
  );
}

export default ErrorPage;
