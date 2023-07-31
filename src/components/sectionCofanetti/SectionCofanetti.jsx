import styles from "./index.module.scss";
import cofanetti from "../../mock/cofanetti.json";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const SectionCofanetti = () => {
  return (
    <div className={styles.SectionCofanetti}>
      <p className={styles.intestazione}>I cofanetti</p>
      <div className={styles.list}>
        {cofanetti.map((prodotto) => (
          <div className={styles.div} key={prodotto.id}>
            <Image src={prodotto.img} width={250} height={250} alt="img" />
            <h4>{prodotto.titolo}</h4>
            <div className={styles.acquista}>
              <p>{prodotto.prezzo}</p>
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

export default SectionCofanetti;
