import Link from 'next/link';
import { getTodos } from './actions';
import { TodoItem } from './components/TodoItem';
import styles from './page.module.css';

export default async function Home() {
  const todos = await getTodos();

  const todosList = todos.map((todo) => (
      <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          createdAt={todo.createdAt}
      />
      )
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Lista zadań</h1>
        <Link href="/add" className={styles.addBtn}>
          Dodaj nowe zadanie
        </Link>
      </div>

      {todos.length === 0 ? (
        <p className={styles.emptyMessage}>Brak zadań. Dodaj nowe zadanie!</p>
      ) : (
        <div className={styles.todoList}>
          {todosList}
        </div>
      )}
    </div>
  );
}
