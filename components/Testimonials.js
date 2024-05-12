import React from "react";
import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";

function Testimonials() {
  return (
    <div className='flex gap-[1rem] px-[2rem]' id='testimonials'>
      {/* 左側 */}
      <div className='flex flex-col flex-1 gap-[2rem] text-white'>
        <span className='text-pink font-bold'>Testimonials</span>
        <div>
          <span className='storoke-text font-bold text-5xl'>生徒の</span>
          <span className='font-bold text-5xl'>みなさんに</span>
        </div>
        <span className='font-bold text-5xl'>聞いてみました!!</span>
        <span className='text-justify tracking-wider leading-[2.5rem] normal-case'>
          レビュー
        </span>
        <span>
          <span className='text-pink'>name</span>
          場所
        </span>
      </div>

      {/* 右側 */}
      <div className='flex-1 relative'>
        <div className='absolute w-[16rem] h-[20rem] right-[7rem] top-[2rem] bg-gradient-to-br from-yellow-500 to-green-400' />
        <div className='absolute w-[16rem] h-[20rem] right-[10rem] border-[2px] border-pink ' />

        <img
          src='/assets/client1.png'
          alt='client1'
          className='absolute w-[17rem] h-[20rem] object-cover top-[1rem] right-[8rem]'
        />
        <div className='flex gap-[1rem] absolute bottom-[1rem] left-[3rem]'>
          <FaArrowLeft className='text-2xl text-white cursor-pointer' />
          <FaArrowRight className='text-2xl text-white cursor-pointer' />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
