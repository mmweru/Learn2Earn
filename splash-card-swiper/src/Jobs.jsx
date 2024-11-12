import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import { ThemeProvider } from "@/components/theme-provider"


const router = createBrowserRouter([
   {
     element:<AppLayout/>,
     children: [
        {
            path: '/',
            element:<LandingPage />
        },
        {
            path: '/onboarding',
            element: <Onboarding />
        }
     ]
   } 
])

function Job(){
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router}/>
        </ThemeProvider>
    );  
}

export default Job;
