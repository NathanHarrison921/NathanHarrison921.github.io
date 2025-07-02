import Image from "next/image";
import { EXPERIENCE, EDUCATION } from "@/constants";

const MergedTimeline = () => (
  <section className="flex flex-col items-center justify-center py-20 w-full">
    <h1 className="text-[40px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 drop-shadow-lg text-center w-full">
      My Journey
    </h1>
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-8 px-4 md:px-10">
      {/* Experience Timeline (Left) */}
      <div className="flex-1 flex flex-col items-end">
        <div className="relative flex flex-col items-end w-full max-w-xl">
          {/* Timeline vertical line on the right of this column */}
          <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500 z-0" />
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative z-10 flex items-center w-full mb-16 justify-end">
              {/* Card */}
              <div className="flex flex-col items-end w-11/12 pr-8">
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
              {/* Dot */}
              <div className="flex flex-col items-center w-1/12 min-w-[3rem]">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-white shadow-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Education Timeline (Right) */}
      <div className="flex-1 flex flex-col items-start">
        <div className="relative flex flex-col items-start w-full max-w-xl">
          {/* Timeline vertical line on the left of this column */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500 z-0" />
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="relative z-10 flex items-center w-full mb-16">
              {/* Dot */}
              <div className="flex flex-col items-center w-1/12 min-w-[3rem]">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-white shadow-lg" />
              </div>
              {/* Card */}
              <div className="flex flex-col items-start w-11/12 pl-8">
                <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center">
                  <Image
                    src={edu.image}
                    alt={edu.degree}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-cyan-400 shadow-lg bg-white mb-4"
                  />
                  <h2 className="text-2xl font-bold text-white mb-2 drop-shadow">
                    {edu.degree}
                  </h2>
                  <div className="text-lg text-cyan-300 font-semibold mb-1">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 tracking-widest">
                    {edu.years}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MergedTimeline; 