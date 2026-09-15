import HeaderMain from "@/components/Header/HeaderMain";
import styles from "./page.module.css";
import HomePage from "@/components/Home/HomePage";

export default function Home() {
  return (
    <section className={styles.main}>
      <HeaderMain />
      <HomePage />
    </section>
  );
}
