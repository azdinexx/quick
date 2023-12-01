import Link from 'next/link';
export function Status() {
  return (
    <section className='w-full flex justify-between gap-4  '>
      <Link
        href={'/dashboard'}
        className='text-xs bg-green-600/70 shadow text-white p-2 rounded-md flex gap-1'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M21 11H6.83l3.58-3.59L9 6l-6 6l6 6l1.41-1.42L6.83 13H21v-2Z'
          />
        </svg>
        Dashboard
      </Link>
      <div className='flex gap-3'>
        <SavingStatus status='saving' />
        <button className='text-xs bg-green-600/70 shadow text-white p-2 rounded-md '>
          save all
        </button>
      </div>
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
