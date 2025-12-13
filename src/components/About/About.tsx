import { useEffect } from "react";
import { Container } from "./styles";

import AOS from "aos";
import "aos/dist/aos.css";

import VinayakSingh from "../../assets/VinayakSingh.webp";
import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";

export function About() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Container id="about">
      <div className="about-text">

        <h2 data-aos="fade-left">About me</h2>

        <p data-aos="fade-left" data-aos-delay="100">
          Hi there! I'm Vinayak, an enthusiastic Software Engineer skilled in web
          development, machine learning, and scalable software solutions
        </p>

        <p
          data-aos="fade-left"
          data-aos-delay="200"
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          I build responsive web applications, fine-tune ML models, and implement
          robust backend services.
        </p>

        <p data-aos="fade-left" data-aos-delay="300">
          I also work with CMS platforms like WordPress and Shopify to streamline
          content management.
        </p>

        <div className="education" data-aos="fade-left" data-aos-delay="400">
          <h3>Education:</h3>
          <h4>Master of Computer Applications (MCA)</h4>
          <p>Vellore Institute of Technology, Chennai | July 2023 - Present</p>
          <p>8.09 CGPA</p>
        </div>

        <div className="experience" data-aos="fade-left" data-aos-delay="550">
          <h3>Experience:</h3>
          <h4>Software Developer</h4>
          <p>KIWIS AND BROWNIES IT SOLUTIONS | October 2024 - Present</p>
          <p>Bangalore, India</p>
        </div>

        <h3 data-aos="fade-left" data-aos-delay="650">
          Here are my main skills:
        </h3>

        <div className="hard-skills">
          {[
            { src: python, alt: "Python", delay: 100 },
            { src: java, alt: "Java", delay: 110 },
            { src: jsIcon, alt: "JavaScript", delay: 120 },
            { src: reactIcon, alt: "React", delay: 130 },
            { src: typescriptIcon, alt: "TypeScript", delay: 140 },
            { src: vueIcon, alt: "Vue", delay: 150 },
            { src: wordpress, alt: "WordPress", delay: 160 },
            { src: shopify, alt: "Shopify", delay: 170 },
            { src: htmlIcon, alt: "HTML", delay: 180 },
            { src: cssIcon, alt: "CSS", delay: 190 },
            { src: boostrapIcon, alt: "Bootstrap", delay: 200 },
          ].map((skill, index) => (
            <div className="hability" key={index}>
              <img
                src={skill.src}
                alt={skill.alt}
                data-aos="fade-up"
                data-aos-delay={skill.delay}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="about-image">
        <img
          src={VinayakSingh}
          alt="Vinayak Singh"
          data-aos="fade-right"
          data-aos-delay="700"
        />
      </div>
    </Container>
  );
}
