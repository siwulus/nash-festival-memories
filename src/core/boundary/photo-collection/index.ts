import { z } from 'zod';

export const CreatePhotoCollectionRequestArgs = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  description: z.string(),
});

export type CreatePhotoCollectionRequestArgs = z.infer<
  typeof CreatePhotoCollectionRequestArgs
>;
