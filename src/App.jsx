
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Addproduct from './component/Addproduct/Addproduct'
import Products from './component/Products/Products'
import ChangeSlider from './component/ChangeSlider/ChangeSlider'
import FeaturesCategory from './component/FeaturesCategory/FeaturesCategory'
import FeaturesCategories from './component/FeaturesCategories/FeaturesCategories'
import Orders from './component/Orders/Orders'
import PrivateRoute from './routes/PrivateRoute'
import LogIn from './component/Login/Login'
import ChangePassword from './component/ChangePassword/ChangePassword'
import Layout from './Layout/Layout'

function App() {
  const router = createBrowserRouter([
    { 
      path:'/login',
     element:<LogIn></LogIn>
  },
    {
      path:'/',
      element:<PrivateRoute><Layout></Layout></PrivateRoute>,
      children:[
        {
          path:'/',
      element:<Addproduct></Addproduct>



        }
        ,
        // {
        //   path:'/login',
        //   element:<LogIn></LogIn>
    
        // },
        {
          path:'/changepassword',
          element:<ChangePassword></ChangePassword>
        
    
        },
        {
          path:'/products/*',
          element:<Products></Products>
    
        },{
          path:'/changeslider',
          element:<ChangeSlider></ChangeSlider>
        },{
          path:'/addfeaturescategory',
          element:<FeaturesCategory></FeaturesCategory>
        },{
          path:'/featurescategories',
          element:<FeaturesCategories></FeaturesCategories>
        },
        {
          path:'/orders',
          element:<Orders></Orders>
        }

      ]
      
    },
   
  ])
  return(
    <div>
      
     <RouterProvider router ={router}></RouterProvider>
   </div>

  )
 

  
}

export default App
