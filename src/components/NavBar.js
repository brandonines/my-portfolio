import React from "react";
import { NavLink } from "react-router-dom";
import {SocialMediaIconsReact} from 'social-media-icons-react';
import logo from "../Logo.png"


export default function NavBar() {

  return (
    <header className="bg-slate-50 flex">
      <NavLink 
            to="/" 
            className="inline-flex items-center px-3 hover:bg-orange-200 transition delay-85 duration-300 ease-in-out"
          >
            <img src={logo} alt="Logo" className="h-16 w-16"/>
      </NavLink>
      <div className="container mx-auto flex justify-between lato w-screen">
        <nav className="flex">
          <NavLink
            to="/about"
            className="inline-flex items-center px-3 rounded text-stone-900 hover:text-orange-300 transition delay-85 duration-300 ease-in-out"
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="inline-flex items-center px-3 rounded text-stone-900 hover:text-orange-300 transition delay-85 duration-300 ease-in-out"
          >
            Projects
          </NavLink>
          <NavLink
            to="/posts"
            className="inline-flex items-center px-3 rounded text-stone-900 hover:text-orange-300 transition delay-85 duration-300 ease-in-out"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className="inline-flex items-center px-3 rounded text-stone-900 hover:text-orange-300 transition delay-85 duration-300 ease-in-out"
          >
            Contact
          </NavLink>
        </nav>
        <div className="inline-flex my-4">
          <div className="mr-4">
            <SocialMediaIconsReact
              target="_blank"
              fgColor="#fff" 
              borderColor="rgba(0,0,0,0.25)" 
              borderWidth="0" 
              borderStyle="solid" 
              icon="linkedin" 
              iconColor="rgba(255,255,255,1)" 
              backgroundColor="rgba(26,166,233,1)" 
              iconSize="5" roundness="17%" 
              url="https://www.linkedin.com/in/brandon-ines/" 
              // size="35"
              sytle={{ height: 35, width: 35 }} 
            />
          </div>
          <div className="mr-4">
            <SocialMediaIconsReact 
              target="_blank" 
              fgColor="#fff" 
              borderColor="rgba(0,0,0,0.25)" 
              borderWidth="0" 
              borderStyle="solid" 
              icon="github" 
              iconColor="rgba(255,255,255,1)" 
              backgroundColor="rgba(54,56,58,1)" 
              iconSize="5" 
              roundness="17%" 
              url="https://github.com/brandonines" 
              sytle={{ height: 35, width: 35 }} 
            />
          </div>
        </div>
      </div>
    </header>
  );
}
