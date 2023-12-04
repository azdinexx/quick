import Image from 'next/image';
import { connectDB } from '@/utils/db';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center min-h-screen'>
      <div className='flex flex-col gap-3'>
        <Link
          href='/dashboard'
          className=' border px-4 py-2 flex w-72 justify-between items-center rounded-md'
        >
          Dashboard <Arrow />
        </Link>
        <Link
          href='/login'
          className=' border px-4 py-2 flex w-72 justify-between items-center rounded-md'
        >
          Login <Arrow />
        </Link>
        <Link
          href='/signup'
          className=' border px-4 py-2 flex w-72 justify-between items-center rounded-md'
        >
          Sign up <Arrow />
        </Link>
      </div>
    </main>
  );
}

const Arrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 24 24'
    >
      <path fill='currentColor' d='M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z' />
    </svg>
  );
};
