import { RiMailSendFill } from "react-icons/ri";
import { FcCollaboration } from "react-icons/fc";
import Text from "@carefully-coded/react-text-gradient";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="lg:flex justify-center items-center p-2 lg:p-10 gap-10 bg-gray-800  my-4 rounded-lg">
      <div>
        <div className="flex gap-2 ">
          <p className="text-xl lg:text-3xl">
            <FcCollaboration />
          </p>
          <p className="text-xl lg:text-2xl font-bold pb-2">
            <Text gradient={{ from: "#f77ef5", to: "#5B21B6" }}>
              Let's start a project
            </Text>
          </p>
        </div>

        <p className="text-xs md:text-xl lg:text-xl">
          Remember, effective collaboration requires open communication, respect
          for each other's ideas, and a shared commitment to the project's
          goals. When approached with a positive and cooperative mindset,
          working together can lead to not only project success but also
          personal and professional growth for all involved.So,I’d Love to meet
          up with you to discuss any project and Potential collaboration.
        </p>

        <div className="flex gap-2 py-2  mt-5">
          <p className="text-xs lg:text-2xl">
            {" "}
            <RiMailSendFill />
          </p>
          <p className="text-xs lg:text-xl">
            To catch me, feel free to send an Email via....
          </p>
          <br />
        </div>

        <p className="text-xs md:text-xl lg:text-2xl">
          <Text gradient={{ from: "#f77ef5", to: "#5B21B6" }}>
            jannatunur03@gmail.com
          </Text>
        </p>
      
      <p className=" lg:text-2xl text-xl lg:mt-10 mt-5 font-bold">
      <Text gradient={{ from: "#f77ef5", to: "#5B21B6" }}>
      Or find me by </Text> </p>
      <div className="flex gap-4 py-4 lg:text-xl">
      <a href="https://github.com/jannatun-nur">
          <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jannatun-nur-57a30429a/">
          <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100092027960478">
          <FaFacebook />
          </a>
      </div>
      </div>
    </div>
  );
};

export default Contact;

// id="contact"
//     data-aos="fade-down-left"
