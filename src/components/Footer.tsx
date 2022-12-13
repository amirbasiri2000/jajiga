import Image from "next/image";
import Link from "next/link";
import { Footer_quickSearch } from "../utils/types";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

interface Props {
  data: Footer_quickSearch[];
}

const Footer = ({ data }: Props) => {
  console.log(data);
  return (
    <div className="mt-8">
      <div className="bg-[#f1f1f1] overflow-hidden rounded-tl-2xl rounded-tr-2xl px-4 flex justify-center items-center m-auto">
        <div className="pt-4 mt-4">
          <div>
            <div className="flex flex-col justify-center items-center ">
              <h3
                className="text-lg font-bold pb-2 text-[#252a31]"
                title="نصب اپلیکیشن جاجیگا"
              >
                نصب اپلیکیشن جاجیگا
              </h3>
              <div className="flex flex-col justify-between items-center gap-y-[6px] gap-x-1">
                <div className="flex items-center gap-x-1 mx-auto">
                  <div>
                    <Link href="/">
                      <div className="relative w-44 h-16">
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
                      <div className="relative w-44 h-16">
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
                      <div className="relative w-44 h-16">
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
                      <div className="relative w-44 h-16">
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
              <h3
                className="text-lg font-bold pb-2 text-[#252a31]"
                title="لینک های دسترسی"
              >
                لینک های دسترسی
              </h3>
              <div className="flex">
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
          <div className="my-7">
            <div className="flex flex-col justify-center items-center mb-7">
              <h3
                className="text-lg font-bold pb-2 text-[#252a31]"
                title="با ما همراه شوید"
              >
                با ما همراه شوید
              </h3>
              <div className="flex gap-2 justify-center items-center">
                <div className="footer-instagram-icon-box-bg-shadow w-[45vw] rounded-lg h-12 pt-1">
                  <Link href="/">
                    <div className="flex justify-center items-center gap-x-3 text-white">
                      <span>600K</span>
                      <AiOutlineInstagram className="w-10 h-10" />
                    </div>
                  </Link>
                </div>
                <div className="footer-telegram-icon-box-bg-shadow w-[45vw] rounded-lg h-12 pt-1">
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
              <h3
                className="text-lg font-bold pb-2 text-[#252a31]"
                title="با خیال راحت به جاجیگا اعتماد کنید"
              >
                با خیال راحت به جاجیگا اعتماد کنید
              </h3>
              <div className="flex justify-between items-center">
                <div className=" footer-quick-links-shadow mx-2 bg-white w-[80px] h-[80px] p-1 rounded-xl cursor-pointer">
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

                <div className=" footer-quick-links-shadow mx-2 bg-white w-[80px] h-[80px] p-1 rounded-xl cursor-pointer">
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

                <div className=" footer-quick-links-shadow mx-2 bg-white w-[80px] h-[80px] p-1 rounded-xl cursor-pointer">
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

                <div className=" footer-quick-links-shadow mx-2 bg-white w-[80px] h-[80px] p-1 rounded-xl cursor-pointer">
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
            <h3
              className="text-lg font-bold pb-2 text-[#252a31]"
              title="جستجوی سریع"
            >
              جستجوی سریع
            </h3>
            <div className="flex flex-wrap w-[100vw] overflow-y-auto gap-x-2">
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
