import Link from "next/link";
import styles from "./index.module.scss";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const Contatti = () => {
  return (
    <div className={styles.Contatti}>
      {" "}
      <div className={styles.social}>
        <Link href={"https://www.instagram.com/ecofactoryitalia/"}>
          <BsInstagram className={styles.icon} />
        </Link>
        <Link href={"https://www.facebook.com/ecofactory.eu/"}>
          <BsFacebook className={styles.icon} />
        </Link>
      </div>
      <form action="mailto:info@ecofactory.eu" id="contact" method="get">
        <input type="text" id="nome" placeholder="Nome" />
        <input type="text" id="mail" placeholder="E-mail" />
        <input type="text" id="messaggio" placeholder="Messaggio" />
        <input type="submit" placeholder="Invia" />
      </form>
      <p>
        Futura di Francesco Ragusa | via Modica Sorda 58 97015 Modica (RG) |
        <br />
        P. IVA IT01669930883 | C.F. RGS FNC 87M18F258V REA 443636, RG | <br />
        info@ecofactory.eu
      </p>
    </div>
  );
};

export default Contatti;
