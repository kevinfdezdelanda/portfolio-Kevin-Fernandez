import { useState } from "react";
import React from 'react';
import NavList from "./NavList";



const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-3 pt-2">
      <nav className="flex justify-evenly content-center bg-gray-900 m-3 border rounded-full p-5 py-2 text-white font-light">
        <NavList items={['Sobre mi', 'Trayectoria', 'Hard skills']} />
        <span className="bg-orange-500 rounded-full px-6 py-2 font-bold">Kevin Fdez</span>
        <NavList items={['Soft skills', 'Proyectos', 'Contacto']} />
      </nav>
    </header>
  );
};

export default Header;

