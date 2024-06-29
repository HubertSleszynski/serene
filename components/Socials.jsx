import Link from "next/link";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaYoutube />,
    href: "/",
  },
  {
    icon: <FaFacebook />,
    href: "/",
  },
  {
    icon: <FaTwitter />,
    href: "/",
  },
  {
    icon: <FaInstagram />,
    href: "/",
  },
];

const Socials = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      {socials.map((social, index) => {
        return (
          <li key={index}>
            <Link href={social.href}>{social.icon}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
