import React, { useState,lazy, Suspense, useContext } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantPage from "./components/RestaurantPage";
import UserContext from "./utils/UserContext";

const Instamart = lazy(()=>import("./components/Instamart"));

const AppLayout = () => {
  const [user,setUser] = useState({ 
      name: "Seena",
      email: "seena@gmail.com",
    
  })

    return (
      <UserContext.Provider value={{
        user: user,
        setUser: setUser
      }}>
        <div className="max-w-7xl">
         <Header/>
         <Outlet/>
        </div>
        </UserContext.Provider>
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