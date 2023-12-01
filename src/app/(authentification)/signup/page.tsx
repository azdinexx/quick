'use client';
import Link from 'next/link';
import React from 'react';
import { SignUp } from '@/utils/actions';
import { Toaster, toast } from 'sonner';
import { InputField } from '@/components/dashboard/inputfields';

interface UserType {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

function SignUpPage() {
  const [user, setUser] = React.useState<UserType>({} as UserType);
  const [repassword, setRepassword] = React.useState('');
  const [isloading, setloading] = React.useState(false);
  const [error, setError] = React.useState('');
  return (
    <main className='min-h-screen flex justify-center items-center'>
      <form
        action=''
        className=' relative border border-blue-100 p-14 flex flex-col gap-10 rounded-md shadow-sm'
      >
        <h1 className='text-2xl'>Sign Up</h1>
        <div className='flex gap-5'>
          <InputField
            type='text'
            placeholder='firstName'
            name='firstName'
            tabIndex={3}
            value={user.firstName}
            setValue={(value) => setUser({ ...user, firstName: value })}
          />
          <InputField
            type='text'
            placeholder='lastName'
            name='lastName'
            tabIndex={4}
            value={user.lastName}
            setValue={(value) => setUser({ ...user, lastName: value })}
          />
        </div>
        <InputField
          type='email'
          placeholder='email'
          name='email'
          tabIndex={2}
          value={user.email}
          setValue={(value) => setUser({ ...user, email: value })}
        />
        <InputField
          type='password'
          placeholder='password'
          name='password'
          tabIndex={1}
          value={user.password}
          setValue={(value) => setUser({ ...user, password: value })}
        />
        <InputField
          type='password'
          placeholder='re-enter your password'
          name='repassword'
          tabIndex={1}
          value={repassword}
          setValue={(value) => setRepassword(value)}
        />

        <button
          type='button'
          className='border rounded-md p-3 flex justify-center items-center'
          onClick={async () => {
            if (user.password === repassword) {
              toast.loading('creating you account...');

              const res = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
              });
              if (res.status === 400) {
                toast.error('Fill All the fields');
              }
              if (res.status === 500) {
                toast.error('something went wrong');
              }
              if (res.status === 409) {
                toast.error('This email is already in use');
              }
              if (res.status === 200) {
                toast.success('account created successfully');
                window.location.href = '/dashboard';
              }
            } else {
              toast.error('passwords do not match');
            }
          }}
        >
          {isloading ? (
            <svg
              className='animate-spin  -gray-600 h-5 w-5 mr-3 ...'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-5'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
              ></path>
            </svg>
          ) : (
            <span>Sign Up</span>
          )}
        </button>
        <span>
          you have an account
          <Link
            href={'/login'}
            className='px-1 text-sm bg-gray-100 mx-2 rounded-lg border'
          >
            Login
          </Link>
        </span>
        <Toaster position='top-center' richColors />
      </form>
    </main>
  );
}

export default SignUpPage;
