import { z } from 'zod';

export type FormState =
  | {
      errors?: {
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export const LoginFormData = z.object({
  password: z.string().min(1, 'Hasło jest wymagane'),
});
export type LoginFormData = z.infer<typeof LoginFormData>;
