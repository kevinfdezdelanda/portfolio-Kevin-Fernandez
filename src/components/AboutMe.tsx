import React from "react";
import { useLanguage } from "../context/LanguageContext";
import en from "../i18n/en.json";
import es from "../i18n/es.json";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

const AboutMe: React.FC = () => {
  const { language } = useLanguage();
  const texts = language === "es" ? es : en;

  return (
    <section id="Section-1" className="about-me transform -translate-y-12 rounded-4xl ">
      <article className="custom-container section-padding text-white flex flex-col gap-8">
        <SectionTitle dark={true} text1={texts.AboutMe.title1} text2={texts.AboutMe.title2} ></SectionTitle>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 border-b-2 border-gray-700 pb-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              vestibulum est. Phasellus porta non magna quis fringilla.
              Pellentesque vel luctus justo. Etiam venenatis malesuada
              tincidunt. Mauris congue, quam non facilisis molestie, erat justo
              viverra neque, sit amet pretium tellus leo non dui. Maecenas id
              arcu metus. Phasellus ac velit porta, maximus neque ut, tincidunt
              diam. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec sit amet pretium tortor,
              eget rhoncus leo. Fusce ornare nisl vel dui aliquet, sit amet
              hendrerit massa sagittis. Sed id aliquet sapien, ac tincidunt
              risus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              vestibulum est. Phasellus porta non magna quis fringilla.
              Pellentesque vel luctus justo. Etiam venenatis malesuada
              tincidunt. Mauris congue, quam non facilisis molestie, erat justo
              viverra neque, sit amet pretium tellus leo non dui. Maecenas id
              arcu metus.
            </p>
          </div>
          <div className="flex max-w-4xl flex-col items-center justify-center gap-3 m-auto">
            <h3 className="text-xl text-orange-300">¿Alguna pregunta?</h3>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center text-center">
              <div className="md:w-1/2 flex flex-col items-center md:items-end justify-center gap-1 md:gap-3 md:text-end border-b-2 border-r-0 md:border-r-2 md:border-b-0 border-gray-700 md:pr-4 pb-4 md:pb-0">
                <h4 className="">
                  Mi chatBot personalizado estara encantado de resolverte todas
                  las dudas
                </h4>
                <Button onClick={() => {}} label={texts.buttons.chatbot} />
              </div>
              <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center gap-1 md:gap-3 md:text-start">
                <h4 className="">Contactame directamente, estare encantado de resolverte tus dudas</h4>
                <Button onClick={() => {}} label={texts.buttons.contact} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
