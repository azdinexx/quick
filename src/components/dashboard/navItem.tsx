import Link from 'next/link';
import React from 'react';

function NavItem({
  svg,
  title,
  href,
  border = true,
}: {
  svg: React.ReactNode;
  title: string;
  href: string;
  border?: boolean;
}) {
  return (
    <li
      className={`${
        border ? 'border' : ''
      }  rounded-md text-stone-500 hover:bg-stone-100 hover:text-stone-400 border-stone-500/15`}
    >
      <Link href={href} className='py-2 px-5 flex  items-center gap-3'>
        {svg}
        <span>{title}</span>
      </Link>
    </li>
  );
}

export default NavItem;
