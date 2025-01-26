import { FC, useState } from "react";

interface Props {
  onClick: () => void;
}

const CreateList: FC<Props> = ({ onClick }) => {
  const [text, setText] = useState<string>("");

  const defaultList = {
    name: text,
    todo: [],
    done: [],
  };

  const createList = () => {
    localStorage.setItem(`list_${text}`, JSON.stringify(defaultList));
  };

  return (
    <div className="bg-blue-300 text-black rounded-xl mt-5 p-3 text-center hover:rounded-2xl duration-200">
      <p className="mb-2 ">Create new list</p>

      <input
        className="bg-white rounded-md p-2 w-70 "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-500 rounded-md p-2 ml-2 hover:bg-gray-600 duration-200 cursor-pointer"
        onClick={() => {
          createList();
          onClick();
          setText("");
        }}
      >
        ➕
      </button>
    </div>
  );
};

export default CreateList;
