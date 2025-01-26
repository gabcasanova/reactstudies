import { FC } from "react";

interface Props {
  text: string;
  itemChecked: boolean;
  handleChange: () => void;
}

const ListItem: FC<Props> = ({ text, itemChecked, handleChange }) => {
  return (
    <div className="m-3 hover:font-bold duration-200 cursor-default">
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={itemChecked}
        onChange={handleChange}
      />
      <label>
        <p className="inline ml-2">{text}</p>
      </label>
    </div>
  );
};

export default ListItem;
