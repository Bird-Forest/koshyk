import styles from "./page.module.css";
import HomePage from "@/components/Home/HomePage";

export default function Home() {
  return (
    <div className={styles.main}>
      <HomePage />
    </div>
  );
}
