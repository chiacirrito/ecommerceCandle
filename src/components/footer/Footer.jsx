import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Image src={"/logo.jpg"} width={70} height={70} alt="logo" />
      <p>
        <Link
          href={
            "https://ecofactory.eu/?utm_source=google&utm_campaign=11549840074&utm_medium=ad&utm_content=479911725817&utm_term=ecofactory&gad=1&gclid=CjwKCAjwzo2mBhAUEiwAf7wjkpV6qSL0fzNZ5Pwbj-OqjbK8YPeAAngzf8IqKvkZqKyv0lw_-WuSiBoC9_gQAvD_BwE"
          }
        >
          Ecofactory.eu
        </Link>
      </p>
    </div>
  );
};

export default Footer;
