import { z } from 'zod';

export const AccessToken = z.object({
  access_token: z.string(),
  token_type: z.string(),
  expires_in: z.number(),
});

export type AccessToken = z.infer<typeof AccessToken>;
