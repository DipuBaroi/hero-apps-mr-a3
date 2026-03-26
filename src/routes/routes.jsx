import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/AllApps";
import Installation from "../pages/Installation";
import ErrorPage from "../pages/ErrorPage";
import AllApps from "../pages/AllApps";

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
                path: '/allapps',
                element: <AllApps/>,
                loader:()=> fetch('apps.json')
            },
            {
                path: '/installation',
                element: <Installation/>
            }
        ]
    }
])