import React from 'react';
import { Status } from '@/components/dashboard/status';

function page() {
  return (
    <main className='  flex flex-col  pt-10    '>
      <h1 className='text-3xl py-2'>Car Listings</h1>
      <p>track, add and update your rentel cars</p>
      <div className='bg-stone-50/50 p-4 my-10'>
        <Status />
      </div>
    </main>
  );
}

export default page;
