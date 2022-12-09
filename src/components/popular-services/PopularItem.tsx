import CardSM from "../common/Card_sm";
import { Popular_ser } from "../../utils/types";

interface Props {
  Items: Popular_ser[];
}

const PopularItem = ({ Items }: Props) => {

  let Item_1 = [];
  let Item_2 = [];
  Items?.map((item, index) => {
    if (index % 2) {
      Item_1.push(item);
    }
    if (index % 2 != 1) {
      Item_2.push(item);
    }
  });
  return (
    <div className="flex flex-wrap">
      {Items.map((item) => (
        <CardSM key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PopularItem;
