import React,{useEffect} from "react";
import "../Elements/Header.css";

const Header = () => {

  
  return (
    <>
      <header class="text-slate-600 bg-white-900 body-font shadow-lg ">
        <div class="container mx-auto flex justify-around  p-5 flex-col md:flex-row items-center">
          <nav class="nav-menu flex  w-fit flex-wrap items-center text-base  ">
            <a href="/" class="mr-5 hover:text-black  cursor-pointer ">
              Home
            </a>
            <a href="/about" class="mr-5 hover:text-black cursor-pointer">
              About
            </a>
            <a href="/committee" class="mr-5 hover:text-black cursor-pointer">
              Committee
            </a>
          </nav>
          <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
            <span class="ml-2 text-xl xl:block lg:hidden text-black">Logo</span>
          </a>
          <nav class=" nav-menu flex   w-fit flex-wrap items-center text-base md:ml-0 ">
            <a href="/facilities" class="mr-5 hover:text-black cursor-pointer">
              Facilities
            </a>
            <a href="/expo" class="mr-5 hover:text-black cursor-pointer">
              Expo 2024
            </a>
            <a href="/contact" class="mr-5 hover:text-black cursor-pointer">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
