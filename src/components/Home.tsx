import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import en from "../i18n/en.json";
import es from "../i18n/es.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import kevinImage from "../assets/images/foto-home2.png"; // Importa la imagen

const Home: React.FC = () => {
  const [hoverFoto, setHoverFoto] = useState(false);
  const [hoverBoton, setHoverBoton] = useState(false);

  const clasesBotonHover = "bg-orange-400 px-6 py-2 rounded-full font-bold";
  const clasesBotonNoHover = "font-light py-2 border-0";

  const { language } = useLanguage();
  const texts = language === "es" ? es : en;

  return (
    <section
      id="Section-0"
      className="custom-container min-h-screen flex flex-col items-center justify-center gap-7 pt-32 overflow-hidden"
    >
      <article
        className={`flex flex-col items-center gap-7 justify-center transition-all duration-300 ease-in-out ${
          hoverFoto ? "translate-y-92 opacity-0" : "-translate-y-0"
        }`}
      >
        <span className="border rounded-full px-4 py-2 text-sm">
          {texts.home.hello}
        </span>
        <div className={`flex flex-col items-center gap-3  `}>
          <h1 className="text-7xl font-bold">
            {texts.home.presentation}{" "}
            <label className="text-orange-500">{texts.comun.name}</label>,
          </h1>
          <h2 className="text-6xl font-bold text-gray-800">
            {texts.comun.position}
          </h2>
        </div>
      </article>
      <section className="grid grid-flow-col grid-cols-10 flex-grow">
        {/* Pequeña descripción */}
        <article
          className={`col-span-3 flex flex-col justify-center transform transition-all duration-300 ease-in-out ${
            hoverFoto ? "-translate-y-82" : "-translate-y-20"
          }`}
        >
          <label>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-4xl text-gray-700"
            />
          </label>
          <p className="text-lg max-w-10/12">{texts.home.description}</p>
        </article>
        {/* Imagen con botones */}
        <article
          className="col-span-4  flex flex-col justify-end items-center relative h-[calc(100vh-48px-19rem)]"
          onMouseEnter={() => setHoverFoto(true)}
          onMouseLeave={() => setHoverFoto(false)}
        >
          <img
            src={kevinImage}
            alt="portrait of kevin fernandez"
            className={`h-full  object-cover trasnform transition-all duration-300 ease-in-out ${
              hoverFoto ? "scale-[130%] order-last translate-y-[-23%]" : "scale-[124%] order-last translate-y-[-19%]" }`}
          />
          <div
            className={`absolute w-full scale-150 left-1/2 transform -translate-x-1/2 translate-y-20 h-2/3 rounded-t-full bg-orange-300 transition-all duration-300 ease-in-out -z-10 ${
              hoverFoto ? "scale-200" : ""
            }`}
          ></div>
          <div className="absolute left-1/2 -translate-x-1/2  z-10 flex justify-center transform -translate-y-12 w-3xl">
            <div className="relative inline-flex gap-3 items-center justify-center mb-7 py-2 px-4 border border-white rounded-full text-white overflow-hidden">
              <button
                className={`transition-all duration-300 ease-in-out z-10 ${
                  hoverBoton ? clasesBotonNoHover : clasesBotonHover
                }`}
              >
                {texts.buttons.cv}
              </button>
              <button
                className={`transition-all duration-300 ease-in-out z-10 ${
                  hoverBoton ? clasesBotonHover : clasesBotonNoHover
                }`}
                onMouseEnter={() => setHoverBoton(true)}
                onMouseLeave={() => setHoverBoton(false)}
              >
                {texts.buttons.chatbot}
              </button>
              <div className="absolute w-full h-full backdrop-blur-xs"></div>
            </div>
          </div>
        </article>
        {/* Experiencia */}
        <article
          className={`col-span-3 flex flex-col justify-center items-end gap-3 trasform transition-all duration-300 ease-in-out ${
            hoverFoto ? "-translate-y-82" : "-translate-y-20"
          }`}
        >
          <span className="text-orange-500 flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className="text-2xl" />
            ))}
          </span>
          <div className="flex flex-col justify-end items-end">
            <p className="font-bold text-5xl">{texts.comun.experience}</p>
            <span className="text-md">{texts.home.experience}</span>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Home;
