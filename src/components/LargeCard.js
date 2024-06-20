import Image from "next/image";
function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          alt=""
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl hover:shadow-lg"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64 ">{title}</h3>
        <p>{description}</p>
        <button className=" cursor-pointer text-sm bg-black text-white rounded-lg py-2 px-4 mt-4  hover:scale-90 hover:transition transform duration-150">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
