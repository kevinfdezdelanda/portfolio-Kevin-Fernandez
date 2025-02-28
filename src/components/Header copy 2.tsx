import React from "react";
import NavList from "./NavList";
import { useLanguage } from "../context/LanguageContext";
import en from "../i18n/en.json";
import es from "../i18n/es.json";
import LanguageSelector from "./LanguageSelector";

const Header: React.FC = () => {
  const { language } = useLanguage();
  const texts = language === "es" ? es : en;

  return (
    <header className="custom-container p-3 pt-2 z-10 absolute top-0 left-1/2 transform -translate-x-1/2">
      <nav className="grid grid-flow-col grid-cols-14 relative bg-gray-900 my-3 border rounded-full p-5 py-2 text-white font-light ">
        <NavList
          classNames="col-span-5 col-start-2"
          items={[texts.nav.about, texts.nav.career, texts.nav.hardSkills]}
        />
        <div className="flex items-center justify-center col-span-2">
          <a href="#Section-0" className="bg-orange-400 rounded-bl-3xl rounded-tr-3xl px-5 *: py-2 font-bold text-xl transition-all duration-300 ease-in-out group ">
            <span className="-scale-x-100 -mr-0.5 inline-block group-hover:scale-x-100 transition-all duration-200 ease-in-out">
              K
            </span>
            <span className="max-w-0 inline-flex transition-all duration-300 ease-in-out overflow-hidden group-hover:max-w-96 mr-0.5">
              evin
            </span>
            <span>F</span>
          </a>
        </div>
        <NavList
          classNames="col-span-5 col-end-14"
          items={[texts.nav.softSkills, texts.nav.projects, texts.nav.contact]}
        />
        <span className="absolute right-14 top-1/2 -translate-y-1/2">
          <LanguageSelector />
        </span>
      </nav>
    </header>
  );
};

export default Header;
