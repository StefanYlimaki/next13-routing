import Link from "next/link";
import styles from "./projects.module.css";

export default function Home() {
  return (
    <main>
      <h1>My Projects</h1>

      <ul className={styles.ul}>
        <li>
          <Link href="/projects/jobit">JobIt</Link>
        </li>
        <li>
          <Link href="/projects/carrent">Car Rent</Link>
        </li>
        <li>
          <Link href="/projects/hipnode">JobIt</Link>
        </li>
      </ul>
    </main>
  );
}
