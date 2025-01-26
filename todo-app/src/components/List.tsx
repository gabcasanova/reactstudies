import React, { FC, useState } from "react";
import ListItem from "./ListItem";
import CreateTask from "./CreateTask";
import { Link } from "react-router";

interface Props {
  name: string;
  todo: string[];
  done: string[];
}

const List: FC<Props> = ({ name, todo: toDoList, done: doneList }) => {
  // List of incompleted tasks.
  const [listToDo, setListToDo] = useState<string[]>(toDoList);

  // List of completed tasks.
  const [listDone, setListDone] = useState<string[]>(doneList);

  // Remove item from one list and re-create it in another list.
  const removeFromList = (
    itemToRemove: string,
    listToRemove: React.Dispatch<React.SetStateAction<string[]>>,
    listToAdd: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    listToRemove((prevList: string[]) =>
      prevList.filter((item) => item !== itemToRemove)
    );

    listToAdd((prevList: string[]) => [...prevList, itemToRemove]);
  };

  // Create listitems for all items in the to-do list.
  const toDoItems = listToDo.map((text: string) => (
    <ListItem
      key={text}
      itemChecked={false}
      text={text}
      handleChange={() => removeFromList(text, setListToDo, setListDone)}
    />
  ));

  // Create listitems for all items in the completed list.
  const doneItems = listDone.map((text: string) => (
    <ListItem
      key={text}
      itemChecked={true}
      text={text}
      handleChange={() => removeFromList(text, setListDone, setListToDo)}
    />
  ));

  // Add new item to a specific list.
  const [newItemText, setNewItemText] = useState<string>("");

  const addToList = (
    listToAdd: React.Dispatch<React.SetStateAction<string[]>>,
    text: string
  ) => {
    listToAdd((prevList: string[]) => [...prevList, text]);
  };

  // Save list to browser
  const saveList = () => {
    localStorage.setItem(
      `list_${name}`,
      JSON.stringify({ name: name, todo: listToDo, done: listDone })
    );
  };

  return (
    <div
      className="flex flex-col items-center 
                 bg-gray-200 text-black rounded-xl 
                 m-5 p-3 w-200"
    >
      <h1 className="col-span-2 text-3xl font-bold mt-5 mb-3">{name}</h1>
      <Link className="mb-10 text-blue-800 hover:font-bold duration-200" to="/">&#11160; Return</Link>

      <CreateTask
        onClick={() => addToList(setListToDo, newItemText)}
        onChange={(text) => setNewItemText(text)}
      />

      <div className="w-170 mt-3 grid grid-cols-2">
        <div className="bg-gray-300 rounded-md mr-2">
          <h2 className="text-center m-2 text-xl font-bold">To-Do</h2>
          <div>{toDoItems}</div>
        </div>

        <div className="bg-gray-300 rounded-md ml-2">
          <h2 className="text-center m-2 text-xl font-bold">Done</h2>
          <div>{doneItems}</div>
        </div>
      </div>

      <button
        className="justify-self-end p-2 pl-5 pr-5 mt-auto mb-5 rounded-xl 
                   bg-gray-700 text-white hover:rounded-2xl hover:bg-gray-800 duration-200 
                   text-2xl cursor-pointer"
        onClick={saveList}
      >
        💾 Save
      </button>
    </div>
  );
};

export default List;
