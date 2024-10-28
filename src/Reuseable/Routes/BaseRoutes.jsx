import { useEffect, useState } from "react";
import About from "../Pages/About/about";
import Contact from "../Pages/Contact/contact";
import FAQs from "../Pages/Faqs/Faq";
import HowItWorks from "../Pages/HowItWorks/HowItWorks";
import Navbar from "../Components/Navbar/Navbar";
import NotFound from "../Pages/NotFound/notfound";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import LoginSignup from "../Pages/Signup2/Login/Login";

export const BaseRoutes = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  // automatically logout a user when session expires

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
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },

        {
          path: "faqs",
          element: <FAQs />,
        },

        {
          path: "howitworks",
          element: <HowItWorks />,
        },
      ],
    },
    /* Login and signup from daniel branch */
    {
      path: "login",
      element: <LoginSignup />,
    },

    {
      path: "signup",
      element: <LoginSignup />,
    },
  ]);

  return <RouterProvider router={router} />;
};
