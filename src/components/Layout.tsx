import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[100rem] mx-auto pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
