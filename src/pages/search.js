import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "@/components/InfoCard";

function Search({ searchResults }) {
  console.log(searchResults);
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  console.log(router.query);
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const ranges = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${ranges} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays -{ranges} - {noOfGuests}- Guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            {" "}
            Stays in {location}
          </h1>
          <div className=" hidden lg:inline-flex mb-5 text-gray-800 whitespace-nowrap space-x-4">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/9Y15").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults: searchResults,
    },
  };
}
