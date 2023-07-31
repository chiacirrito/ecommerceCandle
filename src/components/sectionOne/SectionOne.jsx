import styles from "./index.module.scss";
import acquistati from "../../mock/acquistati.json";
import Image from "next/image";
import { MdExpandMore, MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";

const SectionOne = () => {
  return (
    <div className={styles.SectionOne}>
      <p className={styles.intestazione}>Prodotti più acquistati</p>
      <div className={styles.list}>
        {acquistati.map((prodotto) => (
          <div className={styles.div} key={prodotto.id}>
            <Image
              src={prodotto.img}
              width={200}
              height={200}
              alt="img"
            ></Image>{" "}
            <h4>{prodotto.titolo}</h4>
            <p className={styles.testo}>{prodotto.testo}</p>
            <div className={styles.expand}>
              <MdExpandMore />
              <p id="descrizione" className={styles.descrizione}>
                {prodotto.descrizione}
              </p>{" "}
            </div>
            <div className={styles.acquista}>
              <h4>{prodotto.prezzo}</h4>
              <Link href={prodotto.link}>
                <MdOutlineShoppingCart className={styles.carrello} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
