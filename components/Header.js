import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between '>
        <Image src={'/assets/logo.png'} alt='iamge' width={100} height={60} className='w-[7rem]'/>
        <div>
            <ul className='flex gap-[2rem] text-white'>
                <li className='cursor-pointer hover:text-pink'>ホーム</li>
                <li className='cursor-pointer hover:text-pink'>プログラム</li>
                <li className='cursor-pointer hover:text-pink'>選ばれる理由</li>
                <li className='cursor-pointer hover:text-pink'>プラン</li>
                <li className='cursor-pointer hover:text-pink'>参加者の声</li>
            </ul>
        </div>
    </div>
  )
}

export default Header