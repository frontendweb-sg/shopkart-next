import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-5 gap-5 xl:gap-7 mb-12 md:mb-14 xl:mb-16">
      <div className="carouselWrapper relative mx-0  rounded-md overflow-hidden">
        <Image
          className="bg-gray-300 object-cover w-full rounded-md"
          src="/banner-3.webp"
          alt="Banner"
          width={1800}
          height={600}
        />
      </div>
    </div>
  );
};

export default Hero;
