import React, { useState,lazy, Suspense, useContext } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import RestaurantPage from "./components/RestaurantPage";
import UserContext from "./utils/UserContext";
import {Provider} from 'react-redux';
import store from "./components/store";
import TodoApp from "./components/TodoApp";

const Instamart = lazy(()=>import("./components/Instamart"));

const AppLayout = () => {
  const [user,setUser] = useState({ 
      name: "Seena",
      email: "seena@gmail.com",
    
  })

    return (
      <Provider store={store}>
      <UserContext.Provider value={{
        user: user,
        setUser: setUser
      }}>
        <div className="max-w-7xl">
         <Header/>
         <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
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
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/todo",
        element: <TodoApp/>
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