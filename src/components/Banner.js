import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        alt=""
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="tyext-sm sm:text-lg ">
          Not sure to where to go ? Perfect.
        </p>
        <button className="text-purple-500 bg-white px-8 py-4 shadow-sm rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition transform duration-150 ">
          I am Flexible.
        </button>
      </div>
    </div>
  );
}

export default Banner;
