import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "../components/Footer";
export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title> airbnb2.0</title>
        <link rel="icon" href="logo.jpeg" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto pt-6 px-8 sm:px-16">
        <secton className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* pull some data from the server API endpoints already created on the server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </secton>
        <section>
          <h2 className="font-semibold text-4xl py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/MHMX").then(
    (res) => res.json()
  );
  const cardData = await fetch("https://www.jsonkeeper.com/b/WQON").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      cardData,
    },
  };
  // const Data = await exploreData.json;
  // return (Data);
}
