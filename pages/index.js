import Head from "next/head";
import { Poppins } from "next/font/google";
import MainPage from "../components/MainPage";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function Home() {
  return (
    <div className={poppins.className}>
      <Head>
        <title>Airbnb Clone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainPage />
    </div>
  );
}
