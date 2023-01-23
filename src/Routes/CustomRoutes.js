import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import AllProject from "../Pages/Project/AllProject";

export const CustomRoutes = [
    {
        path:'/',
        name:'Home',
        component:Home,
    },
    {
        path:'/about',
        name:'About',
        component:About,
    },
    {
        path:'/projects',
        name:'Projects',
        component:AllProject
    },
    {
        path:'/contacts',
        name:'Contact',
        component:Contact
    }
]