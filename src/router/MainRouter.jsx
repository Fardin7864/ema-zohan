import Home from '../components/Home/Home';
import Root from '../components/Root/Root'
import { createBrowserRouter } from "react-router-dom";
import Shop from '../components/Shop/Shop';
import Error from '../components/Error/Error';

 const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            }
        ]
    }
])

export default MainRouter;