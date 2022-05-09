import { useState } from "react";

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
            <button>Delete</button>
          </li>
        ))}
      </ul>
      <p>Items: {count}</p>
      <button onClick={handleAdd}>ADD </button>
    </main>
  );
};

export default Content;
