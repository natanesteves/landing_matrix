// Icons
import { SiInstagram, SiTiktok, SiDiscord, SiTwitter, SiYoutube } from "react-icons/si";

// React
import { useState, useRef } from "react";

// React Router Dom
import { Link } from "react-router-dom";

// Styles
import "./styles.scss";

// Icon
import { FiMenu, FiX } from "react-icons/fi";



export function Header() {
  const header = useRef(null);
  const propose = useRef(null);
  const howItWorks = useRef(null);
  const whatWeDo = useRef(null);
  const categories = useRef(null);
  const history = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  function handleMenuIsOpen() {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    } else {
      setMenuIsOpen(true);
    }
  }

  return (
    <header id="header">
      <div className="container">
        
        <div className="socials">
          <a href="https://www.instagram.com/cavalcanti9172/" className="boxSocials">
            <SiInstagram />
          </a>
         
         
          <a href="https://www.youtube.com/watch?v=_A-0QlXuR5U" className="boxSocials">
            <SiYoutube />
          </a>
          
        </div>
      
        
      </div>

      <div className="container">
       
      </div>
    </header>
  );
}