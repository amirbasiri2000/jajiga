import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import { BiStats } from "react-icons/bi";

const CardMD = () => {
  return (
    <div>
      <div>
        <Link href="/" aria-label="اجاره ویلا با استخر آبگرم و جکوزی در چالوس">
          {/* ------------ */}
          <div className="relative w-[22rem] h-[13rem]">
            <div className="relative w-full h-[13rem]">
              <Image
                src="/images/best-rooms/1.jpg"
                alt="best-rooms"
                layout="fill"
                className="rounded-2xl"
              />
            </div>
            <div>
              <div className="absolute right-2 z-20 top-2 flex gap-y-1 flex-col">
                <span className="mt-2 flex cursor-pointer ">
                  <div className="flex justify-center items-center min-h-[1.5rem] w-[5.7rem] font-normal bg-white rounded-[12px] px-2 text-[11px] text-[#252a31] ">
                    <div className="  ml-1">
                      <AiOutlineStar className="w-4 h-4" />
                    </div>
                    <div className="py-0 pr-[6px] pl-[4px]">ممتاز</div>
                  </div>
                </span>
                <span className="flex cursor-pointer">
                  <div className="flex justify-center items-center min-h-[1.5rem] w-[5.7rem] font-normal bg-[#f0c807] rounded-[12px] px-2 text-[11px] text-[#333333]">
                    <div className="ml-1">
                      <BiStats className="w-4 h-4" />
                    </div>
                    <div className="py-0 pr-[6px] pl-[4px]">رزرو فوری</div>
                  </div>
                </span>
              </div>
              {/* -------- */}
              <div className="absolute z-10 pointer-events-none top-[8.5rem] right-0 text-white bg-[#333333b3] rounded-tl-[8px] rounded-bl-[8px] text-[14px] overflow-hidden">
                <div className="pt-[6px] pr-[12px] pb-[6px] pl-[8px]">
                  <div className="flex gap-x-2 text-[13px]">
                    <p className=" opacity-95 line-through">599,000</p>
                    <div className="bg-[#cc0001] rounded-[12px] px-2">
                      <div>15%</div>
                    </div>
                  </div>
                  <div>
                    <small className="ml-1"> از</small>
                    <span className="pointer-events-none text-white text-[14px]">
                      509,150
                      <small className="mr-1 text-[70%]">تومان</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className=" w-[22rem] text-[#666666] relative mt-2">
              <h2
                className="h-[20px] mb-2 text-ellipsis overflow-hidden text-[14px] font-bold text-[#252a31] align-right"
                title="اجاره ویلا جنگلی در علی آباد گلستان"
              >
                اجاره ویلا جنگلی در علی آباد گلستان
              </h2>
              <div className="text-[12px] font-normal flex items-center align-right">
                <span className="whitespace-nowrap overflow-hidden text-[1rem]">
                  3 خوابه . 180 متر . تا 18 مهمان
                </span>
                <span className="grow-0 shrink-0 basis-auto overflow-hidden text-[1rem] mr-3">
                  <span className="flex items-center">
                    <span>
                      <div>
                        <StarIcon className="w-4 text-[#f0c807]" />
                      </div>
                    </span>
                    <span className="mr-1 ml-0 text-[1rem]">4.9</span>
                    <span className="mr-[6px] whitespace-nowrap">
                      (143 نظر)
                    </span>
                  </span>
                </span>
              </div>
            </div>
          {/* ------------ */}
        </Link>
      </div>
    </div>
  );
};

export default CardMD;
