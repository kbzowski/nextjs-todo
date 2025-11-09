'use server';

import {revalidatePath} from 'next/cache';
import {redirect} from 'next/navigation';
import {z} from 'zod';
import {prisma} from '@/lib/prisma';

/**
 * Schemat walidacyjny
 */
const todoSchema = z.object({
  text: z.string().min(1, 'Treść zadania jest wymagana').max(200, 'Treść zadania jest za długa (max 200 znaków)'),
});

/**
 * Typ stanu formularza zwracanego przez server actions
 */
export type FormState = {
  errors?: {
    text?: string[];
  };
  message?: string;
};

export async function getTodos() {
    return prisma.todo.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
}

async function addTodoInternal(text: string): Promise<void> {
  await prisma.todo.create({
    data: { text },
  });
}

async function updateTodoInternal(id: number, text: string): Promise<void> {
  await prisma.todo.update({
    where: { id },
    data: { text },
  });
}

export async function saveTodo(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = todoSchema.safeParse({
    text: formData.get('text'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const id = formData.get('id');
  const isEdit = id && id !== '';

  try {
    if (isEdit) {
      await updateTodoInternal(parseInt(id as string, 10), validatedFields.data.text);
    } else {
      await addTodoInternal(validatedFields.data.text);
    }
  } catch {
    return {
      message: `Błąd bazy danych: Nie udało się ${isEdit ? 'zaktualizować' : 'dodać'} zadania.`,
    };
  }

  revalidatePath('/');
  redirect('/');
}

export async function toggleTodo(id: number) {
  const todo = await prisma.todo.findUnique({
    where: { id },
  });

  if (!todo) {
    return { error: 'Todo not found' };
  }

  await prisma.todo.update({
    where: { id },
    data: {
      completed: !todo.completed,
    },
  });

  revalidatePath('/');
}

export async function deleteTodo(id: number) {
  await prisma.todo.delete({
    where: { id },
  });

  revalidatePath('/');
}

export async function getTodoById(id: number) {
    return prisma.todo.findUnique({
        where: {id},
    });
}
