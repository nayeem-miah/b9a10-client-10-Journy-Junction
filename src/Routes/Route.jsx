import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristSport from "../pages/AddTouristSport/AddTouristSport";
import MyList from "../pages/MyLIst/MyList";
// import Login from "./pages/Home/Login";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allTourists",
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: "/addTourists",
        element: <AddTouristSport></AddTouristSport>,
      },
      {
        path: '/myList',
        element: <MyList></MyList>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default Route;
