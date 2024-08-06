import Aos from "aos";
import { FiExternalLink } from "react-icons/fi";

const Card = ( { projects }) => {

    Aos.init();
    const {
    
        name,image,title,Description,rating,
        icon1,
        icon2,
        icon3,
        icon4,
        icon5,icon6,icon7,icon8,icon9, icon10,github,live,icon12,icon14,icon15,icon20
      } = projects;
    return (
        <div  data-aos="zoom-in" 
        className="lg:mx-36 bg-gray-800 columns-1 md:flex lg:flex lg:gap-6 lg:p-6 my-2 p-2">
        <section className="">
          <img className="w-9/12 md:8/12 lg:9/12 rounded-lg ml-8 md:ml-0 lg:ml-0" src={image} alt="" />


          <div className=" flex rounded-lg ml-24 md:ml-0 lg:ml-0">
             <a href={github}>
              <img className="h-10 w-16 lg:h-14 lg:w-24" src={icon4} alt="" />
            </a>
            <a href={live} className="text-white lg:text-2xl mt-3 "><FiExternalLink /></a>
    
             </div>
        </section>
        <section className=" w-full lg:w-1/2 mt-8 lg:mt-16">
          <p className="text-sx text-center lg:text-2xl">{name}</p>
          <p className="text-sx text-center lg:text-xl">{title}</p>
          <p className="text-sx lg:text-start md:text-start text-center lg:text-xl">{Description}</p>

          <div className="flex gap-1 mt-6 text-center ">
            <p className="text-xs md:text-xs lg:text-xs">{icon1}</p>
            <p  className="text-xs md:text-xs lg:text-xs">{icon2}</p>
            <p className="text-xs md:text-xs lg:text-xs">{icon3}</p>
            <p className="text-xs md:text-xs lg:text-xs">{icon6}</p>
            <p className="text-xs md:text-xs lg:text-xs">{icon7}</p>
            <p className="text-xs md:text-xs lg:text-xs">{icon8}</p>
            <p className="text-xs md:text-xs lg:text-xs">{icon12}</p>
            <p className="text-xs md:text-xs lg:text-xs mr-2 ">{icon20}</p>
            
            <p className="text-xs md:text-xs lg:text-xs">{icon14}</p>
            <p className="text-xs md:text-xs lg:text-xs">{icon15}</p>
            
            <p className="text-xs md:text-xl lg:text-xs">{icon9}</p>
            <p className="text-xs md:text-xl lg:text-xs">{icon10}</p>
            
        
            
           
           
          </div>
        </section>
      </div>
    );
};

export default Card;