import Footer from "@/components/footer/Footer";
import styles from "./index.module.scss";
import Navbar from "@/components/navbar/Navbar";
import Contatti from "@/components/contatti/Contatti";

export default function pageContatti() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.description}>
        <Contatti />
      </div>
      <Footer />
    </main>
  );
}
