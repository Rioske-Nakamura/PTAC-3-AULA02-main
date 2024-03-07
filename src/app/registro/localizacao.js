import Map from "../componente/map";
import styles from "./menu.modules.css";

export default function Localizacao(){
    return(
        <div className={styles.Local}>
            <Map></Map>
        </div>
    )
}