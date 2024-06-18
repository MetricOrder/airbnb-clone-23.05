import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import cardData from "@/data/data";
import styles from "@/styles/MainContent.module.css"


export default function MainContent() {
  const displayInfo = cardData.map((info) => (
    <Card
      key={info.id}
      info={info}
    />
  ));

  return (
    <>
      <Navbar />
      <Hero />
      <div className={styles.row}>{displayInfo}</div>
    </>
  );
}
