import React from "react";
import Image from "next/image";
import {IoMdCheckmarkCircleOutline} from "react-icons/io";

function Reasons() {
  return (
    <div
      className='grid grid-cols-2 px-[2rem] gap-[2rem]
      max-md:flex max-md:flex-col'
      id='reasons'
    >
      {/*左部 */}
      <div
        className='col-span-1 grid grid-cols-3 gap-[1rem] flex-1
        max-md:grid max-md:grid-flow-row max-md:overflow-hidden max-md:gap-[1rem]'
      >
        <Image
          src={"/assets/reason1.png"}
          width={200}
          height={400}
          alt='reason1'
          className='col-span-1 w-[12rem] h-[28rem] object-cover
          max-md:w-[7rem] max-md:h-[17rem]'
        />
        <div className='col-span-2 grid grid-cols-5 gap-[1rem]'>
          <Image
            src={"/assets/reason2.png"}
            width={300}
            height={200}
            alt='reason2'
            className='col-span-5 object-cover w-auto h-[16rem]
            max-md:w-[15rem] max-md:h-[10rem]'
          />
          <Image
            src={"/assets/reason3.png"}
            width={300}
            height={200}
            alt='reason3'
            className='col-span-2 object-cover w-[10rem] h-[11rem]
            max-md:w-[7rem] max-md:h-[6rem]'
          />
          <Image
            src={"/assets/reason4.png"}
            width={300}
            height={200}
            alt='reason4'
            className='col-span-3 object-cover w-[14rem] h-[11rem]
            max-md:w-[8rem] max-md:h-[6rem]'
          />
        </div>
      </div>

      {/*右部 */}
      <div className='col-span-1 flex flex-col gap-[1rem] flex-1'>
        <span className='font-bold text-pink'>Reasons</span>
        <div className='text-white text-5xl font-bold max-md:text-3xl'>
          <span className='storoke-text'>選ばれる</span>
          <span>理由</span>
        </div>

        <div className='flex flex-col gap-[1rem] '>
          <div className='flex text-lg text-white gap-[1rem]'>
            <IoMdCheckmarkCircleOutline className='text-4xl text-pink' />
            <p>140人以上のコーチ</p>
          </div>
          <div className='flex text-lg text-white gap-[1rem]'>
            <IoMdCheckmarkCircleOutline className='text-4xl text-pink' />
            <p>マンツーマンの個別レッスン</p>
          </div>
          <div className='flex text-lg text-white gap-[1rem]'>
            <IoMdCheckmarkCircleOutline className='text-4xl text-pink' />
            <p>24時間いつでも使える!</p>
          </div>
          <div className='flex text-lg text-white gap-[1rem]'>
            <IoMdCheckmarkCircleOutline className='text-4xl text-pink' />
            <p>実力に合わせた徹底指導</p>
          </div>
        </div>

        <div>
          <p className='text-gray'>提携パートナー</p>
          <div className='flex gap-[1rem] p-[1rem]'>
            <Image
              src={"/assets/logo1.png"}
              width={50}
              height={40}
              alt='logo1'
            />
            <Image
              src={"/assets/logo2.png"}
              width={50}
              height={40}
              alt='logo2'
            />
            <Image
              src={"/assets/logo3.png"}
              width={50}
              height={40}
              alt='logo3'
            />
            <Image
              src={"/assets/logo4.png"}
              width={50}
              height={40}
              alt='logo4'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
