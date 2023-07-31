import styles from "./index.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.menu}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/prodotti"}>Prodotti</Link>
        </li>
        <li>
          <Link href={"/noi"}>Noi</Link>
        </li>
        <li>
          <Link href={"/contatti"}>Contatti</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
