import Image from "next/image";
import { EDUCATION } from "@/constants";

const edu = EDUCATION[0];

const Education = () => (
  <section id="education" className="flex flex-col items-center justify-center py-20">
    <h1 className="text-[40px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 drop-shadow-lg">
      My Education
    </h1>
    <div className="flex flex-col items-center w-full px-10">
      <div className="relative flex flex-col items-center w-full max-w-xl mx-auto">
        {/* Timeline vertical line on the right */}
        <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500 z-0" />
        {/* Timeline item */}
        <div className="relative z-10 flex items-center w-full mb-8 justify-end">
          {/* Card */}
          <div className="flex flex-col items-end w-11/12 pr-8">
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
          {/* Dot */}
          <div className="flex flex-col items-center w-1/12 min-w-[3rem]">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-white shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education; 