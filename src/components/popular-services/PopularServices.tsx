import CardSM from "../common/Card_sm";
import PopularItem from "./PopularItem";
import { data } from "../../utils/data";


const PopularServices = () => {


const Items = data.popular_services;

  return <div className="max-w-[70rem] m-auto ">
    <PopularItem Items={Items} />
  </div>;
};

export default PopularServices;
