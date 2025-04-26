import React from "react";
import localFont from "next/font/local"
const redditFont = localFont({
  src: [
    {
      path: '../public/fonts/RedditSans.ttf',
      weight: '800'
    },
  ],
});

export default function Go() {
  return (
    <main className="flex flex-col lg:flex-row items-center max-h-screen min-h-screen p-24">
      <div className="flex-col items-center text-center lg:text-left text-sm top-0 z-10 h-full w-full max-w-5xl lg:flex">
        <div>
          <p className="font-bold left-0 mx-auto text-5xl text-slate-200 top-0 tracking-tight w-full lg:pt-8 lg:static lg:rounded-xl">
            Donald R. Franks
          </p>
          <p className="font-medium text-center lg:text-left left-0 mx-auto text-xl text-slate-400 tracking-tight top-0 w-full lg:static lg:pt-0 lg:rounded-xl">
            Senior Software Engineer @ <span className={`${redditFont.className} text-[#FF4500] ml-1`}>reddit</span>
          </p>
          <p className="font-light text-center text-xs sm:text-sm lg:text-left mt-4 left-0 mx-auto text-slate-400 tracking-normal top-0 w-full lg:static lg:pt-0 lg:rounded-xl">
            I build intuitive UIs, robust backend systems, and scalable APIs.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-12 max-h-screen overflow-scroll h-full lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
        <span
          className="group rounded-lg pl-4 border border-transparent py-4 transition-colors"
        >
          <h2 className="items-center flex flex-row justify-between mb-0 text-md md:text-lg lg:w-9/12 font-semibold">
            <span>
              Reddit <span className="text-sm">|</span> Senior Software Engineer
            </span>
            <span className="text-right text-sm">
              2021 - Present
            </span>
          </h2>
          <p className="m-0 mt-1 lg:w-3/4 text-sm text-slate-400">
            At Reddit, I work on the Experimentation Team, where we develop a platform that empowers teams to seamlessly create, manage, and analyze experiments. I had the privilege of building the Experiments API, a gRPC service that streamlines the automation of experiment creation and management across services.
          </p>
          <p className="m-0 mt-4 lg:w-3/4 text-sm text-slate-400">
          From implementing Mutually Exclusive Groups to redesigning our Experimentation UI, to overhauling our backend architecture, I have been fortunate to play a role in shaping the future of our platform.
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-md bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-400">TypeScript</div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-md bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-400">Lit-Element</div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-md bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-400">Python</div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-md bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-400">gRPC</div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-md bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-400">Postgres</div>
            </li>
          </ul>
        </span>
        <span
          className="group rounded-lg pl-4 border border-transparent py-4 transition-colors"
        >
          <h2 className="items-center flex flex-row justify-between mb-0 text-md md:text-lg lg:w-9/12 font-semibold">
            <span>
              Apple Inc. <span className="text-sm">|</span> Frontend Developer
            </span>
            <span className="text-right text-sm">
              2018 - 2021
            </span>
          </h2>
          <p className="m-0 mt-1 lg:w-3/4 text-sm text-slate-400">
            Complex, customized, feature-rich dashboards were my bread and butter at Apple. I utilized D3.js to track and visualize the progress and regressions for upcoming releases.
            With over 100 dashboards tailored to various teams across Software Engineering, I was able to negotiate with sponsors, stakeholders, and managers to implement feedback and integrate enhancements.
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-md bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-400">React</div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-md bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-400">FastAPI</div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-md bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-400">Jenkins</div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-md bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-400">GraphQL</div>
            </li>
          </ul>
        </span>
      </div>
    </main>
  );
}
