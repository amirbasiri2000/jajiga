import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <div className="">
      <div className="w-full h-[60vh] lg:h-[80vh] absolute top-0 right-0 -z-10">
        <Image className="object-cover" src="/images/landing/hero1.jpg" alt="hero" layout="fill" />
      </div>
      <div className="z-20 b flex flex-col justify-end items-center w-full h-[60vh] lg:h-[80vh]">
        <div className="mb-8 w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw] flex flex-col items-center gap-y-10">
          <h1 className="text-[1.4rem] text-white">
            اجاره ویلا در سراسر ایران زیبا
          </h1>
          <div className="flex w-full items-center bg-white rounded-full px-1 py-1 mb-10">
            <input
              type="text"
              placeholder="می خوای کجا بری ؟"
              className="ring-0 outline-none bg-transparent px-3 w-full"
            />
            <MagnifyingGlassIcon className="w-8 bg-yellow-500 rounded-full p-1" />
          </div>
          <div className="flex flex-col items-center text-white">
            <h2 className="text-[1.2rem] font-bold">جاجیگا</h2>
            <p>مثل خونه خودته : )</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
