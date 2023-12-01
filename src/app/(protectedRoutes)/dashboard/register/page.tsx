import Table from '@/components/Table';
import React from 'react';

function page() {
  return (
    <main className='  flex flex-col  pt-10  px-10  '>
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

function Status() {
  return (
    <section className='w-full flex justify-end gap-4  '>
      <SavingStatus status='saving' />
      <button className='text-xs bg-green-600/70 shadow text-white p-2 rounded-md '>
        save all
      </button>
    </section>
  );
}

function SavingStatus({ status }: { status: 'saved' | 'saving' | 'error' }) {
  const statusMap = {
    saved: 'text-green-600 bg-green-50',
    saving: 'text-stone-400 bg-stone-100',
    error: 'text-red-600 bg-red-50',
  };
  return (
    <p
      className={`text-xs  w-20 text-stone-400 p-2 rounded-md  ${statusMap[status]} `}
    >
      {status === 'saving' ? 'saving...' : status}
    </p>
  );
}
