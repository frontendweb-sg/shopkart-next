import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[450px] overflow-hidden mb-6 relative">
      <Image
        className="bg-gray-300 h-full  object-cover w-full rounded-md"
        src="/banner-3.webp"
        alt="Banner"
        fill={true}
      />
    </div>
  );
};

export default Hero;
