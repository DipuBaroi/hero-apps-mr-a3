import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/AllApps";
import Installation from "../pages/Installation";
import ErrorPage from "../pages/ErrorPage";
import AllApps from "../pages/AllApps";
import AppDetails from "../pages/AppDetails";
import Loading from "../components/ui/Loading";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        errorElement: <ErrorPage/>,
        children:[
            {
                index: true,
                element: <Home/>,
                hydrateFallbackElement:<Loading/>,
                loader:()=> fetch('../apps.json')
            },
            {
                path: '/allapps',
                element: <AllApps/>,
                hydrateFallbackElement:<Loading/>,
                loader:()=> fetch('../apps.json')
            },
            {
                path: '/installation',
                element: <Installation/>
            },
            {
                path:'/appDetails/:id',
                element: <AppDetails/>,
                hydrateFallbackElement:<Loading/>,
                loader:()=> fetch('../apps.json')

            }
        ]
    }
])