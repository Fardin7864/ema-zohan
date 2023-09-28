import Home from '../components/Home/Home';
import Root from '../components/Root/Root'
import { createBrowserRouter } from "react-router-dom";
import Error from '../components/Error/Error';
import Products from '../components/Products/Products';
import Login from '../components/Login/Login';
import OrderReview from '../components/OrderReview/OrderReview';

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
                path: '/products',
                element: <Products></Products>,
                loader:() => fetch('/products.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/orderreview',
                element: <OrderReview></OrderReview>
            }
        ]
    }
])

export default MainRouter;