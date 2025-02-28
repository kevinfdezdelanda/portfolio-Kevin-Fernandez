import React, { JSX } from "react";
import { useLanguage } from "../context/LanguageContext";
import en from "../i18n/en.json";
import es from "../i18n/es.json";
import SectionTitle from "./SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJava,
  faJs,
  faPhp,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

const getImageById = (id: string): JSX.Element => {
  const classNames = "text-6xl text-white";
  switch (id) {
    case "Java":
      return <FontAwesomeIcon icon={faJava} className={classNames} />;
    case "JavaScript":
      return <FontAwesomeIcon icon={faJs} className={classNames} />;
    case "Python":
      return <FontAwesomeIcon icon={faPython} className={classNames} />;
    case "HTML":
      return <FontAwesomeIcon icon={faHtml5} className={classNames} />;
    case "CSS3":
      return <FontAwesomeIcon icon={faCss3Alt} className={classNames} />;
    case "PHP":
      return <FontAwesomeIcon icon={faPhp} className={classNames} />;
    case "TensorFlow":
      return <FontAwesomeIcon icon={faPython} className={classNames} />; // Replace with appropriate icon
    case "PyTorch":
      return <FontAwesomeIcon icon={faPython} className={classNames} />; // Replace with appropriate icon
    case "Keras":
      return <FontAwesomeIcon icon={faPython} className={classNames} />; // Replace with appropriate icon
    case "Scikit-learn":
      return <FontAwesomeIcon icon={faPython} className={classNames} />; // Replace with appropriate icon
    case "Pandas":
      return <FontAwesomeIcon icon={faPython} className={classNames} />; // Replace with appropriate icon
    case "NumPy":
      return <FontAwesomeIcon icon={faPython} className={classNames} />; // Replace with appropriate icon
    case "Django":
      return <FontAwesomeIcon icon={faPython} className={classNames} />; // Replace with appropriate icon
    case "ReactJs":
      return <FontAwesomeIcon icon={faJs} className={classNames} />; // Replace with appropriate icon
    case "TypeScript":
      return <FontAwesomeIcon icon={faJs} className={classNames} />; // Replace with appropriate icon
    // Add more cases for different ids and corresponding icons or images
    default:
      return <FontAwesomeIcon icon={faJava} className={classNames} />;
  }
};

const HardSkills: React.FC = () => {
  const { language } = useLanguage();
  const texts = language === "es" ? es : en;

  return (
    <section
      id="Section-3"
      className="flex flex-col justify-center items-center gap-8 section-padding bg-gray-50"
    >
      <SectionTitle
        dark={false}
        text1={texts.HardSkils.title1}
        text2={texts.HardSkils.title2}
      ></SectionTitle>
      <article className="custom-container bg-white shadow shadow-gray-200 py-10 rounded-4xl">
        <div className="px-10 py-5">
          <h3 className="text-xl font-semibold text-gray-700 mb-10">
            Leguajes de programación
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-15 text-center">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 justify-center items-center font-semibold about-me px-10 py-5 rounded-2xl"
              >
                {getImageById("java")}
                <p className="text-gray-100">Java</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default HardSkills;
