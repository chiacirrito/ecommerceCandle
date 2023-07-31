import Navbar from "@/components/navbar/Navbar";
import styles from "./index.module.scss";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import SectionOne from "@/components/sectionOne/SectionOne";
import SectionTwo from "@/components/sectionTwo/SectionTwo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Link href={"https://ecofactory.eu/pages/albero"}>
          <Image
            src={
              "https://ecofactory.eu/cdn/shop/files/Copia_di_Tuscan_Sunshine-_Etsy_Banners_7d4cb37a-bb9a-41c6-ab5f-57bae3757c1c.png?v=1687886233&width=1540"
            }
            width={1200}
            height={400}
            className={styles.imghead}
          ></Image>
        </Link>

        <div className={styles.description}>
          <SectionOne />
          <SectionTwo />
        </div>
        <Footer />
      </main>
    </>
  );
}
