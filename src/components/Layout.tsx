import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-[100svh]">
      <Header />
      <div className="max-w-[100rem] mx-auto pt-20 flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
