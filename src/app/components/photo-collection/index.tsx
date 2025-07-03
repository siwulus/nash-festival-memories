'use client';

import { processPhotoCollection } from '@/app/components/photo-collection/actions';
import { DescriptionForm } from '@/app/components/photo-collection/description-form';
import { PhotoUpload } from '@/app/components/photo-collection/photo-upload';
import { PhotoCollectionFormState } from '@/app/components/photo-collection/types';
import { useActionState } from 'react';
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
  const [state, action, pending] = useActionState(
    processPhotoCollection,
    initialState
  );

  return (
    <div>
      {state.success && state.response ? (
        <PhotoUpload uploadUrl={state.response.uploadUrl} />
      ) : (
        <DescriptionForm onSubmit={action} state={state} pending={pending} />
      )}
    </div>
  );
};

export default PhotoCollectionForm;
