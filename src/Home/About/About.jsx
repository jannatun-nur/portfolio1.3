import image from "../../../public/assets/images/pics.jpeg";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import Text from "@carefully-coded/react-text-gradient";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      id="about"
      data-aos="zoom-in"
      className="lg:flex lg:justify-center md:columns-1 lg:my-10 md:my-6 my-5 items-center md:p-3 lg:p-10 p-3 gap-10 bg-gray-800 rounded-lg"
    >
      <div>
        <img className="rounded-lg md:w-full " src={image} alt="" />
      </div>

      <div>
        <p className="text-2xl font-bold py-2">
        👧<Text gradient={{ from: '#fc6fee', to: '#5B21B6' }}>About Me</Text>
        </p>
        <p className="text-xs lg:text-xl md:text-xl text-center">
          Hi! My name is Jannatun Nur. Currently, I'm studying in honours 2nd
          year at Chittagong College of Bangla department. I’m fascinated by
          Programming. It excites me to write and read code. Designing and
          developing websites is also a passion of mine since it is a part of
          programming. I'm trying to be a best programmer and it's an ambition
          of my life. I also love to____
          <ul className="flex gap-2 lg:gap-3 text-xs lg:text-xl">
            <li>1.📚Reading Book</li>
            <li>2.👩‍🍳Cooking</li>
            <li>3.🚴‍♀️Traveling</li>
            <li>4.👩‍💻Solving code error</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
