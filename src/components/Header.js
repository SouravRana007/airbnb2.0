import Image from "next/image";
import SearchIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import GlobeAltIcon from "@heroicons/react/24/solid/GlobeAltIcon";
import MenuIcon from "@heroicons/react/24/solid/Bars3Icon";
import UserIcon from "@heroicons/react/24/solid/UserCircleIcon";
import GuestIcon from "@heroicons/react/24/solid/UsersIcon";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
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

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-8">
      {/* lesft side div */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
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
          placeholder="start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-7 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* right side div */}
      <div className="flex items-center space-x-4 justify-end  text-gray-600  ">
        <p className="hidden md:inline cursor-pointer">Airbnb your Home</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2 cursor pointer">
          <MenuIcon className="h-6 " />
          <UserIcon className="h-6" />
        </div>
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
            <button onClick={resetInput} className="flex-grow text-gray-500">
              {" "}
              Cancel
            </button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
