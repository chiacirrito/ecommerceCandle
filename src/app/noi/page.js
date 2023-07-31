import Footer from "@/components/footer/Footer";
import styles from "./index.module.scss";
import Navbar from "@/components/navbar/Navbar";
import Noi from "@/components/noi/Noi";

export default function pageNoi() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.description}>
        <Noi />
      </div>
      <Footer />
    </main>
  );
}
