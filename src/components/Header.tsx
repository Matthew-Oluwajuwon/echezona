import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Button } from "antd";
import { routeNames } from "../utils/router";

const Header = () => {
  return (
    <header className="h-20 p-5 lg:px-20 flex items-center justify-between max-w-[100rem] mx-auto fixed w-full bg-white z-50">
      <img src={logo} alt="" className="h-full" />
      <div className="hidden lg:flex gap-7 w-[30rem]">
        <NavLink
          to={routeNames.Home}
          className={({ isActive }) => {
            return `${
              isActive ? "text-[#566b30] border-b-4 border-[#566b30]" : ""
            } py-7 px-5 lg:text-lg`;
          }}
        >
          Home
        </NavLink>
        <NavLink
          to={routeNames.developer}
          target="_blank"
          className={({ isActive }) => {
            return `${
              isActive ? "text-[#566b30] border-b-4 border-[#566b30]" : ""
            } py-7 lg:text-lg`;
          }}
        >
          Developers
        </NavLink>
        <NavLink
          to={routeNames.HowItWorks}
          className={({ isActive }) => {
            return `${
              isActive ? "text-[#566b30] border-b-4 border-[#566b30]" : ""
            } py-7 lg:text-lg`;
          }}
        >
          How It Works
        </NavLink>
        <NavLink
          to={routeNames.ContactUs}
          className={({ isActive }) => {
            return `${
              isActive ? "text-[#566b30] border-b-4 border-[#566b30]" : ""
            } py-7 lg:text-lg`;
          }}
        >
          Contact Us
        </NavLink>
      </div>
        <Button
          type="primary"
          className="shadow-none p-6 hover:scale-95 transition-all flex items-center justify-center lg:text-lg"
          onClick={() => window.location.href = "https://app.echezona.com"}
        >
          Sign In
        </Button>
    </header>
  );
};

export default Header;
