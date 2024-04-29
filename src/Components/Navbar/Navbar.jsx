import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvider";
import Swal from "sweetalert2";

import { Typewriter } from "react-simple-typewriter";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState();
  const handleLogout = () => {
    logout()
      .then((result) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "logOut successful",
          showConfirmButton: false,
          timer: 2000,
        });
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
        setOpen(false);
      });
  };

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (event) => {
    if (event.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };
  const nabLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allTourists">All Tourists Spot</NavLink>
      </li>
      <span>
        {user && (
          <li>
            <NavLink to="/addTourists"> Add Tourists Spot</NavLink>
          </li>
        )}
      </span>
      <span>
        {user && (
          <li>
            <NavLink to="/myList"> My Lists</NavLink>
          </li>
        )}
      </span>
    </>
  );
  return (
    <div className="navbar bg-base-300 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-300 absolute z-50 rounded-box w-52"
          >
            {nabLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl text-green-600">
          {" "}
          <Typewriter
            words={[
              "JourneyJunction",
              " JourneyJunction",
              " JourneyJunction",
              " JourneyJunction",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nabLinks}</ul>
      </div>
      <div className="navbar-end">
        {/* start dark mode */}

        <label className="cursor-pointer grid place-items-center">
          <input
            onChange={handleToggle}
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        {/* end dark mode */}
        <div className="relative md:border-l flex items-center  justify-end w-full md:w-auto pl-3 ">
          <div className=" w-[50px]"></div>
          {!user && (
            <button className="border-2 p-1 text-white bg-[#FF497C] rounded border-[#FF497C] mr-5">
              {" "}
              <NavLink to="/register">Register</NavLink>
            </button>
          )}
          {user ? (
            <button
              onClick={() => setOpen(!open)}
              className="border-2 border-[#FF497C] rounded-full w-[40px]"
            >
              <img
                src={user?.photoURL}
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </button>
          ) : (
            <Link
              to={"/login"}
              className="bg-[#FF497C] hover:bg-[#ab3154]  duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
            >
              Login
            </Link>
          )}

          <div
            className={`absolute text-center ${
              open ? "block" : "hidden"
            } flex flex-col justify-center items-center gap-4  shadow-lg bg-white dark:bg-[#120505] px-8 py-4 top-16 dark:text-white z-50`}
          >
            <p className="text-lg font-semibold">{user?.displayName}</p>
            <p className="text-lg font-semibold">{user?.email}</p>

            <button
              onClick={() => handleLogout()}
              className="bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded cursor-pointer"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
