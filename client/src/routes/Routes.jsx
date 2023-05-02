import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News";
import LogInLayout from "../Layouts/LogInLayout";
import Login from '../Pages/LogIn/Login/Login';
import Register from '../Pages/LogIn/Register/Register';
import Terms from "../Pages/Shared/Terms/Terms";
import PrivateRouters from "./PrivateRouters";

const router = createBrowserRouter([
    {
        path:"",
        element:<LogInLayout></LogInLayout>,
        children:[
            {
                path:"",
                element:<Navigate to="/category/0"></Navigate>
            },
            {
                path:"login",
                element:<Login></Login>
            }
            ,
            {
               path:"register",
               element:<Register></Register>
            },
            {
                path:'/terms',
                element:<Terms></Terms>
            }
            
            
        ]
    },

    {
        path: "category",
        element: <Main></Main>,
        children: [ 
            {
            path: "",
            element: <Category></Category>,
            loader:()=> fetch('https://the-news-dragon-server-saabdullah131.vercel.app/news')
           },
           {
           path:":id",
           element:<Category></Category>,
           loader:({params})=> fetch(`https://the-news-dragon-server-saabdullah131.vercel.app/categories/${params.id}`)
          },
            
        ]
    },
    {
        path:"news",
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:":id",
                element:<PrivateRouters><News></News></PrivateRouters>,
                loader:({params})=>fetch(`https://the-news-dragon-server-saabdullah131.vercel.app/news/${params.id}`)
            }
        ]
      }
    
])

export default router;