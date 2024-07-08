import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage/AboutPage";
import HomePage from "../pages/homePage/HomePage";
import ProductPage from "../pages/productPage/ProductPage";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
           {path:"/", element:<HomePage/>},
           {path:"/products/:id",element:<ProductPage/>}

        ]
    },
    
]);
