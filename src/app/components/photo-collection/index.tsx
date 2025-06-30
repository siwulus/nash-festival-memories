'use client';

import { useActionState } from 'react';
import { processPhotoCollection } from './actions';
import { DescriptionForm } from './description-form';
import { PhotoCollectionFormState } from './types';
const initialState: PhotoCollectionFormState = {
  success: false,
  validationErrors: {
    generic: [],
    fields: {
      name: [],
      surname: [],
      email: [],
      description: [],
    },
  },
  formData: undefined,
};

const PhotoCollectionForm = () => {
  const [state, action, pending] = useActionState(
    processPhotoCollection,
    initialState
  );

  return (
    <div>
      <DescriptionForm onSubmit={action} state={state} pending={pending} />
    </div>
  );
};

export default PhotoCollectionForm;
