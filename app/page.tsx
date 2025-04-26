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

const separator = <span className="text-[10px] sm:text-sm">|</span>;

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <li className="mr-1.5 mt-2">
      <div className="flex items-center rounded-md bg-sky-400/10 px-2 sm:px-3 py-0.5 sm:py-1.5 text-[10px] sm:text-xs font-medium leading-5 text-sky-400">
        {children}
      </div>
    </li>
  );
};

const Company: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  return (
    <span className="group rounded-lg pl-4 border border-transparent py-4 transition-colors">
      {children}
    </span>
  );
};

const LatestPosition: React.FC<{
  companyName: string;
  position: string;
  startDate: string;
  endDate?: string;
}> = ({ companyName, position, startDate, endDate }) => (
  <h2 className="items-center flex flex-row justify-between mb-0 lg:w-9/12 font-semibold text-sm md:text-lg">
    <span>{companyName} {separator} {position}</span>
    <span className="text-right text-xs sm:text-sm">{startDate} - {endDate || "Present"}</span>
  </h2>
);

const PreviousPosition: React.FC<{
  position: string;
  startDate: string;
  endDate: string;
}> = ({ position, startDate, endDate }) => (
  <h4 className="items-center flex flex-row justify-between last-of-type:mb-2 lg:w-9/12 text-[12px] md:text-sm font-light text-slate-400">
    <span>{position}</span>
    <span className="text-right text-[10px] md:text-[12px]">{startDate} - {endDate}</span>
  </h4>
);

const Experience: React.FC<{ children: React.ReactNode}> = ({ children }) => (
  <p className="m-0 mt-4 first-of-type:mt-1 lg:w-3/4 text-xs md:text-sm text-slate-400">
    {children}
  </p>
);

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row items-center max-h-screen min-h-screen p-12 md:p-24">
      <div className="top-0 flex-col items-center h-full w-full max-w-5xl lg:flex text-center lg:text-left text-sm">
        <div>
          <p className="left-0 mx-auto top-0 w-full lg:pt-8 font-bold text-4xl md:text-5xl text-slate-200 tracking-tight">
            Donald R. Franks
          </p>
          <p className="left-0 mx-auto top-0 w-full font-medium text-center lg:text-left text-md md:text-xl text-slate-400 tracking-tight">
            Senior Software Engineer @ <span className={`${redditFont.className} text-[#FF4500] ml-0.5`}>reddit</span>
          </p>
          <p className="left-0 mx-auto mt-2 md:mt-4 top-0 w-full font-light text-center lg:text-left text-xs md:text-sm text-slate-400 tracking-normal">
            I build intuitive UIs, robust backend systems, and scalable APIs.
          </p>
        </div>
      </div>

      <div className="flex flex-col max-h-screen h-full mt-4 md:mt-0 md:gap-12 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
        <Company>
          <LatestPosition
            companyName="Reddit"
            position="Senior Software Engineer"
            startDate="Apr 2025"
          />
          <PreviousPosition
            position="Software Engineer III"
            startDate="Jul 2022"
            endDate="Apr 2025"
          />
          <PreviousPosition
            position="Software Engineer II"
            startDate="Sep 2021"
            endDate="Jul 2022"
          />
          <Experience>
            At Reddit, I work on the Experimentation Team, where we develop a platform that empowers teams to seamlessly create, manage, and analyze experiments. I had the privilege of building the Experiments API, a gRPC service that streamlines the automation of experiment creation and management across services.
          </Experience>
          <Experience>
            From implementing Mutually Exclusive Groups to redesigning our Experimentation UI, to overhauling our backend architecture, I have been fortunate to play a role in shaping the future of our platform.
          </Experience>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <Badge>TypeScript</Badge>
            <Badge>Lit-Element</Badge>
            <Badge>Python</Badge>
            <Badge>gRPC</Badge>
            <Badge>Postgres</Badge>
            <Badge>Redis</Badge>
          </ul>
        </Company>
        <Company>
          <LatestPosition
            companyName="Apple Inc."
            position="Frontend Developer"
            startDate="2018"
            endDate="Sep 2021"
          />
          <Experience>
            Complex, customized, feature-rich dashboards were my bread and butter at Apple. I utilized D3.js to track and visualize the progress and regressions for upcoming releases.
            With over 100 dashboards tailored to various teams across Software Engineering, I was able to negotiate with sponsors, stakeholders, and managers to implement feedback and integrate enhancements.
          </Experience>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <Badge>React</Badge>
            <Badge>D3.js</Badge>
            <Badge>FastAPI</Badge>
            <Badge>Jenkins</Badge>
            <Badge>GraphQL</Badge>
          </ul>
        </Company>
      </div>
    </main>
  );
}
