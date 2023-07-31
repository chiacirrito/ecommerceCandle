import styles from "./index.module.scss";
import novita from "../../mock/novita.json";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";

const SectionTwo = () => {
  return (
    <div className={styles.SectionTwo}>
      <p className={styles.intestazione}>Le novità</p>
      <div className={styles.list}>
        {novita.map((prodotto) => (
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

export default SectionTwo;
