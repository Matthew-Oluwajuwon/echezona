import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import HowItWorks from "../views/HowItWorks/HowItWorks";
import ContactUs from "../views/ContactUs/ContactUs";
import Layout from "../components/Layout";

export const routeNames = {
  Home: "/",
  HowItWorks: "/how-it-works",
  developer: "https://doc.echezona.com",
  ContactUs: "/contact-us",
};

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: routeNames.Home,
        Component: Home,
      },
      {
        path: routeNames.HowItWorks,
        Component: HowItWorks,
      },
      {
        path: routeNames.ContactUs,
        Component: ContactUs,
      },
    ],
  },
]);
