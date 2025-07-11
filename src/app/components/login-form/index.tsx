'use client';

import { AlertIcon } from '@/app/components/icons/AlertIcon';
import { login } from '@/app/components/login-form/actions';
import { FC, useActionState, useId } from 'react';

export const LoginForm: FC = () => {
  const [state, action, pending] = useActionState(login, undefined);
  const id = useId();

  return (
    <div className='mx-auto max-w-md p-2 space-y-6'>
      <h2>Nash Sokół</h2>

      <div>
        {/* Error Message Display */}
        {state?.message && (
          <div className='alert alert-error' role='alert'>
            <AlertIcon />
            <span>{state.message}</span>
          </div>
        )}

        <form action={action} role='form' aria-label='Login form' noValidate>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
            <legend className='fieldset-legend'>Logowanie</legend>

            <label className='floating-label' htmlFor={`${id}-password`}>
              <span>
                Hasło dostępowe
                <span className='text-error ml-1' aria-hidden='true'>
                  *
                </span>
              </span>

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
                className={`input w-full ${!!state?.errors ? 'input-error' : ''}`}
              />
            </label>

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

            <div className='mt-6'>
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
          </fieldset>
        </form>
      </div>
    </div>
  );
};
