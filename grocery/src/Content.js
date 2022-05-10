import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, setItem }) => {
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(listItems);
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
            <label>{grocery.item}</label>

            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
