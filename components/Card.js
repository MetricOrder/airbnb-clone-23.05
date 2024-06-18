import styles from "@/styles/Card.module.css";
import Image from "next/image";

export default function Card({
  pic,
  logo,
  rating,
  reviewCount,
  location,
  title,
  price,
  openSpots,
}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className={styles.card}>
      {badgeText && <div className={styles.cardBadge}>{badgeText}</div>}
      <div>
        <Image
          className={styles.photo}
          src={pic}
          alt={pic}
          height={300}
          width={300}
        />
      </div>
      <div>
        <div className={styles.cardstats}>
          <Image src={logo} alt="red star" width={14} height={14} />
          <span>&nbsp;{rating}&nbsp;</span>
          <span className="grey">({reviewCount}) •&nbsp;</span>
          <span className="grey">{location}</span>
        </div>
        <h2>{title}</h2>
        <p>
          <span className="bold">From ${price}</span> / person
        </p>
      </div>
    </div>
  );
}
