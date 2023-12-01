import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <header className='py-3  w-full flex justify-between'>
      <div className='flex items-center gap-3 text-lg '>
        <div className='relative   w-10 overflow-hidden aspect-square  rounded-full'>
          <Image src={'/images/default.jpg'} alt='user image' fill />
        </div>
        <span>azdine bouali</span>
      </div>
      <div className='flex items-center gap-4 p-1 text-sm'>
        <button className='py-2 px-4 rounded-lg text-stone-900 shadow bg-stone-50'>
          edit
        </button>
        <button className='py-2 px-4 rounded-lg bg-blue-900 shadow text-white'>
          logout
        </button>
      </div>
    </header>
  );
}

export default Header;
