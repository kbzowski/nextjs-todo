'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { type FormState, saveTodo } from '@/app/actions';
import type { Todo } from '@prisma/client';
import styles from './TodoForm.module.css';

interface TodoFormProps {
  mode: 'add' | 'edit';
  todo?: Todo;
}

const initialState: FormState = {};

export function TodoForm({ mode, todo }: TodoFormProps) {
  const [state, formAction] = useActionState(saveTodo, initialState);

  return (
    <form action={formAction} className={styles.todoForm}>
      {todo && <input type="hidden" name="id" value={todo.id} />}

      <div className={styles.formGroup}>
        <label htmlFor="text">Treść zadania:</label>
        <input
          type="text"
          id="text"
          name="text"
          defaultValue={todo?.text || ''}
          placeholder="Wpisz treść zadania..."
          maxLength={200}
          autoFocus
          aria-describedby="text-error"
        />
        {state.errors?.text && (
          <div id="text-error" className={styles.error}>
            {state.errors.text.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
      </div>

      {state.message && (
        <div className={styles.errorMessage}>
          <p>{state.message}</p>
        </div>
      )}

      <div className={styles.formActions}>
        <button type="submit" className={styles.submitBtn}>
          {mode === 'add' ? 'Dodaj zadanie' : 'Zapisz zmiany'}
        </button>
        <Link href="/" className={styles.cancelBtn}>
          Anuluj
        </Link>
      </div>
    </form>
  );
}
