import React from "react";
import { useLanguage } from "../context/LanguageContext";
import en from "../i18n/en.json";
import es from "../i18n/es.json";

const AboutMe: React.FC = () => {
  const { language } = useLanguage();
  const texts = language === "es" ? es : en;

  return (
    <section id="AboutMe" className=" transform -translate-y-12 rounded-4xl ">
      <article className="container mx-auto py-28 text-white flex flex-col gap-8">
        <h2 className="text-4xl">
          About <span className="text-orange-300 font-bold">Me</span>
        </h2>
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
            <div className="flex gap-4 items-center justify-center">
              <div className="w-1/2 flex flex-col items-end justify-center gap-3 text-end border-r-2 border-gray-700 pr-4">
                <h4 className="">
                  Mi chatBot personalizado estara encantado de resolverte todas
                  las dudas
                </h4>
                <button className="bg-orange-400 rounded-full px-8 py-3 font-bold text-white mt-4 group w-48">
                  <span className="inline-block transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                    {texts.buttons.chatbot}
                  </span>
                </button>
              </div>
              <div className="w-1/2 flex flex-col items-start justify-center gap-3 text-start">
                <h4 className="">Contactame directamente, estare encantado de resolverte tus dudas</h4>
                <button className="bg-orange-400 rounded-full px-8 py-3 font-bold text-white mt-4 group w-48">
                  <span className="inline-block transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                    {texts.buttons.contact}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
