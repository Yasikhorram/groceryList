import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [count, setCount] = useState(0);
  const [items, setItem] = useState([
    {
      id: 1,
      checked: false,
      item: "chocolate",
    },
    {
      id: 2,
      checked: false,
      item: "water",
    },
    {
      id: 3,
      checked: false,
      item: "apple",
    },
  ]);

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <main>
      <ul>
        {items.map((grocery) => (
          <li className="item" key={grocery.id}>
            <input type="checkbox" checked={grocery.checked} />
            <label>{grocery.item}</label>

            <span> {count}</span>

            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
      <p>{count}</p>
      <button onClick={handleAdd}>Add items</button>
    </main>
  );
};

export default Content;
