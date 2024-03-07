import Link from "next/link";
import styles from "./menu.modules.css";
import Image from "next/image";

export default function Menu(){
    return(
        <header className={styles.cabecalho}>
            
            <nav className="navbar">

                <ul>
                    <li>
                        <Image 
                            width={100}
                            height={100} 
                            src="https://www.ifms.edu.br/marcaifms.png"
                        ></Image>
                    </li>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/registro">
                    <li>Registrar</li>
                    </Link>
                    <Link href="/localizacao">
                    <li>Localizacao</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}