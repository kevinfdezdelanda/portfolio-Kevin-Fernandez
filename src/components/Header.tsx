import { useState } from "react";
import React from "react";
import NavList from "./NavList";
import { useLanguage } from "../context/LanguageContext";
import en from "../i18n/en.json";
import es from "../i18n/es.json";
import LanguageSelector from "./LanguageSelector";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage();
  const texts = language === "es" ? es : en;

  return (
    <header className="p-3 pt-2 ">
      <nav className="flex justify-evenly relative content-center bg-gray-900 m-3 border rounded-full p-5 py-2 text-white font-light max-w-11/12 mx-auto">
        <NavList
          items={[texts.nav.about, texts.nav.career, texts.nav.hardSkills]}
        />
        <span className="bg-orange-400 rounded-bl-3xl rounded-tr-3xl px-5 *: py-2 font-bold text-xl">
          <span className="-scale-x-100 -mr-0.5 inline-block">K</span>F
        </span>
        <NavList
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
