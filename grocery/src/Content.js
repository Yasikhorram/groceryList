import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, setItem }) => {
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const newArr = items.filter((item) => id !== item.id);
    setItem(newArr);
    localStorage.setItem("shoppingList", JSON.stringify(newArr));
  };

  return (
    <main>
      <ul>
        {items.map((grocery) => (
          <li className="item" key={grocery.id}>
            <input
              type="checkbox"
              checked={grocery.checked}
              onChange={() => handleCheck(grocery.id)}
            />
            <label
              style={
                grocery.checked ? { textDecoration: "line-through" } : grocery
              }
            >
              {grocery.item}
            </label>

            <FaTrashAlt
              role="button"
              tabIndex="0"
              onClick={() => handleDelete(grocery.id)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
