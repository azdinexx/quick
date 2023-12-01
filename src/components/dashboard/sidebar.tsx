import React from 'react';
import { Quick } from '../logo/svg';
import NavItem from './navItem';
import { Car } from './icones/car';
import { Register } from './icones/register';
import { Tutorials } from './icones/Tutorials';
import { Help } from './icones/Help';

function Sidebar() {
  return (
    <aside className='border-r bg-stone-50 p-3 min-w-[280px] w-1/6 h-screen flex flex-col gap-2 '>
      <section className='  p-1'>
        <Quick />
      </section>
      <input
        type='text'
        placeholder='shortcut'
        className='border p-2 bg-stone-100 text-stone-600 rounded-md'
      />
      <nav className='pt-5 pb-10 border-b'>
        <ul className='flex flex-col gap-3'>
          {navigation.map((item, index) => (
            <NavItem
              key={index}
              href={item.href}
              svg={item.svg}
              title={item.title}
            />
          ))}
        </ul>
      </nav>
      <div className='flex flex-col pt-5'>
        <div className='flex justify-between items-center text-stone-400 p-2'>
          <span className='text-sm '>Favorites</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            className='hover:text-stone-500'
          >
            <path
              fill='currentColor'
              fill-rule='evenodd'
              d='M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z'
            />
          </svg>
        </div>
        <ul className='flex flex-col gap-2 py-2'>
          {Favorites.map((item, index) => (
            <NavItem
              border={false}
              key={index}
              href={item.href}
              svg={item.svg}
              title={item.title}
            />
          ))}
        </ul>
      </div>
      <div className='flex-grow'></div>
      <div className='flex flex-col gap-3'>
        <button className='border rounded-md p-2 bg-stone-100 text-stone-600'>
          logout
        </button>
        <button className='border rounded-md p-2 bg-blue-900 text-white'>
          settings
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;

const navigation = [
  {
    title: 'register',
    href: '/dashboard/register',
    svg: <Register />,
  },
  {
    title: 'car listings',
    href: '/dashboard/car-listings',
    svg: <Car />,
  },
];

const Favorites = [
  {
    title: 'tutorials',
    href: '/tutorials',
    svg: <Tutorials />,
  },
  {
    title: 'help',
    href: '/help',
    svg: <Help />,
  },
];
