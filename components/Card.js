import styles from "@/styles/Card.module.css"
import Image from "next/image";


export default function Card({pic, logo, rating, reviewCount, country, title, price}) {
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
                        src={logo}
                        alt="red star"
                        width={14}
                        height={14}
                    />
                    <span>&nbsp;{rating}&nbsp;</span>
                    <span className="grey">({reviewCount}) •&nbsp;</span>
                    <span className="grey">{country}</span>
                </div>
                <h2>{title}</h2>
                <p><span className="bold">From ${price}</span> / person</p>
            </div>

        </div>
    )
}