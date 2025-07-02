'use server';

import { PhotoCollectionFormData, PhotoCollectionFormState } from './types';

export async function processPhotoCollection(
  prevState: PhotoCollectionFormState,
  formData: FormData
): Promise<PhotoCollectionFormState> {
  try {
    // Extract form data as strings for preservation
    const submittedData = {
      name: (formData.get('name') as string) || '',
      surname: (formData.get('surname') as string) || '',
      email: (formData.get('email') as string) || '',
      description: (formData.get('description') as string) || '',
    };

    // Validate with Zod schema
    const validationResult = PhotoCollectionFormData.safeParse(submittedData);

    if (!validationResult.success) {
      // Transform Zod errors into our form state structure
      const fieldErrors = {
        name: [] as string[],
        surname: [] as string[],
        email: [] as string[],
        description: [] as string[],
      };

      validationResult.error.errors.forEach(error => {
        const field = error.path[0] as keyof typeof fieldErrors;
        if (field && fieldErrors[field]) {
          fieldErrors[field].push(error.message);
        }
      });

      return {
        success: false,
        validationErrors: {
          generic: [],
          fields: fieldErrors,
        },
        formData: submittedData, // Preserve the submitted data
      };
    }

    // Here you would typically:
    // 1. Save the data to database
    // 2. Process the photo collection request
    // 3. Generate upload URL or handle file upload
    // For now, we'll simulate success with a mock upload URL

    // TODO: Implement actual photo collection logic
    // - Save user submission to database
    // - Generate secure upload URL for photos
    // - Send confirmation email
    // - Create photo collection record

    return {
      success: true,
      validationErrors: {
        generic: [],
        fields: {
          name: [],
          surname: [],
          email: [],
          description: [],
        },
      },
      // Clear form data on success (optional - you could keep it if needed)
      formData: validationResult.data,
      response: {
        uploadUrl: 'https://www.dropbox.com/request/XXXXXXXXX', // Mock URL - replace with actual implementation
      },
    };
  } catch (error) {
    console.error('Error submitting photo collection:', error);

    // Extract form data for preservation even in case of errors
    const submittedData = {
      name: (formData.get('name') as string) || '',
      surname: (formData.get('surname') as string) || '',
      email: (formData.get('email') as string) || '',
      description: (formData.get('description') as string) || '',
    };

    return {
      success: false,
      validationErrors: {
        generic: [
          'Wystąpił błąd podczas przetwarzania formularza. Spróbuj ponownie.',
        ],
        fields: {
          name: [],
          surname: [],
          email: [],
          description: [],
        },
      },
      formData: submittedData, // Preserve data even on unexpected errors
    };
  }
}
