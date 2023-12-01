import Table from '@/components/Table';
import { Status } from '@/components/dashboard/status';
import React from 'react';

function page() {
  return (
    <main className='  flex flex-col  pt-10    '>
      <h1 className='text-3xl py-2'>Register</h1>
      <p>track the state of your rentel cars</p>
      <div className='bg-stone-50/50 p-4 my-10'>
        <Status />
        <Table />
      </div>
    </main>
  );
}

export default page;
