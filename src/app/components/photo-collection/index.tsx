'use client';

import { useActionState } from 'react';
import { processPhotoCollection } from './actions';
import { DescriptionForm } from './description-form';
import { PhotoUpload } from './photo-upload';
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
};

const PhotoCollectionForm = () => {
  const [{ success, response }, action, pending] = useActionState(
    processPhotoCollection,
    initialState
  );

  return (
    <div>
      {success && response ? (
        <PhotoUpload uploadUrl={response.uploadUrl} />
      ) : (
        <DescriptionForm onSubmit={action} state={state} pending={pending} />
      )}
    </div>
  );
};

export default PhotoCollectionForm;
