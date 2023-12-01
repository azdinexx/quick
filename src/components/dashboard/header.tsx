import React from 'react';

function Header() {
  return (
    <header className='py-3 px-10  w-full flex justify-between'>
      <div className='flex items-center gap-3 text-lg '>
        <div className='text-black w-10 aspect-square bg-black rounded-full'></div>
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
