import { Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import ProgrammingService from "../pages/Service/ProgrammingService";

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
        {
            path: "/main-page/software-service",
            element: <ProgrammingService />
        },

    ];
}