import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage/AboutPage";
import HomePage from "../pages/homePage/HomePage";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
           {path:"/", element:<HomePage/>},
           {path:"/about", element:<AboutPage/>}
        ]
    }
])