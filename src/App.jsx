import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import Home from "./pages/home";
import { useSelector } from "react-redux";
import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
  RouterProvider,
} from "react-router-dom";
import ProductData from "./api/Api";
import Carts from "./pages/Carts";
import Login from "./pages/Login";

import Loading from "./components/Loading";
import { ApiComp } from "./api/Api";

import Eproduct from "./components/Eproduct";
import Profile from "./pages/profile";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, loader: ProductData },
      {
        path: "/product/:id",
        element: <Eproduct />,
      },
      { path: "/cart", element: <Carts /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  const loading = useSelector((state) => state.bazar.isLoading);
  return (
    <div className=" font-bodyFont">
      <ApiComp />
      {loading ? (
        <div className=" w-full h-full mt-[45vh] ml-[45vw] flex flex-col gap-16">
          <p>Loading...</p>
          <Loading />
        </div>
      ) : (
        <div>
          <RouterProvider router={Router} />
        </div>
      )}
    </div>
  );
}

export default App;
