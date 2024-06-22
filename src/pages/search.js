import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  console.log(router.query);
  return (
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays for 5 guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6"> Stays in Mars</h1>
          <div className=" hidden lg:inline-flex mb-5 text-gray-800 whitespace-nowrap space-x-4">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
