import { useEffect, useState } from "react";
import Card from "./Card";
import Text from "@carefully-coded/react-text-gradient";

const Project = () => {

    const [project , setProject] = useState([])

    useEffect(()=>{
        fetch('project.json')
        .then(res => res.json())
        .then(data => setProject(data))
    },[])
    return (
        <div>
            <p className="text-xl md:text-2xl lg:text-4xl text-center lg:my-20 md:my-20 my-10 font-bold">
            👩‍🏭<Text gradient={{ from: '#f77ef5', to: '#5B21B6' }}>Projects Built By Me</Text></p>
            <div>
                {
                    project.map(projects =><Card key={projects} projects={projects}></Card>)
                }
            </div>
        </div>
    );
};

export default Project;