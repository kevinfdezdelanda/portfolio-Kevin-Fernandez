import React from "react";
import ExperienceCard from "./ExperienceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import en from "../i18n/en.json";
import es from "../i18n/es.json";
import SectionTitle from "./SectionTitle";

const Career: React.FC = () => {
  const { language } = useLanguage();
  const texts = language === "es" ? es : en;
  const experiences = texts.career.experiences;

  return (
    <section id="Section-2" className="custom-container flex flex-col justify-center items-center gap-8 section-padding">
      <SectionTitle dark={false} text1={texts.career.title1} text2={texts.career.title2} ></SectionTitle>
      <div className="relative flex flex-col ml-7 md:ml-15 lg:ml-0 gap-10 lg:gap-0 lg:grid lg:grid-cols-7 max-w-6xl ">
        <div className=" absolute w-1 h-full rounded-2xl -left-5 md:-left-13 bg-orange-300 lg:col-span-1 lg:col-start-5 lg:-left-1/2"></div>
        {experiences.map((experience, index) => (
          <>
          <div
            className={`flex relative lg:col-span-3 lg:row-span-2 
            ${experience.workExperience ? "lg:col-start-5" : "lg:col-start-1"}`}
          >
            <div
              className={`relative -left-7 md:-left-15 top-2 lg:top-3  
            ${
              experience.workExperience ? "lg:-left-[4.85rem] xl:-left-[5.65rem]" : "lg:left-[5.1rem] xl:left-[5.9rem] lg:order-last"
            }`}
            >
              <FontAwesomeIcon
                icon={faCircleDot}
                className="bg-white text-orange-300 text-xl"
              />
            </div>

            <ExperienceCard
              workExperience={experience.workExperience}
              key={index}
              title={experience.title}
              company={experience.company}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
            />
          </div>
          {/* {!experience.workExperience && 
            <div className="hidden lg:flex lg:col-start-1 lg:col-span-3 lg:row-span-2"></div>
          } */}
          </>
        ))}
      </div>
    </section>
  );
};

export default Career;
