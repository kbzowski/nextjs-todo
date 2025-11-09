import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTodoById } from '@/app/actions';
import { TodoForm } from '@/app/components/TodoForm';
import styles from './edit.module.css';

export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const todoId = parseInt(id, 10);

  if (isNaN(todoId)) {
    notFound();
  }

  const todo = await getTodoById(todoId);

  if (!todo) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <h1>Edytuj zadanie</h1>
        <Link href="/" className={styles.backLink}>
          ← Powrót do listy
        </Link>
      </div>

      <TodoForm mode="edit" todo={todo} />
    </div>
  );
}
