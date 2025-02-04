import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pb-16 bg-[#0a192f] text-sm text-slate-500 p-4" aria-label="Footer section">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col max-w-[600px] w-full ">
          <p>
            Designed and developed using{" "}
            <a
              href="https://code.visualstudio.com/"
              class="font-medium text-slate-400 hover:text-orange-700 focus-visible:text-orange-700"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visual Studio Code (opens in a new tab)"
            >
              Visual Studio Code 
            </a>. Built with <a
              href="https://react.dev/"
              class="font-medium text-slate-400 hover:text-orange-700 focus-visible:text-orange-700"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="React.js (opens in a new tab)"
            >
              React.js 
            </a>,  
            <a
              href="https://tailwindcss.com/"
              class="font-medium text-slate-400 hover:text-orange-700 focus-visible:text-orange-700"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Tailwind CSS (opens in a new tab)"
            >
              Tailwind CSS 
            </a>, and deployed on <a
              href="https://vercel.com/"
              class="font-medium text-slate-400 hover:text-orange-700 focus-visible:text-orange-700"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Vercel (opens in a new tab)"
            >Vercel</a>.
            Typography is set in the <a
              href="https://fonts.google.com/specimen/Raleway/license"
              class="font-medium text-slate-400 hover:text-orange-700 focus-visible:text-orange-700"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Vercel (opens in a new tab)"
            >Raleway</a> typeface from Google Fonts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
