import Image from "next/image";
import SearchIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import GlobeAltIcon from "@heroicons/react/24/solid/GlobeAltIcon";
import MenuIcon from "@heroicons/react/24/solid/Bars3Icon";
import UserIcon from "@heroicons/react/24/solid/UserCircleIcon";
import GuestIcon from "@heroicons/react/24/solid/UsersIcon";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Header({ placeholder }) {
  const { data: session } = useSession();
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();
  const HandleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const register = () => {
    router.push({
      pathname: "/login",
    });
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-8">
      {/* lesft side div */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          alt=""
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* mid div */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon
          onClick={search}
          className="hidden md:inline-flex h-7 bg-red-400 active:bg-gray-100 text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>
      {/* right side div */}
      <div className="flex items-center space-x-4 justify-end  text-gray-600  ">
        <p
          className="hidden md:inline cursor-pointer hover:text-lg hover:text-red-400"
          onClick={session?.user?.name ? null : () => register()}
        >
          {session?.user?.name
            ? `Welcome ${session?.user?.name}`
            : "Airbnb your Home"}
        </p>
        {session?.user?.name && (
          <p
            className="hidden md:inline cursor-pointer hover:text-lg hover:text-red-400"
            onClick={signOut}
          >
            Logout
          </p>
        )}
        <GlobeAltIcon className=" hidden md:inline h-6 cursor-pointer" />
        <div className="flex items-center space-x-1 border-2 rounded-xl px-2 py-1 ">
          <MenuIcon
            className="h-6 cursor-pointer hidden md:inline text-bold px-2 active:text-red-400"
            onClick={register}
          />
          <button
            className="md:hidden text-gray-600 text-lg flex items-end text-end"
            onClick={register}
          >
            Login
          </button>
          <UserIcon className="h-6 cursor-pointer " onClick={register} />
        </div>
      </div>
      <div className="flex  mt-4 items-center space-x-2 justify-end text-center  ">
        <p
          className="md:hidden px-2 py-2  border-2 border-red-400  rounded-lg cursor-pointer  hover:text-red-400"
          onClick={session?.user?.name ? null : () => register()}
        >
          {session?.user?.name ? ` ${session?.user?.name}` : "Airbnb your Home"}
        </p>
        {session?.user?.name && (
          <p
            onClick={signOut}
            className=" px-2 py-1  md:hidden hover:text-red-500 rounded-xl "
          >
            Logout
          </p>
        )}
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-3">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={HandleSelect}
          />
          <div className="flex items-center mb-4 border-b">
            <h2 className="text-2xl flex-grow text-semibold">
              Number of Guests
            </h2>
            <GuestIcon className="h-5 pr-1" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              className="w-10 pl-1 text-lg outline-none text-red-400"
              type="number"
              min={1}
            />
          </div>
          <div className="flex  ">
            <button
              onClick={resetInput}
              className="flex-grow text-gray-500 hover:shadow-lg"
            >
              {" "}
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow text-red-400  active:text-red-700 hover:shadow-lg active:scale-90 transiton transform duration-150"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
