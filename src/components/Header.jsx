import React from "react";

export default function Header() {
  return (
    <div className="bg-cover bg-center" >
      <header className="flex items-center justify-between px-10 py-4 bg-[#000] text-white">
        <div className="flex items-center space-x-3">
          <img src="images/ConsulTechLogo.png" alt="Logo" className="w-[6rem] h-12" />
        </div>

        <nav className="flex space-x-8 text-lg font-medium">
          <a href="#home" className="hover:text-cyan-400">HOME</a>
          <a href="#services" className="hover:text-cyan-400">OUR SERVICES</a>
          <a href="#about" className="hover:text-cyan-400">ABOUT US</a>
          <a href="#contact" className="hover:text-cyan-400">CONTACT US</a>
        </nav>
      
      </header>
    </div>


  );
}
