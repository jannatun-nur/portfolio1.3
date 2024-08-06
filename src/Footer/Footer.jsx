import Text from "@carefully-coded/react-text-gradient";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FiArrowUpCircle } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <button className="lg:text-4xl text-2xl" onClick={scrollToTop}>
          <FiArrowUpCircle />
        </button>
        <aside className="items-center grid-flow-col">
          <p className="text-xl md:text-2xl lg:text-2xl font-bold ml-6">
            Design By - 
            <span>
              <Text gradient={{ from: '#f24de1', to: '#5B21B6' }}>Jannatun Nur</Text>
            </span>
          </p>
        </aside>

        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-xl md:text-2xl lg:text-2xl ml-20">
          <a href="https://github.com/jannatun-nur">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jannatun-nur-57a30429a/">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100092027960478">
            <FaFacebook />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
