import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ContactPage } from "@mui/icons-material";
import Navbar from "../components/navbar/navbar";
import AboutPage from "../pages/about_page/about_page";
import FaqsPage from "../pages/faqs_page/faqs_page";
import Homepage from "../pages/homepage/homepage";
import LoginPage from "../pages/login_page/login-page";
import NotfoundPage from "../pages/notfound_page/notfound_page";
import SignupPage from "../pages/signup_page/signup_page";
import AffliateProgramPage from "../pages/affliateprogram_page/affliateprogram";

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
          path: "faqs",
          element: <FaqsPage />,
        },

        {
          path: "affiliate-program",
          element: <AffliateProgramPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
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
