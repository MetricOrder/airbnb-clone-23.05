import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import img from "@/images/katie-zaferes.png"

export default function MainPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Card 
                pic ={"/images/katie-zaferes.png"}
                rating={"5.0"} 
                reviewCount={"(6)"} 
                country={"USA"} 
                title={"Life Lessons with Katie Zaferes"} 
                price ={"$136"}
            />
        </>
    )
}