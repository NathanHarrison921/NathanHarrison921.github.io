import React from "react";
import Image from "next/image";
import { EXPERIENCE } from "@/constants";

const Experience = () => (
  <section id="experience" className="flex flex-col items-center justify-center py-20">
    <h1 className="text-[40px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 drop-shadow-lg">
      My Experience
    </h1>
    <div className="flex flex-col items-center w-full px-10">
      <div className="relative flex flex-col items-center w-full max-w-xl mx-auto">
        {/* Timeline vertical line on the left */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500 z-0" />
        {/* Timeline items */}
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="relative z-10 flex items-center w-full mb-16">
            {/* Dot */}
            <div className="flex flex-col items-center w-1/12 min-w-[3rem]">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-white shadow-lg" />
            </div>
            {/* Card */}
            <div className="flex flex-col items-start w-11/12 pl-8">
              <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-purple-400 shadow-lg bg-white mb-4"
                />
                <h2 className="text-2xl font-bold text-white mb-2 drop-shadow text-center">
                  {exp.title} <span className="text-cyan-300 font-semibold">@ {exp.company}</span>
                </h2>
                <div className="text-xs text-gray-400 mb-2 tracking-widest">
                  {exp.years}
                </div>
                <div className="text-sm text-gray-200 mt-2 text-center">
                  {exp.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience; 