import styles from "@/styles/Card.module.css"
import Image from "next/image";
import star from "@/public/star.png"

export default function Card({pic, rating, reviewCount, country, title, price}) {
    return (
        <div className={styles.card}>
            <div>
                <Image 
                    className={styles.photo}
                    src={pic} 
                    alt="Katie Zaferes in a swimsuit"
                    height={300}
                    width={300}
                />
            </div>
            <div>  
                <div className={styles.cardstats}>
                    <Image 
                        className={styles.logo} 
                        src={star}
                        alt="red star"
                    />
                    <span>{rating}</span>
                    <span className="grey">{reviewCount}</span>
                    <span className="grey">{country}</span>
                </div>
                <h2>{title}</h2>
                <p><span className="bold">From {price}</span> / person</p>
            </div>

        </div>
    )
}