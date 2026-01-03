import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import BodyComponent from "./src/components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Aboutus from "./src/components/Aboutus";
import Error from "./src/components/Error";
import RestroMenu from "./src/components/RetroMenu";

//Basics of react
const heading = React.createElement(
  "h1",
  { id: "heading", className: "heading" },
  "Hello from react..!"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading1", key: "heading1" },
      "This is heading1"
    ),
    React.createElement(
      "h2",
      { id: "heading2", key: "heading2" },
      "This is heading2"
    ),
  ])
);

const NewParent = () => {
  return (
    <>
      <div id="parent">
        <h1 id="heading" className="heading">
          This is new parent
        </h1>
      </div>
      <div id="child">
        <h1 id="heading1" className="heading">
          This is new child
        </h1>
      </div>
    </>
  );
};

const HeadingComponent = () => {
  return (
    <>
      <Navbar />
      <NewParent />
    </>
  );
};

const AppLayout = () => {
  return (
    <div id="app" className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <Aboutus />,
      },
      {
        path: "/restaurants/:id",
        element: <RestroMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
