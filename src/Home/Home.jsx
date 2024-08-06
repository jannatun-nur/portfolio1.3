import Contact from "../Contact/Contact";
import Expertise from "../Expertise/Expertise";
import Project from "../Project/Project";
import Study from "../Study/Study";
import About from "./About/About";


const Home = () => {
    return (
        <div>
        
            <About/> 
            <Expertise/>
            <Project/>
            <Study/>
            <Contact/>
        </div>
    );
};

export default Home;