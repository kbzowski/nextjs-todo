import Link from 'next/link';
import { TodoForm } from '../components/TodoForm';
import styles from './add.module.css';

export default function AddPage() {
  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <h1>Dodaj nowe zadanie</h1>
        <Link href="/" className={styles.backLink}>
          Powrót do listy
        </Link>
      </div>

      <TodoForm mode="add" />
    </div>
  );
}
