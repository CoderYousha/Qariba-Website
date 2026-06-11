import { Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";

export function WebsiteRoutes (){
    return [
        {
            path: "/main-page",
            element: <MainPage />
        },
        {
            path: "/",
            element: <Navigate to='/main-page' />
        },

    ];
}