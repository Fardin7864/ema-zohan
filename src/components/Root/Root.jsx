import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    const products = useLoaderData(); 
    return (
        <div>
            <Navbar></Navbar>
            <Outlet context={products}></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;