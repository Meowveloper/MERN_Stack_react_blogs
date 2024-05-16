import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
import BlogDetail from "../pages/BlogDetail.js";
import NotFound from "../pages/NotFound.js";

import App from "../App.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children : [
            {
                path : '', 
                element : <Home/>
            }, 
            {
                path : '/about', 
                element : <About/>
            },
            {
                path : '/contact', 
                element : <Contact/>
            }, 
            {
                path : '/blogs/:id', 
                element : <BlogDetail/>
            }, 
            {
                path : '*', 
                element : <NotFound/>
            }
        ]
    },
]);

export default router;
