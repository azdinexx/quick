'use client';
import Link from 'next/link';
import React from 'react';
import { Login } from '@/utils/actions';
import { InputField } from '../signup/page';
import { Toaster, toast } from 'sonner';

interface UserType {
  email: string;
  password: string;
}
function LoginPage() {
  const [user, setUser] = React.useState({} as UserType);
  return (
    <main className='min-h-screen flex justify-center items-center'>
      <form
        action=''
        className='border border-blue-100 p-14 flex flex-col gap-10 rounded-md shadow-sm'
      >
        <h1 className='text-2xl'>
          Login to{' '}
          <Link
            href={'/'}
            className='font-semibold underline underline-offset-4'
          >
            Quik
          </Link>
        </h1>
        <InputField
          className='w-72'
          type='email'
          placeholder='email'
          name='email'
          tabIndex={1}
          value={user.email}
          setValue={(value) => setUser({ ...user, email: value })}
        />
        <InputField
          className='w-72'
          type='password'
          placeholder='password'
          name='password'
          tabIndex={2}
          value={user.password}
          setValue={(value) => setUser({ ...user, password: value })}
        />
        <button
          className='border rounded-md p-2'
          type='button'
          onClick={async () => {
            if (user.email && user.password) {
              toast.loading('wait while logging you in...');
              let status = await Login(user);
              if (status === 0) {
                toast.error('Account not found');
              } else if (status === 1) {
                toast.error('Incorrect password or Email');
              } else if (status === 2) {
                toast.success('Logged in successfully');
              }
            } else {
              toast.error('Please fill all the fields');
            }
          }}
        >
          <span>Login</span>
        </button>
        <span>
          don&apos;t have an account
          <Link
            href={'/signup'}
            className='px-1 text-sm bg-gray-100 mx-2 rounded-lg border'
          >
            sign up
          </Link>
        </span>
      </form>
      <Toaster position='top-center' richColors />
    </main>
  );
}

export default LoginPage;
