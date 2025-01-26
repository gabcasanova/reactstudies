import { FC, useState } from "react";

interface Props {
  onClick: () => void;
  onChange: (text: string) => void;
}

const CreateTask: FC<Props> = ({ onClick, onChange }) => {
  const [text, setText] = useState<string>("");

  return (
    <div className="bg-gray-400 rounded-xl mt-0 m-2 p-3 text-center hover:rounded-2xl duration-200">
      <p className="mb-2">Add new task</p>

      <input
        className="bg-white rounded-md p-2 w-70 "
        value={text}
        onChange={(e) => {
          onChange(e.target.value);
          setText(e.target.value);
        }}
      />
      <button
        className="bg-gray-500 rounded-md p-2 ml-2 hover:bg-gray-600 duration-200 cursor-pointer"
        onClick={() => {
          onClick();
          setText("");
        }}
      >
        ➕
      </button>
    </div>
  );
};

export default CreateTask;
