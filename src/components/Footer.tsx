import Image from "next/image";
import Link from "next/link";
import { Footer_quickSearch } from "../utils/types";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import Title_H3 from "./common/Title_H3";

interface Props {
  data: Footer_quickSearch[];
}

const Footer = ({ data }: Props) => {
  return (
    <div className="mt-8">
      <div className="bg-[#f1f1f1] overflow-hidden rounded-tl-2xl rounded-tr-2xl px-10 lg:px-28 md:px-20 flex justify-center items-center m-auto">
        <div className="pt-4 mt-4 md:grid md:grid-cols-2 md:items-start flex flex-col gap-y-8">
          {/* ------------- */}
          <div className="flex flex-col gap-y-4 sm:flex sm:justify-between lg:justify-between md:justify-around md:flex-row-reverse md:items-start">
            <div className="flex flex-col justify-center items-center ">
              <Title_H3 title="نصب اپلیکیشن جاجیگا" />
              <div className="flex flex-col justify-between items-center gap-y-[6px] md:gap-y-1 gap-x-1">
                <div className="flex items-center gap-x-1 mx-auto">
                  <div>
                    <Link href="/">
                      <div className="relative w-44 md:w-[5rem] md:h-[3.25rem] rounded-lg bg-black lg:w-32 h-16 ">
                        <Image
                          src="/images/install-applications/Bazzar.png"
                          alt="bazar"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </Link>
                  </div>

                  <div>
                    <Link href="/">
                      <div className="relative w-44 md:w-[5rem] md:h-[3.25rem] bg-black rounded-md lg:w-32 h-16">
                        <Image
                          src="/images/install-applications/PlayStore.png"
                          alt="bazar"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-x-1 mx-auto">
                  <div>
                    <Link href="/">
                      <div className="relative w-44 md:w-[5rem] md:h-[3.25rem] bg-black rounded-md lg:w-32 h-16">
                        <Image
                          src="/images/install-applications/Myket.png"
                          alt="bazar"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </Link>
                  </div>

                  <div>
                    <Link href="/">
                      <div className="relative w-44 md:w-[5rem] md:h-[3.25rem] bg-black rounded-md lg:w-32 h-16">
                        <Image
                          src="/images/install-applications/WebApp.png"
                          alt="bazar"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Title_H3 title="لینک های دسترسی" />
              <div className="flex justify-evenly w-full">
                <div className="flex flex-col justify-center items-center">
                  <Link href="/">
                    <p className="footer_link">چگونه مهمان شوم</p>
                  </Link>
                  <Link href="/">
                    <p className="footer_link">قوانین و مقررات</p>
                  </Link>
                  <Link href="/">
                    <p className="footer_link">پشتیبانی</p>
                  </Link>
                  <Link href="/">
                    <p className="footer_link">فرصت های شغلی</p>
                  </Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Link href="/">
                    <p className="footer_link">چگونه میزبان شوم</p>
                  </Link>
                  <Link href="/">
                    <p className="footer_link">مقررات لغو رزرو</p>
                  </Link>
                  <Link href="/">
                    <p className="footer_link">ثبت شکایت</p>
                  </Link>
                  <Link href="/">
                    <p className="footer_link">راهنمای سایت</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* ------------- */}
          <div className="flex flex-col gap-y-4 md:my-0 sm:flex sm:justify-between sm:flex-row md:justify-around items-center md:items-start  ">
            <div className="flex flex-col justify-center items-center mb-7">
              <Title_H3 title="با ما همراه شوید" />
              <div className="flex sm:flex-col gap-2 justify-center items-center">
                <div className="footer-instagram-icon-box-bg-shadow w-[31vw] sm:w-[30vw] md:w-[16vw] md:pt-1 rounded-lg h-12 md:h-[3.25rem] sm:h-10 pt-1 sm:pt-0 lg:w-36">
                  <Link href="/">
                    <div className="flex justify-center items-center gap-x-3 text-white">
                      <span>600K</span>
                      <AiOutlineInstagram className="w-10 h-10" />
                    </div>
                  </Link>
                </div>
                <div className="footer-telegram-icon-box-bg-shadow w-[31vw] sm:w-[30vw] md:w-[16vw] md:pt-1 rounded-lg h-12 md:h-[3.25rem] sm:h-10 pt-1 sm:pt-0 lg:w-36">
                  <Link href="/">
                    <div className="flex justify-center items-center gap-x-3 text-white">
                      <span>600K</span>
                      <FaTelegramPlane className="w-10 h-10" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <Title_H3 title="با خیال راحت به جاجیگا اعتماد کنید" />
              <div className="flex justify-between items-center md:grid md:grid-cols-2 md:gap-y-4">
                <div className=" footer-quick-links-shadow mx-2 bg-white w-[5rem] sm:w-[6rem] h-[5rem] sm:h-[6rem] p-1 rounded-xl cursor-pointer">
                  <Link href="/">
                    <div className="relative w-full h-full ">
                      <Image
                        src="/images/footer-quick-links/enamad.png"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </Link>
                </div>

                <div className=" footer-quick-links-shadow mx-2 bg-white w-[5rem] sm:w-[6rem] h-[5rem] sm:h-[6rem] p-1 rounded-xl cursor-pointer">
                  <Link href="/">
                    <div className="relative w-full h-full ">
                      <Image
                        src="/images/footer-quick-links/ecunion.png"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </Link>
                </div>

                <div className=" footer-quick-links-shadow mx-2 bg-white w-[5rem] sm:w-[6rem] h-[5rem] sm:h-[6rem] p-1 rounded-xl cursor-pointer">
                  <Link href="/">
                    <div className="relative w-full h-full ">
                      <Image
                        src="/images/footer-quick-links/mcth.png"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </Link>
                </div>

                <div className=" footer-quick-links-shadow mx-2 bg-white w-[5rem] sm:w-[6rem] h-[5rem] sm:h-[6rem] p-1 rounded-xl cursor-pointer">
                  <Link href="/">
                    <div className="relative w-full h-full ">
                      <Image
                        src="/images/footer-quick-links/iwfm.png"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* ------------- */}
          <div className="flex flex-col justify-center items-center">
            <div className="md:hidden">
              <Title_H3 title="جستجوی سریع" />
            </div>
            <div className="grid grid-cols-4 w-full gap-x-2">
              {data?.map((item) => (
                <div
                  key={item.id}
                  className="footer-quick-search-shadow flex flex-grow-0 shrink basis-44 mb-2 items-center bg-white rounded-xl text-ellipsis pr-3 pl-1 h-6 cursor-pointer"
                >
                  <Link href={item.link}>
                    <p className="flex-grow-1 shrink basis-auto font-medium text-[12px]">
                      {item.title}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* ------------- */}
        </div>
      </div>
      <div className="bg-[#cbcbcb] flex justify-center items-center py-3">
        <p className="text-[10px] text-[#6e6e6e]">
          کلیه حقوق این وبسایت متعلق به شرکت تجارت الکترونیک لوتوس آرمانی (سهامی
          خاص) می‌باشد.
        </p>
      </div>
    </div>
  );
};

export default Footer;
