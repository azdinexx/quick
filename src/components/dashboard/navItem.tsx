import Link from 'next/link';
import React from 'react';

function NavItem({
  svg,
  title,
  href,
  border = true,
  active,
}: {
  svg: React.ReactNode;
  title: string;
  href: string;
  border?: boolean;
  active?: boolean;
}) {
  return (
    <li
      className={`${
        border ? 'border' : ''
      }  rounded-md text-stone-500 hover:bg-stone-100 hover:text-stone-400 border-stone-500/15 ${
        active
          ? 'bg-stone-100 border-stone-300 text-stone-400 relative after:absolute after:w-2 after:h-2 after:bg-blue-400 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:right-5 after:animate-pulse after:opacity-60       '
          : ''
      }}`}
    >
      <Link href={href} className='py-2 px-5 flex  items-center gap-3'>
        {svg}
        <span>{title}</span>
      </Link>
    </li>
  );
}

export default NavItem;
