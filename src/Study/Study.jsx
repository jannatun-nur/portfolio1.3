import { FaUserGraduate } from "react-icons/fa";

import chittagong from "../../public/assets/images/chittagong.jpg";
import mohsin from "../../public/assets/images/mohsin.jpg";
import { useEffect } from "react";
import Aos from "aos";
import Text from "@carefully-coded/react-text-gradient";
const Study = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="my-5 md:my-8 lg:my-10">
      <div className="flex justify-center gap-2">
        <p className="text-xs lg:text-3xl">
          {" "}
          
          <p className="text-xl md:text-2xl lg:text-4xl text-center lg:my-20 md:my-20 my-10 font-bold">
          👩‍🎓<Text gradient={{ from: '#f77ef5', to: '#5B21B6' }}>
              My Education
            </Text>
          </p>
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex justify-center items-center lg:py-2 lg:gap-10 bg-gray-800 lg:mx-60 rounded-lg mb-2"
      >
        <img className="h-14 lg:h-24" src={chittagong} alt="" />
        <p className="text-xs md:text-xl text-center lg:pt-4">
          Studies B.A hon's at Chitagong college. Depertment of Bangla.
          <br />
          Session 2021-present
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex justify-center items-center lg:py-4 lg:gap-10 bg-gray-800 lg:mx-60 rounded-lg "
      >
        <img className="h-14 lg:h-28" src={mohsin} alt="" />
        <p className="text-xs md:text-xl text-center lg:pt-4">
          Studied HSC at Govt. Hazi Muhammad Mohsin College.
          <br />
          Session 2019-2020
        </p>
      </div>
    </div>
  );
};

export default Study;
