import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import cardData from "@/data/data";

export default function MainContent() {
  const displayInfo = cardData.map((info) => (
    <Card
      id={info.id}
      pic={info.coverImg}
      logo={"/star.png"}
      rating={info.stats.rating}
      reviewCount={info.stats.reviewCount}
      location={info.location}
      title={info.title}
      price={info.price}
    />
  ));

  return (
    <>
      <Navbar />
      <Hero />
      <div>{displayInfo}</div>
    </>
  );
}
