"use client";
import React, {useRef} from "react";
import emailjs from "@emailjs/browser";

function Join() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          form.current.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className='flex px-[2rem] gap-[10rem]' id='join'>
      {/* left */}
      <div className='text-white font-bold relative flex flex-col gap-[2rem] text-5xl'>
        <hr className='absolute border-[2px] text-pink w-[11rem] rounded-full -m-[10px]' />
        <div>
          <span className='storoke-text'>いますぐ</span>
          <span>確実に</span>
        </div>
        <div>
          <span>レベルアップ</span>
          <span className='storoke-text'>できる</span>
        </div>
      </div>

      {/* right  */}
      <div className='flex justify-center items-end'>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='flex gap-[3rem] bg-gray py-[1rem] px-[2rem]'
        >
          <input
            type='email'
            name='user_email'
            placeholder='Email Address'
            className='bg-transparent border-none outline-none bg-white text-center placeholder:text-lightGray'
          />
          <button className='w-[6rem] text-white bg-pink p-[0.5rem] border-[2px] border-transparent font-bold'>
            Join
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
