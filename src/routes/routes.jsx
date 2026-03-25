import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        errorElement: <ErrorPage/>,
        children:[
            {
                index: true,
                element: <Home/>,
                loader:()=> fetch('apps.json')
            },
            {
                path: '/apps',
                element: <Apps/>
            },
            {
                path: '/installation',
                element: <Installation/>
            }
        ]
    }
])