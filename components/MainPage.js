import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function MainPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <div>
                <Card 
                    pic={"/katie-zaferes.png"}
                    logo={"/star.png"}
                    rating={"5.0"} 
                    reviewCount={6} 
                    country={"USA"} 
                    title={"Life Lessons with Katie Zaferes"} 
                    price ={136}
                />
                <Card 
                    pic={"/katie-zaferes.png"}
                    logo={"/star.png"}
                    rating={"2.1"} 
                    reviewCount={212} 
                    country={"Bolivia"} 
                    title={"hang out with some guy"} 
                    price ={150}
                />
            </div>
        </>
    )
}