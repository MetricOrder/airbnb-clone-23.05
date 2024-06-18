import styles from "@/styles/Card.module.css";
import Image from "next/image";

export default function Card({ logo, info }) {
  let badgeText;
  if (info.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (info.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className={styles.card}>
      {badgeText && <div className={styles.cardBadge}>{badgeText}</div>}
      <div>
        <Image
          className={styles.photo}
          src={info.coverImg}
          alt={info.coverImg}
          height={300}
          width={300}
        />
      </div>
      <div>
        <div className={styles.cardstats}>
          <Image src={"/images/star.png"} alt="red star" width={14} height={14} />
          <span>&nbsp;{info.stats.rating}&nbsp;</span>
          <span className="grey">({info.stats.reviewCount}) •&nbsp;</span>
          <span className="grey">{info.location}</span>
        </div>
        <h2>{info.title}</h2>
        <p>
          <span className="bold">From ${info.price}</span> / person
        </p>
      </div>
    </div>
  );
}
