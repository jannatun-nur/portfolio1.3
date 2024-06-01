import { useEffect, useState } from "react";
import ExCard from "./ExCard";
import Text from "@carefully-coded/react-text-gradient";


const Expertise = () => {

    const [ exper , setExper] = useState([]);

    useEffect(()=>{
        fetch('logo.json')
        .then(res => res.json())
        .then(data => setExper(data))
    },[])
    return (
        <div className=' items-center p-2 md:p-3 lg:p-10 gap-10 bg-gray-800 my-5 md:my-5 lg:my-10 rounded-lg'>
            <div>
                <p className="lg:text-4xl md:text-2xl text-xl text-center py-3 font-bold">
                <Text gradient={{ from: '#f24de1', to: '#5B21B6' }}>My Expertise</Text>
                </p>
            </div>
            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2 ">
                {
                    exper.map(expers =><ExCard key={expers} expers={expers}></ExCard>)
                }
            </div>
        </div>
    );
};

export default Expertise;