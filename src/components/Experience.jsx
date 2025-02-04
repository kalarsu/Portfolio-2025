import React from "react";
import resumePdf from "../assets/documents/Chi_Su_Resume.pdf";
import {HiArrowNarrowRight} from "react-icons/hi";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-auto sm:h-screen bg-[#0a192f] text-gray-300"
      aria-label="Work experience"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full">
          <div className="pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-700">
              Experience
            </p>
          </div>
          <div>
            <ol className="group/list">
              <li className="mb-6 sm:mb-12">
                <div className="group relative grid pb-4 pr-4 transition-all sm:grid-cols-8 gap-4 sm:gap-8">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 mx-4 sm:group-hover:bg-slate-700/25 sm:group-hover:shadow-slate-950 sm:group-hover:drop-shadow-lg w-full h-auto rounded-md border-t-slate-300"></div>
                  <header
                    className="sm:col-span-2 text-xs text-[#8992b0] pt-1 mb-4 font-semibold uppercase tracking-wide text-left sm:text-right"
                    aria-label="2017 - 2024">2017 - 2024</header>
                  <div className="z-10 sm:col-span-6 pb-2">
                    <h3 className="font-medium leading-snug text-gray-300 tracking-wide">
                      <a
                        href="https://www.firstrepublic.com"
                        target="_blank"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-orange-500 focus-visible:text-orange-500  group/link text-base"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Senior Frontend Engineer - First Republic Bank <HiArrowNarrowRight className="inline-block -rotate-45 ml-1 transition-transform group-hover:-translate-y-1" />
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-[#8992b0] tracking-wide">
                      Developed and maintained critical front-end components to
                      build responsive and accessible web experiences at First
                      Republic Bank. Collaborated with back-end developers, UX
                      designers, and content teams to integrate APIs, optimize
                      performance, and ensure ADA compliance. Implemented best
                      practices in testing, code linting, and version control to
                      enhance code quality and maintainability.
                    </p>
                    <ul className="mt-2 flex flex-wrap">
                        <li className="mr-1">
                            <div className="flex text-center text-xs text-orange-600 tracking-wide py-1 px-3 mb-2 rounded-full bg-teal-300/10">
                                Javascript
                            </div>
                        </li>
                        <li className="mr-1">
                            <div className="flex text-center text-xs text-orange-600 tracking-wide py-1 px-3 mb-2 rounded-full bg-teal-300/10">
                                JQuery
                            </div>
                        </li>
                        <li className="mr-1">
                            <div className="flex text-center text-xs text-orange-600 tracking-wide py-1 px-3 mb-2 rounded-full bg-teal-300/10">
                                React
                            </div>
                        </li>
                        <li className="mr-1">
                            <div className="flex text-center text-xs text-orange-600 tracking-wide py-1 px-3 mb-2 rounded-full bg-teal-300/10">
                                Tailwind CSS
                            </div>
                        </li>
                        <li className="mr-1">
                            <div className="flex text-center text-xs text-orange-600 tracking-wide py-1 px-3 mb-2 rounded-full bg-teal-300/10">
                                Foundation
                            </div>
                        </li>
                        <li className="mr-1">
                            <div className="flex text-center text-xs text-orange-600 tracking-wide py-1 px-3 mb-2 rounded-full bg-teal-300/10">
                                Jest
                            </div>
                        </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="mb-6 sm:mb-12">
                <div className="group relative grid pb-4 pr-4 transition-all sm:grid-cols-8 gap-4 sm:gap-8">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 mx-4 sm:group-hover:bg-slate-700/25 sm:group-hover:shadow-slate-950 sm:group-hover:drop-shadow-lg w-full h-auto rounded-md border-t-slate-300"></div>
                  <header
                    className="sm:col-span-2 text-xs text-[#8992b0] pt-1 mb-4 font-semibold uppercase tracking-wide text-left sm:text-right"
                    aria-label="2024"
                  >
                    2015 - 2017
                  </header>
                  <div className="z-10 sm:col-span-6 pb-2">
                    <h3 className="font-medium leading-snug text-gray-300 tracking-wide">
                      <a
                        href="https://www.kabam.com"
                        target="_blank"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-orange-500 focus-visible:text-orange-500  group/link text-base"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Frontend Engineer - Kabam Inc. <HiArrowNarrowRight className="inline-block -rotate-45 ml-1 transition-transform group-hover:-translate-y-1" /></span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-[#8992b0] tracking-wide">
                      Recreated and enhanced a corporate website using WordPress
                      with Gulp, Sass, Compass, jQuery, JavaScript, HTML5, CSS3,
                      Bootstrap, JSON, and Ajax to ensure a responsive,
                      maintainable, and high-performance codebase. Customized
                      themes and plugins to showcase multimedia galleries and
                      widgets, integrated JobVite JSON data via PHP for
                      efficient database querying, and refactored CSS
                      architecture to improve reusability and maintainability.
                      Designed and updated responsive UI layouts that
                      strengthened brand identity while collaborating with
                      stakeholders to translate user needs into detailed project
                      designs and implementation plans.
                    </p>
                    <ul className="mt-2 flex flex-wrap">
                        <li className="mr-1">
                            <div className="flex text-center text-xs text-orange-600 tracking-wide py-1 px-3 mb-2 rounded-full bg-teal-300/10">
                                Javascript
                            </div>
                        </li>
                        <li className="mr-1">
                            <div className="flex text-center text-xs text-orange-600 tracking-wide py-1 px-3 mb-2 rounded-full bg-teal-300/10">
                                JQuery
                            </div>
                        </li>
                        <li className="mr-1">
                            <div className="flex text-center text-xs text-orange-600 tracking-wide py-1 px-3 mb-2 rounded-full bg-teal-300/10">
                                PHP
                            </div>
                        </li>
                        <li className="mr-1">
                            <div className="flex text-center text-xs text-orange-600 tracking-wide py-1 px-3 mb-2 rounded-full bg-teal-300/10">
                            Bootstrap
                            </div>
                        </li>
                        <li className="mr-1">
                            <div className="flex text-center text-xs text-orange-600 tracking-wide py-1 px-3 mb-2 rounded-full bg-teal-300/10">
                            WordPress
                            </div>
                        </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="mb-6 sm:mb-12">
                <div className="group relative grid pb-4 pr-4 transition-all sm:grid-cols-8 gap-4 sm:gap-8">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 mx-4 sm:group-hover:bg-slate-700/25 sm:group-hover:shadow-slate-950 sm:group-hover:drop-shadow-lg w-full h-auto rounded-md border-t-slate-300"></div>
                  <header
                    className="sm:col-span-2 text-xs text-[#8992b0] pt-1 mb-4 font-semibold uppercase tracking-wide text-left sm:text-right"
                    aria-label="2024"
                  >
                    2012 - 2014
                  </header>
                  <div className="z-10 sm:col-span-6 pb-2">
                    <h3 className="font-medium leading-snug text-gray-300 tracking-wide">
                      <a
                        href="https://www.westernunion.com"
                        target="_blank"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-orange-500 focus-visible:text-orange-500  group/link text-base"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Frontend Engineer - Western Union <HiArrowNarrowRight className="inline-block -rotate-45 ml-1 transition-transform group-hover:-translate-y-1" /></span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-[#8992b0] tracking-wide">
                      Recreated and enhanced a corporate website using WordPress
                      with Gulp, Sass, Compass, jQuery, JavaScript, HTML5, CSS3,
                      Bootstrap, JSON, and Ajax to ensure a responsive,
                      maintainable, and high-performance codebase. Customized
                      themes and plugins to showcase multimedia galleries and
                      widgets, integrated JobVite JSON data via PHP for
                      efficient database querying, and refactored CSS
                      architecture to improve reusability and maintainability.
                      Designed and updated responsive UI layouts that
                      strengthened brand identity while collaborating with
                      stakeholders to translate user needs into detailed project
                      designs and implementation plans.
                    </p>
                    <ul className="mt-2 flex flex-wrap">
                        <li className="mr-1">
                            <div className="flex text-center text-xs text-orange-600 tracking-wide py-1 px-3 mb-2 rounded-full bg-teal-300/10">
                                Javascript
                            </div>
                        </li>
                        <li className="mr-1">
                            <div className="flex text-center text-xs text-orange-600 tracking-wide py-1 px-3 mb-2 rounded-full bg-teal-300/10">
                                JQuery
                            </div>
                        </li>
                        <li className="mr-1">
                            <div className="flex text-center text-xs text-orange-600 tracking-wide py-1 px-3 mb-2 rounded-full bg-teal-300/10">
                            AngularJS
                            </div>
                        </li>
                        <li className="mr-1">
                            <div className="flex text-center text-xs text-orange-600 tracking-wide py-1 px-3 mb-2 rounded-full bg-teal-300/10">
                            Bootstrap
                            </div>
                        </li>
                        <li className="mr-1">
                            <div className="flex text-center text-xs text-orange-600 tracking-wide py-1 px-3 mb-2 rounded-full bg-teal-300/10">
                            Adobe DTM
                            </div>
                        </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ol>
            <div className="mt-4 mb-40 sm:mt-6 sm:mb-4 pl-4 sm:pl-0 grid sm:grid-cols-8 gap-4 sm:gap-8">
              <div className="sm:col-span-2"></div>
              <div className="col-span-8 sm:col-span-6 font-medium font-semibold text-[#8992b0]">
                <a
                  className="hover:text-orange-500 group flex items-center"
                  href={resumePdf}
                  target="_blank"
                >
                  <span className="inline">View Full Resume <HiArrowNarrowRight aria-label="External Link Icon" className="inline-block -rotate-45 ml-1 transition-transform group-hover:-translate-y-1" /></span>
                  {/* <span className="inline -rotate-45 pt-0.5 group-hover:rotate-90 duration-300">
                    
                  </span> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
