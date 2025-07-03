import { z } from 'zod';

export const handleFetchResponse = async <T>(
  response: Response,
  schema: z.ZodSchema<T>
): Promise<T> => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return schema.parse(data);
};
