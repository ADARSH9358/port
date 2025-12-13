import { useEffect } from "react";
import { Container } from "./styles";

import AOS from "aos";
import "aos/dist/aos.css";

import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";

export function Project() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Container id="project">
      <h2 data-aos="fade-up">My Projects</h2>

      <div className="projects">

        {/* Project 1 */}
        <div className="project" data-aos="flip-left">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            <div className="project-links">
              <a href="https://github.com/CodeVinayak/MultilingualVQA" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Multilingual VQA Vision-Language Model</h3>
            <p>
              Fine-tuned Qwen2.5-VL for visual question answering across 14 languages with optimized preprocessing.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Python</li>
              <li>Qwen2.5-VL</li>
              <li>Unsloth</li>
            </ul>
          </footer>
        </div>

        {/* Project 2 */}
        <div className="project" data-aos="flip-left" data-aos-delay="100">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            <div className="project-links">
              <a href="https://github.com/CodeVinayak/Serverless-Voting-Application" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Serverless Voting Application</h3>
            <p>
              Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB with scalable architecture.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>AWS Lambda</li>
              <li>API Gateway</li>
              <li>DynamoDB</li>
            </ul>
          </footer>
        </div>

        {/* Project 3 */}
        <div className="project" data-aos="flip-left" data-aos-delay="200">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            <div className="project-links">
              <a href="https://github.com/CodeVinayak/AI-Chatbot-Assistant" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Live" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>GeniusBot: AI Chatbot</h3>
            <p>
              Built an AI chatbot using Streamlit, GPT-3.5, and PyPDF2 enabling contextual Q&A on uploaded PDFs.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Streamlit</li>
              <li>LangChain</li>
              <li>PyPDF2</li>
            </ul>
          </footer>
        </div>

        {/* Project 4 */}
        <div className="project" data-aos="flip-left" data-aos-delay="300">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            <div className="project-links">
              <a href="https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://medibook.vinayaksingh.com" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Live" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>MediBook</h3>
            <p>
              Secure medical appointment scheduler with RBAC, encrypted records, and MySQL backend.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>PHP</li>
              <li>MySQL</li>
              <li>CSS</li>
            </ul>
          </footer>
        </div>

      </div>
    </Container>
  );
}
