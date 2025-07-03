'use server';

import {
  PhotoCollectionFormData,
  PhotoCollectionFormState,
} from '@/app/components/photo-collection/types';
import container from '@/app/container';
import { PhotoCollectionUseCase } from '@/core/use-cases/photo-collection/PhotoCollectionUseCase';
import { SafeParseError, SafeParseSuccess } from 'zod';

const photoCollectionUseCase = container.get(PhotoCollectionUseCase);

const buildFormState = (
  success: boolean,
  formData: PhotoCollectionFormState['formData'],
  uploadUrl?: string
): PhotoCollectionFormState => ({
  success,
  validationErrors: {
    generic: [],
    fields: {
      name: [],
      surname: [],
      email: [],
      description: [],
    },
  },
  formData,
  ...(uploadUrl && { response: { uploadUrl } }),
});

export async function processPhotoCollection(
  prevState: PhotoCollectionFormState,
  formData: FormData
): Promise<PhotoCollectionFormState> {
  const submittedData = {
    name: (formData.get('name') as string) || '',
    surname: (formData.get('surname') as string) || '',
    email: (formData.get('email') as string) || '',
    description: (formData.get('description') as string) || '',
  };
  const validationResult = PhotoCollectionFormData.safeParse(submittedData);
  if (!validationResult.success) {
    return handleFormErrors(validationResult, submittedData);
  }
  return handleSuccess(validationResult);
}

const handleFormErrors = (
  validationError: SafeParseError<PhotoCollectionFormData>,
  formData: PhotoCollectionFormState['formData']
) => {
  const resultFormState = buildFormState(false, formData);
  validationError.error.errors.forEach(error => {
    const field = error
      .path[0] as keyof typeof resultFormState.validationErrors.fields;
    if (field && resultFormState.validationErrors.fields[field]) {
      resultFormState.validationErrors.fields[field].push(error.message);
    }
  });

  return resultFormState;
};

const handleSuccess = async (
  validationResult: SafeParseSuccess<PhotoCollectionFormData>
) => {
  const { uploadUrl } =
    await photoCollectionUseCase.createPhotoCollectionRequest(
      validationResult.data
    );

  return buildFormState(true, validationResult.data, uploadUrl);
};
