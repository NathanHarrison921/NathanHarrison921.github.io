import Image from "next/image";
import { EXPERIENCE, EDUCATION } from "@/constants";

const maxLength = Math.max(EXPERIENCE.length, EDUCATION.length);

const DualTimeline = () => (
  <section className="flex flex-col items-center justify-center py-20 w-full">
    <h1 className="text-[40px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 drop-shadow-lg text-center w-full">
      My Journey
    </h1>
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-8 px-4 md:px-10">
      {/* Experience (Left) */}
      <div className="flex-1 flex flex-col items-end">
        {Array.from({ length: maxLength }).map((_, idx) => (
          <div key={idx} className="flex items-center justify-end min-h-[140px] mb-8">
            {EXPERIENCE[idx] ? (
              <div className="flex flex-col items-end w-11/12 pr-8">
                <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center">
                  <Image
                    src={EXPERIENCE[idx].image}
                    alt={EXPERIENCE[idx].title}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-purple-400 shadow-lg bg-white mb-4"
                  />
                  <h2 className="text-2xl font-bold text-white mb-2 drop-shadow text-center">
                    {EXPERIENCE[idx].title} <span className="text-cyan-300 font-semibold">@ {EXPERIENCE[idx].company}</span>
                  </h2>
                  <div className="text-xs text-gray-400 mb-2 tracking-widest">
                    {EXPERIENCE[idx].years}
                  </div>
                  <div className="text-sm text-gray-200 mt-2 text-center">
                    {EXPERIENCE[idx].description}
                  </div>
                </div>
              </div>
            ) : <div className="w-11/12 pr-8" />}
          </div>
        ))}
      </div>
      {/* Education (Right) */}
      <div className="flex-1 flex flex-col items-start">
        {Array.from({ length: maxLength }).map((_, idx) => (
          <div key={idx} className="flex items-center justify-start min-h-[140px] mb-8">
            {EDUCATION[idx] ? (
              <div className="flex flex-col items-start w-11/12 pl-8">
                <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center">
                  <Image
                    src={EDUCATION[idx].image}
                    alt={EDUCATION[idx].degree}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-cyan-400 shadow-lg bg-white mb-4"
                  />
                  <h2 className="text-2xl font-bold text-white mb-2 drop-shadow">
                    {EDUCATION[idx].degree}
                  </h2>
                  <div className="text-lg text-cyan-300 font-semibold mb-1">
                    {EDUCATION[idx].institution}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 tracking-widest">
                    {EDUCATION[idx].years}
                  </div>
                </div>
              </div>
            ) : <div className="w-11/12 pl-8" />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DualTimeline; 