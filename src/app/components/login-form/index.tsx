'use client';

import { login } from '@/app/components/login-form/actions';
import { FC, useActionState, useId } from 'react';

export const Login: FC = () => {
  const [state, action, pending] = useActionState(login, undefined);
  const id = useId();

  return (
    <div className='card w-full max-w-md bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title text-2xl font-bold text-center mb-6'>
          Nash Festival Memories
        </h2>

        {/* Error Message Display */}
        {state?.message && (
          <div className='alert alert-error' role='alert'>
            <svg
              className='stroke-current shrink-0 h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>{state.message}</span>
          </div>
        )}

        <form action={action} role='form' aria-label='Login form' noValidate>
          <div className='form-control w-full'>
            <label className='label' htmlFor={`${id}-password`}>
              <span className='label-text font-medium'>
                Hasło dostępowe
                <span className='text-error ml-1' aria-hidden='true'>
                  *
                </span>
              </span>
            </label>

            <input
              type='password'
              name='password'
              placeholder='Wprowadź hasło dostępowe'
              id={`${id}-password`}
              disabled={pending}
              required
              aria-required='true'
              aria-invalid={!!state?.errors}
              aria-describedby={
                !!state?.errors ? `${id}-password-error` : undefined
              }
              className={`input input-bordered w-full ${
                !!state?.errors ? 'input-error' : ''
              }`}
            />

            {!!state?.errors?.password && (
              <label className='label'>
                <span
                  id={`${id}-password-error`}
                  role='alert'
                  aria-live='polite'
                  className='label-text-alt text-error'
                >
                  {state?.errors?.password?.join(', ')}
                </span>
              </label>
            )}
          </div>

          <div className='form-control mt-6'>
            <button
              type='submit'
              disabled={pending}
              aria-describedby={pending ? `${id}-loading` : undefined}
              className='btn btn-primary w-full'
            >
              {pending ? (
                <>
                  <span className='loading loading-spinner loading-sm'></span>
                  Logowanie...
                </>
              ) : (
                'Zaloguj'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
