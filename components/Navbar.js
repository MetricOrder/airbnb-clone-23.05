import styles from "@/styles/Navbar.module.css"
import Image from "next/image";
import img from "@/public/airbnb-logo.png"


export default function Navbar() {
    return(
        <div>
            <nav className={styles.navbar}> 
                <Image
                    className={styles.logo} 
                    src={img}
                    alt = "airbnb logo" />
            </nav>
            
        </div>
    )
}