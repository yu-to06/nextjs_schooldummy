import {programsData} from "@/constants/programsData";
import React from "react";
import {FaArrowRight} from "react-icons/fa";

function Programs() {
  return (
    <div className='flex flex-col gap-[1rem] px-[2rem] ' id='programs'>
      {/* main部 */}
      <div
        className='flex gap-[5rem] font-bold text-5xl justify-center text-white italic
      max-md:flex-col max-md:gap-[1rem] max-md:text-3xl max-md:items-center max-md:justify-center max-md:mt-[2rem]'
      >
        <span className='storoke-text'>本スクール</span>
        <span>プログラム</span>
        <span className='storoke-text'>のメリット</span>
      </div>

      {/* card部 */}
      <div
        className='flex gap-[1rem] p-[1rem]
      max-md:flex-col'
      >
        {programsData.map((program) => (
          <div
            key={program.title}
            className='flex flex-col bg-gray p-[2rem] gap-[1rem] text-white justify-center hover:bg-gradient-to-br from-green-400 to-yellow-500'
          >
            <span className='text-4xl text-white'>{program.icon}</span>
            <p className='text-lg font-bold '>{program.title}</p>
            <p className='text-sm'>{program.details}</p>
            <a href={program.link} className='flex gap-[1rem]'>
              <p className='text-sm'>詳しく</p>
              <span className='text-xl cursor-pointer'>
                <FaArrowRight />
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
