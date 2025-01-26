import { useEffect, useState } from "react";
import { Link } from "react-router";
import CreateList from "../components/CreateList";

const Home = () => {
  // Base list setup.
  interface List {
    name: string;
    todo: string[];
    done: string[];
  }

  const [effect, updateEffect] = useState<number>(0);
  const [lists, updateLists] = useState<List[]>([]);

  // Create an array of lists, go through all the
  // information in localstorage and populate the list array.
  useEffect(() => {
    const items = { ...localStorage }; // Check the client's storage.

    const newLists: List[] = [];

    for (const key in items) {
      if (Object.prototype.hasOwnProperty.call(items, key)) {
        const element = items[key];

        if (key.startsWith("list_")) {
          const parsedElement = JSON.parse(element);

          newLists.push({
            name: parsedElement.name,
            todo: parsedElement.todo || [],
            done: parsedElement.done || [],
          });
        }
      }
    }

    // Update the state once with all the new values
    updateLists(newLists);
  }, [effect]);

  // Update display when added new listitem.
  const updateEffectDisplay = () => {
    updateEffect(effect + 1);
  };

  // Delete list.
  const deleteList = (name: string) => {
    localStorage.removeItem(name);
    updateEffectDisplay();
  };

  // Display all lists.
  const displayLists = lists.map((element, index) => (
    <li
      className="list-disc list-inside hover:font-bold duration-200"
      key={index}
    >
      <Link
        to="/activities"
        state={{ name: element.name, todo: element.todo, done: element.done }}
      >
        {element.name}
      </Link>

      <button
        className="ml-5 cursor-pointer"
        onClick={() => deleteList(`list_${element.name}`)}
      >
        🗑
      </button>
    </li>
  ));

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cyan-900 text-white">
      <div className="text-center mb-30">
        <h1 className="font-mono text-2xl">Gabriel's Simple</h1>
        <h1 className="font-mono text-6xl">To-Do List</h1>
        <p className="font-mono mt-3 text-5xl">📝</p>
      </div>

      <div className="text-center">
        <p className="text-xl font-bold mb-3">Your Lists:</p>

        <ul>{displayLists}</ul>
      </div>

      <CreateList onClick={updateEffectDisplay} />
    </div>
  );
};

export default Home;
