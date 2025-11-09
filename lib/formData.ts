import { z } from 'zod';

/**
 * Walidacja objektu FormData na podstawie schematu zod
 * @param formData
 * @param schema
 */
export function parseFormData<T>(
  formData: FormData,
  schema: z.ZodSchema<T>
): T {
  const data = Object.fromEntries(formData.entries());
  return schema.parse(data);
}
