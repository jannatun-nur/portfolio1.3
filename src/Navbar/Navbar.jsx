import { Link } from "react-router-dom";
import logo from '../../public/assets/images/logo.jpg'

const Navbar = () => {
    const navlinks = (
      <>
        <li className="bg-gray-800 text-white mr-2 px-2 rounded-lg font-serif hover:bg-white hover:text-gray-800">
          <Link to="/">Home</Link>
        </li>

        <button onClick={(e) => {
                    e.preventDefault();
                    const aboutSection = document.getElementById("about");
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                    setTimeout(() => aboutSection.focus(), 300);
                  }} 
        className="bg-gray-800 text-white  mr-2 px-4 py-2 rounded-lg font-serif hover:bg-white hover:text-gray-800">
          About
        </button>
  
  
       <Link to='/contact'>
       <button onClick={(e) => {
                     e.preventDefault();
                     const contSection = document.getElementById("contact");
                     contSection.scrollIntoView({ behavior: "smooth" });
                     setTimeout(() => contSection.focus(), 300);
                   }} 
                  
         className="bg-gray-800 text-white  mr-2  px-4 py-2 rounded-lg font-serif hover:bg-white hover:text-gray-800">
          
          Contact
        </button>
       </Link>
  
        <button
        onClick={(e) => {
          e.preventDefault();
          const projectSection = document.getElementById("projects");
          projectSection.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => projectSection.focus(), 300);
        }} 
        className="bg-gray-800 text-white  mr-2 px-4 py-2 rounded-lg font-serif hover:bg-white hover:text-gray-800">
         Projects
        </button>
      </>
    );
    return (
      <div className=" sticky top-0 z-50  w-12/12 ">
        <div className="navbar  bg-[#303338] rounded-xl ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navlinks}
              </ul>
            </div>
            <img className="h-10" src={logo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navlinks}</ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;