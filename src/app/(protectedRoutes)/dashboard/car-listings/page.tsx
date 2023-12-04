import React from 'react';
import { Status } from '@/components/dashboard/status';
import CarTable from '@/components/carstable';

function page() {
  return (
    <main className='  flex flex-col  pt-10    '>
      <h1 className='text-3xl py-2'>Car Listings</h1>
      <p>track, add and update your rentel cars</p>
      <div className='bg-stone-50/50 p-4 my-10 flex flex-col'>
        <button className='text-xs bg-green-600/70 shadow text-white p-2 rounded-md w-fit px-4 self-end my-2'>
          add new car
        </button>
        <CarTable />
      </div>
    </main>
  );
}

export default page;
