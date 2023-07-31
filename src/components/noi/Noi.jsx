import styles from "./index.module.scss";
import Image from "next/image";

const Noi = () => {
  return (
    <div className={styles.Noi}>
      <div className={styles.header}>
        <Image
          src={
            "https://i.pinimg.com/originals/ac/6c/94/ac6c946f6f9b0f9ddba1596169c6cc22.jpg"
          }
          width={1000}
          height={340}
        />
        <div className={styles.text}>
          <h1>Chi siamo? </h1>
          <h2>Una piccola impresa meridionale</h2>
          <h3>Dalla Sicilia con amore, natura e un pizzico di magia</h3>
        </div>
      </div>
      <div className={styles.descrizione}>
        <p>
          Un progetto nato da un'idea, un'impresa in due sensi: sia come
          avventura imprenditoriale, sia come sfida personale. Sai quando hai la
          consapevolezza di dover fare una scelta che potrebbe cambiare la tua
          vita? Tipo andare via lontano (da tutto, da tutti) o rimanere qui. E
          poi - ancora - provare a cercare un posto fisso o seguire quel piccolo
          sogno di creare qualcosa e navigare a vista giorno dopo giorno? Il
          frutto di quella scelta oggi è sotto i tuoi occhi. Ecofactory è nata
          con Buatta, il vasetto qui a fianco. Ci ha portato fortuna, è stato
          l’inizio di qualcosa di speciale In sette anni siamo cresciuti, siamo
          diventati una piccola impresa. Ma un’impresa familiare. La nostra
          dimensione preferita, quella che ci permette di custodire l'attenzione
          e la cura per ogni singolo dettaglio. Nel preparare ognuno dei
          prodotti (le candele, i kit, i cofanetti), nel racchiudere in loro la
          magia di un fiore che sboccia.
        </p>
        <p>
          Dal 2019 abbiamo allargato il nostro orizzonte grazie alla
          collaborazione con associazioni in tutto il mondo. E abbiamo
          realizzato qualcosa di straordinario: dare a ognuno la possibilità di
          piantare un albero con un click, laddove un albero non è solo un
          albero, ma vuol dire anche altro Lo stiamo facendo con meravigliose
          realtà in tutto il mondo, e ora anche in Italia. È proprio nella
          nostra terra che, insieme a loro, abbiamo reso possibile piantare un
          albero a distanza e anche andare a visitarlo. Vedere dal vivo e con
          gli occhi la crescita nel corso degli anni, toccarlo con mano. O
          addirittura abbracciarlo!
        </p>
      </div>
    </div>
  );
};

export default Noi;
