import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ContactPage } from "@mui/icons-material";
import Navbar from "../components/navbar/navbar";
import AboutPage from "../pages/about_page/about_page";
import FaqsPage from "../pages/faqs_page/faqs_page";
import Homepage from "../pages/homepage/homepage";
import HowitworksPage from "../pages/howitworks_page/howitworks_page";
import LoginPage from "../pages/login_page/login-page";
import NotfoundPage from "../pages/notfound_page/notfound_page";
import SignupPage from "../pages/signup_page/signup_page";

const MainRoutes = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  const Layout = () => {
    return (
      <div className="app">
        {showNavbar && <Navbar />}
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotfoundPage />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },

        {
          path: "faqs",
          element: <FaqsPage />,
        },

        {
          path: "howitworks",
          element: <HowitworksPage />,
        },
      ],
    },

    {
      path: "login",
      element: <LoginPage />,
    },

    {
      path: "signup",
      element: <SignupPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoutes;
