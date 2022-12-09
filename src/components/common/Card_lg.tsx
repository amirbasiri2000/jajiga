import Image from "next/image";
import Link from "next/link";
import { ShareIcon } from "@heroicons/react/24/outline";

const CardLG = () => {
  return (
      <Link href="/" >
        <div className="relative w-[12.5rem] h-[16.5rem] shadow-inner rounded-xl shadow-gray-500">
          <Image
            className="w-full h-full rounded-xl z-0"
            layout="fill"
            src="/images/fast-search/2.jpg"
            alt="card"
          />
          {/* cover */}
          {/* <div className="bg-gray-600 rounded-xl bg-opacity-30 w-full h-full z-10 absolute" /> */}
          {/* cover */}
          <div className="absolute flex gap-y-2 pb-2 flex-col justify-center items-center z-30 w-full bottom-0">
            <h2 className="text-white font-bold text-[14px]">
              اقامتگاه بوم کردی
            </h2>
            <div className="flex items-center gap-x-4 ">
              <p className="text-[#ddd] text-[10px]">
                <span>2032</span>
                اقامتگاه
              </p>
              <ShareIcon className="w-5 text-[#ddd]" />
            </div>
          </div>
        </div>
      </Link>
  );
};

export default CardLG;
