import { z } from 'zod';

export type FormState =
  | {
      errors?: {
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export const LoginForm = z.object({
  password: z.string().min(1, 'Hasło jest wymagane'),
});
export type LoginForm = z.infer<typeof LoginForm>;
