import Footer from "@/components/footer/Footer";
import styles from "./index.module.scss";
import Navbar from "@/components/navbar/Navbar";
import SectionCandle from "@/components/sectionCandle/SectionCandle";
import SectionCofanetti from "@/components/sectionCofanetti/SectionCofanetti";

export default function pageProdotti() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.description}>
        <SectionCandle />
        <SectionCofanetti />
      </div>
      <Footer />
    </main>
  );
}
