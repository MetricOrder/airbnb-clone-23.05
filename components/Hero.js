import styles from "@/styles/Hero.module.css"
import Image from "next/image";
import img from "@/images/photo-grid.png"

export default function Hero() {
    return(
        <div>
            <div className={styles.hero}> 
                <Image
                    className={styles.photos}
                    src={img}
                    alt = "photo grid" />
                <h1>Online Experiences</h1>
                <p className={styles.intro}>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}