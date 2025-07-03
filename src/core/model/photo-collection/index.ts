import { z } from 'zod';

export const PhotoCollectionUploadMetadata = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  description: z.string(),
  uploadUrl: z.string(),
});

export type PhotoCollectionUploadMetadata = z.infer<
  typeof PhotoCollectionUploadMetadata
>;
