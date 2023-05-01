import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [ 
            {
            path: "/",
            element: <Home></Home>
           },
           {
           path:'/category/:id',
           element:<Category></Category> 
          },
          
        ]
    },
    {
        path:'news/:id',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<News></News>
            }
        ]
      }
    
])

export default router;