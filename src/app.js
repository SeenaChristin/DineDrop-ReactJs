import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantPage from "./components/RestaurantPage";

const Instamart = lazy(()=>import("./components/Instamart"));

const AppLayout = () => {
    return (
        <div className="app">
         <Header/>
         <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <AboutUs/>
      },
      {
        path: "/contact",
        element: <ContactUs/>
      },
      {
        path: "/instamart",
        element:(
        <Suspense>
          <Instamart/>
          </Suspense>
        ), 
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantPage/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);