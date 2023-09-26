import Root from '../components/Root/Root'
import { createBrowserRouter } from "react-router-dom";

 const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>
    }
])

export default MainRouter;