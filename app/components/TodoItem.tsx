'use client';

import Link from 'next/link';
import { deleteTodo, toggleTodo } from '../actions';
import styles from '../page.module.css';
import {formatDate} from '@/lib/formatDate';

type TodoItemProps = {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
};

export function TodoItem({ id, text, completed, createdAt }: TodoItemProps) {
  const handleToggle = async () => {
    await toggleTodo(id);
  };

  const handleDelete = async () => {
    await deleteTodo(id);
  };

  const formattedDate = formatDate(createdAt);

  return (
    <div className={styles.todoItem}>
      <label className={styles.todoCheckbox}>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggle}
        />
        <span className={completed ? styles.completed : ''}>{text}</span>
      </label>
      <div className={styles.todoMeta}>
        <span className={styles.todoDate}>{formattedDate}</span>
        <Link href={`/edit/${id}`} className={styles.editBtn}>
          Edytuj
        </Link>
        <button onClick={handleDelete} className={styles.deleteBtn}>
          Usuń
        </button>
      </div>
    </div>
  );
}
