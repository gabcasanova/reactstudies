//import { Fragment } from "react/jsx-runtime";
// import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}


// props -> input passed to a component
//          similar to function arguments
//          immutable (readOnly)

// state -> data managed by a component
//          similar to local variables
//          mutable

function ListGroup({ items, heading, onSelectItem }: Props) {
  //let selectedIndex = 0;

  // items = [];

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //const [name, setName] = useState()
  //arr[0] // variable (selectedIndex)
  //arr[1] // updater function

  // const handleClick = (event: MouseEvent) => console.log(event);

  // note: other ways of encapsulating elements: Fragments or Div
  // note: jsx doesn't have a FOR loop.

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p> No item found. </p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
