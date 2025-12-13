import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import { Container } from "./styles";

import AOS from "aos";
import "aos/dist/aos.css";

import Illustration from "../../assets/illustration.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import Hello from "../../assets/Hello.gif";

export function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Container id="home">
      <div className="hero-text">

        <p data-aos="fade-up">
          Hello <img src={Hello} alt="Hello" width="20px" />, I'm
        </p>

        <h1 data-aos="fade-up" data-aos-delay="200">
          Vinayak Singh
        </h1>

        <h3 data-aos="fade-up" data-aos-delay="400">
          Software Engineer
        </h3>

        <p className="small-resume" data-aos="fade-up" data-aos-delay="600">
          1 Year Experience
        </p>

        <div data-aos="fade-up" data-aos-delay="800">
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </div>

        <div className="social-media" data-aos="fade-up" data-aos-delay="1000">
          <a
            href="https://www.linkedin.com/in/codevinayak"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>

          <a
            href="https://github.com/CodeVinayak/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak+I+found+your+contact+through+portfolio+site.%0A%0A"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="Whatsapp" />
          </a>

          <a
            href="https://t.me/CodeVinayak"
            target="_blank"
            rel="noreferrer"
          >
            <img src={telegram} alt="Telegram" />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={Illustration}
          alt="Illustration"
          data-aos="fade-right"
          data-aos-delay="1000"
        />
      </div>
    </Container>
  );
}
