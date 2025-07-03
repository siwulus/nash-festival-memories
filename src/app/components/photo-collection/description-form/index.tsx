'use client';

import { PhotoCollectionFormState } from '@/app/components/photo-collection/types';
import { isEmpty } from 'ramda';

type DescriptionFormProps = {
  onSubmit: (data: FormData) => void;
  pending: boolean;
  state: PhotoCollectionFormState;
};

export const DescriptionForm = ({
  onSubmit,
  state,
  pending,
}: DescriptionFormProps) => {
  return (
    <div>
      {/* Generic Error Messages */}
      {!isEmpty(state.validationErrors.generic) && (
        <div className='alert alert-error mb-6'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
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
          <div>
            {state.validationErrors.generic.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        </div>
      )}

      <form action={onSubmit} noValidate className='space-y-6'>
        <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border space-y-6 p-4'>
          <legend className='fieldset-legend'>
            Dane kontaktowe oraz opis zdjeć
          </legend>

          {/* Name Field */}
          <div>
            <label htmlFor='name' className='floating-label'>
              <span>Imię *</span>

              <input
                type='text'
                id='name'
                name='name'
                placeholder='Twoje imię'
                defaultValue={state.formData?.name || ''}
                className={`input w-full ${
                  !isEmpty(state.validationErrors.fields.name)
                    ? 'input-error'
                    : ''
                }`}
                disabled={pending}
                required
                aria-describedby={
                  !isEmpty(state.validationErrors.fields.name)
                    ? 'name-error'
                    : undefined
                }
              />
              {!isEmpty(state.validationErrors.fields.name) && (
                <div className='label'>
                  <span id='name-error' className='label text-xs text-error'>
                    {state.validationErrors.fields.name.join(', ')}
                  </span>
                </div>
              )}
            </label>
          </div>

          {/* Surname Field */}
          <div>
            <label htmlFor='surname' className='floating-label'>
              <span>Nazwisko *</span>
              <input
                type='text'
                id='surname'
                name='surname'
                placeholder='Twoje nazwisko'
                defaultValue={state.formData?.surname || ''}
                className={`input input-bordered w-full ${
                  !isEmpty(state.validationErrors.fields.surname)
                    ? 'input-error'
                    : ''
                }`}
                disabled={pending}
                required
                aria-describedby={
                  !isEmpty(state.validationErrors.fields.surname)
                    ? 'surname-error'
                    : undefined
                }
              />
              {!isEmpty(state.validationErrors.fields.surname) && (
                <div className='label'>
                  <span id='surname-error' className='text-xs text-error'>
                    {state.validationErrors.fields.surname.join(', ')}
                  </span>
                </div>
              )}
            </label>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor='email' className='floating-label'>
              <span>Adres Email *</span>

              <input
                type='email'
                id='email'
                name='email'
                placeholder='twoj.email@example.com'
                defaultValue={state.formData?.email || ''}
                className={`input input-bordered w-full ${
                  !isEmpty(state.validationErrors.fields.email)
                    ? 'input-error'
                    : ''
                }`}
                disabled={pending}
                required
                aria-describedby={
                  !isEmpty(state.validationErrors.fields.email)
                    ? 'email-error'
                    : undefined
                }
              />
              {!isEmpty(state.validationErrors.fields.email) && (
                <div className='label'>
                  <span id='email-error' className='text-xs text-error'>
                    {state.validationErrors.fields.email.join(', ')}
                  </span>
                </div>
              )}
            </label>
          </div>

          {/* Description Field */}
          <div>
            <label htmlFor='description' className='floating-label'>
              <span>Opis zdjęć *</span>

              <textarea
                id='description'
                name='description'
                placeholder='Opisz swoje zdjęcia... TODO: Rutek (opis co i jak ma byc opisane)'
                defaultValue={state.formData?.description || ''}
                rows={4}
                className={`textarea textarea-bordered w-full resize-y ${
                  !isEmpty(state.validationErrors.fields.description)
                    ? 'textarea-error'
                    : ''
                }`}
                disabled={pending}
                required
                aria-describedby={
                  !isEmpty(state.validationErrors.fields.description)
                    ? 'description-error'
                    : undefined
                }
              />
            </label>
            <div className='label'>
              {!isEmpty(state.validationErrors.fields.description) && (
                <span id='description-error' className='text-xs text-error'>
                  {state.validationErrors.fields.description.join(', ')}
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className='flex justify-end'>
            <button
              type='submit'
              disabled={pending}
              className={`btn btn-primary min-w-64`}
            >
              {pending ? (
                <>
                  <span className='loading loading-spinner loading-sm'></span>
                  Przetwarzanie...
                </>
              ) : (
                'Wyślij'
              )}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
