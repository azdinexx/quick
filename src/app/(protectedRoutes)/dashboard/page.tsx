import { Car } from '@/components/dashboard/icones/car';
import { Register } from '@/components/dashboard/icones/register';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function page() {
  return (
    <div className=' pt-10 flex flex-col'>
      <h1 className='text-3xl py-2'>Dashboard</h1>
      <p>track, add, update, and register your rentel cars</p>
      <section className='my-10 grid grid-cols-4 gap-5'>
        <Card
          title='Register daily rent'
          icon={<Register />}
          color='bg-stone-300'
          href='/dashboard/register'
          image='/images/register-header.png'
        />
        <Card
          title='Add & Edit cars'
          icon={<Car />}
          color='bg-slate-300'
          href='/dashboard/car-listings'
          image='/images/cars-header.png'
        />
      </section>
    </div>
  );
}

export default page;

interface Props {
  title: string;
  icon: React.ReactNode;
  color: string;
  href: string;
  image: string;
}
function Card({ title, icon, color, href, image }: Props) {
  return (
    <Link
      href={href}
      className='aspect-video flex flex-col border p-2 rounded-lg'
    >
      <div className={`relative  flex flex-grow animate-pulse ${color}`}>
        <Image
          src={image}
          fill
          alt={title}
          layout='fill'
          className='object-cover scale'
        />
      </div>
      <div className='flex items-center pt-2 px-3 justify-between text-gray-700 font-semibold'>
        <p className='capitalize'>{title}</p>
        {icon}
      </div>
    </Link>
  );
}
