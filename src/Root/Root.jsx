import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className="lg:mx-3 md:mx-3 mx-3">
           
           <Outlet/> 
           <Footer/>
        </div>
    );
};

export default Root;