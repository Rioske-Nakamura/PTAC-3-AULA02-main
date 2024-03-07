import Image from "next/image";
import Link from "next/link";
import styles from "./menu.modules.css";

export default function Footer(){
    return(
    <footer className={styles.rodape}>
        <Link href="https://ead.ifms.edu.br/">
        <Image
            width={60}
            height={60} 
            src="https://ead.ifms.edu.br/marcamoodle.png"
        ></Image>
        </Link>
        <h1>Rodape</h1>
    </footer>)
}