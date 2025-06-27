'use server';

import { FormState, LoginForm } from '@/app/components/login-form/types';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export const login = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const data = {
    password: formData.get('password'),
  };

  const parsed = LoginForm.safeParse(data);
  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await signIn('credentials', {
      password: parsed.data.password,
      redirect: true,
      redirectTo: '/',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        message: 'Niepoprawne logowanie',
      };
    }
    throw error;
  }
};
