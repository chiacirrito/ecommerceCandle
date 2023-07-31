import styles from "./index.module.scss";
import candele from "../../mock/candele.json";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const SectionCandle = () => {
  return (
    <div className={styles.SectionCandle}>
      <p className={styles.intestazione}>Le candele</p>
      <div className={styles.list}>
        {candele.map((prodotto) => (
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

export default SectionCandle;
