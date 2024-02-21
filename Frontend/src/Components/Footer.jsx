import React from "react";
import "../Elements/Footer.css";
import { MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer class="footer-section text-gray-400  body-font">
        <div class="container px-5 py-16 mx-auto">
          <div class="flex flex-wrap justify-between md:text-left text-center order-first">
            <div class="lg:w-2/4 md:w-1/2 w-full px-4">
              <h2 class="footer-about-title tracking-widest  mb-3">About us</h2>
              <p className="footer-about-content">
                WAPTAG, is a collective of water industry professionals and
                experts, fostering collaboration and innovation in water
                purification, treatment, filtration, and wastewater management.
              </p>
            </div>
            <div class="lg:w-2/4 md:w-1/2 w-full px-4">
              <h2 class="address-title text-white tracking-widest text-sm mb-3">
                Address
              </h2>
              <ul class="list-unstyled">
                <li>
                  <MdCall /> Office No. 808, 8th Floor,
                  Time Square Arcade, Opp- Rambaug, Nr. Ravija Plaza,
                  Thaltej-Shilaj Road, Thaltej, Ahmedabad - 380059
                </li>
                <li class="number">
                  <i class="fa fa-phone"></i>+91 99741 52935 / 99741 52936
                </li>
                <li>
                  <i class="fa fa-envelope"></i> info@waptag.org
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bg-gray-800 bg-opacity-75">
          <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p class="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
              © 2020 WAPTAI —
              <a
                href="https://twitter.com/knyttneve"
                class="text-gray-500 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @knyttneve
              </a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a class="text-gray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
