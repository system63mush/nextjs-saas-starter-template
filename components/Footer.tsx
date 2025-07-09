import { AiOutlineFacebook, AiOutlineX, AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer
          className="bg-white border-t border-gray-100 dark:bg-black shadow-sm text-gray-400 py-6 dark:border-t dark:border-gray-800">

          <div className="flex justify-center items-center">
              <p className="text-center">&copy; {currentYear} goalbound.codes </p>
          </div>
      </footer>
  );
};

export default Footer;
