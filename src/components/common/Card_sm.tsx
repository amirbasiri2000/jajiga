import Image from "next/image";
import Link from "next/link";
import { Popular_ser } from "../../utils/types";

interface Props {
 item : Popular_ser
}

const CardSM = ({ item }: Props) => {

  
  
  const { type, location, number, image } = item;
  return (
    <div>
      <Link href="/">
        <div className=" flex lg:m-5 m-3 gap-2 ">
          <div className="relative w-[4.3rem] lg:w-[8.7rem] lg:h-[8.7rem] h-[4.3rem]">
            <Image
              className="rounded-xl"
              src={image}
              alt="card"
              layout="fill"
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h6 className="text-[.8rem] text-[var(--primary-gray)] mb-1">
              اجاره {type} در
            </h6>
            <span className="font-bold text-[14px] mb-1">{location}</span>
            <p className="text-[.7rem] text-[var(--primary-gray)]">
              <span>{number}</span> اقامتگاه
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardSM;
