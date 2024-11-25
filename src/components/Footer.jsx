import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <img
            src="images/COnsulTechLogo.png"
            alt="Logo"
            className="w-[8rem] h-[5rem] mb-4"
          />
        </div>

       
        <div>
          <h4 className="text-lg font-bold mb-4">SERVICES</h4>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-cyan-400">
              Software Development
            </li>
            <li className="text-gray-400 hover:text-cyan-400">
              Software Testing
            </li>
            <li className="text-gray-400 hover:text-cyan-400">
              Software Operation
            </li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-bold mb-4">CONTACT US</h4>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-cyan-400">LinkedIn</li>
            <li className="text-gray-400 hover:text-cyan-400">E-Mail</li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-bold mb-4">ABOUT</h4>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-cyan-400">Privacy Policy</li>
            <li className="text-gray-400 hover:text-cyan-400">
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-gray-600 mt-8 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          © 2024 TIPiC™. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
