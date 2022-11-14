import { createBrowserRouter, RouterProvider, Outlet, } from "react-router-dom";
import Cookies from "js-cookie";


import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import SingleArticle from "./SingleArticle/SingleArticle";
import BlogSearch from "./BlogSearch/Search";
import Categories from "./Categories/Categories";
import Contact from "./Contact/Contact";
import ArticleEditor from "./ArticleEditor/ArticleEditor";


import Navbar from "./Utils/Navbar";
import Footer from "./Utils/Footer";
import Viewmore from "./Viewmore/Viewmore";
import Profile from "./Profile/Profile";
import { LoginAction, userContext } from "../CONTEXTS/UserContext";


import "../BOOTSTRAP/bootstrap.css";
import "../CSS/loginreg.css";
import "../CSS/utils.css";
import "../CSS/style.css";
import "../CSS/home.css";
import "../CSS/profile.css";
import "../CSS/editor.css";
import { useContext, useEffect } from "react";


const Layout = () => {

  return (<>

    <Navbar />
    <Outlet />
    {/* <Footer /> */}

  </>)
}

function App() {

  const { userDispatch } = useContext(userContext);

  // If User Is Already Logged In Than Set User

  useEffect(() => {

    const LoggedInUser = Cookies.get("user");
    console.log(LoggedInUser);

    if (LoggedInUser) {

      userDispatch(LoginAction(JSON.parse(LoggedInUser)));
    }

  }, [])


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [

        {
          path: "/",
          element: <Home />
        },

        {
          path: "/article/:id",
          element: <SingleArticle />
        },

        {
          path: "/search",
          element: <BlogSearch />,
        },

        {
          path: "/categories",
          element: <Categories />,
        },

        {
          path: "/contact",
          element: <Contact />,
        },

        {
          path: "/profile/",
          element: <Profile />,
        },

        {
          path: "/editor",
          element: <ArticleEditor />,
        },

      ]

    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/register",
      element: <Register />,
    },

  ]);

  return (
    <>

      {/* <Register /> */}
      {/* <Login /> */}

      <RouterProvider router={router} />

    </>
  );
}

export default App;
