import { z } from 'zod';

export type PhotoCollectionFormState = {
  success: boolean;
  validationErrors: {
    generic: string[];
    fields: {
      name: string[];
      surname: string[];
      email: string[];
      description: string[];
    };
  };
  formData?: {
    name: string;
    surname: string;
    email: string;
    description: string;
  };
  response?: {
    uploadUrl: string;
  };
};

export const PhotoCollectionFormData = z.object({
  name: z.string().min(1, 'Imię jest wymagane').max(100, 'Imię jest za długie'),
  surname: z
    .string()
    .min(1, 'Nazwisko jest wymagane')
    .max(100, 'Nazwisko jest za długie'),
  email: z
    .string()
    .min(1, 'Adres email jest wymagany')
    .email('Nieprawidłowy adres email'),
  description: z
    .string()
    .min(1, 'Opis jest wymagany')
    .max(1000, 'Opis jest za długi'),
});
export type PhotoCollectionFormData = z.infer<typeof PhotoCollectionFormData>;
