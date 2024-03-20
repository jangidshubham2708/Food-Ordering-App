
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
  
    </div>
  );

};
const appRouter = createBrowserRouter([
 { path: "/",
    element: <AppLayout />,
 },
      {  
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },  
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/restaurants/:resId",
      //   element: <RestaurantMenu />,
      // },
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);