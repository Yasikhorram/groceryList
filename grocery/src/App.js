import Header from "./Header";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import SearchItem from "./SearchItem";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("Yas");
  const [items, setItem] = useState(
    JSON.parse(localStorage.getItem("shoppingList") || [])
    //   [
    //   {
    //     id: 1,
    //     checked: false,
    //     item: "chocolate",
    //   },
    //   {
    //     id: 2,
    //     checked: false,
    //     item: "water",
    //   },
    //   {
    //     id: 3,
    //     checked: false,
    //     item: "apple",
    //   },
    // ]
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => console.log("use effect just ran"));

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItem(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const handleNameChange = () => {
    let names = ["Yasi", "Yasaman", "YasamanJoon"];
    let random = Math.floor(Math.random() * names.length);
    return setName(names[random]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const handleSearch = (search) => {
    items.filter((element) =>
      element.item === search ? setItem(search) : items
    );
  };

  return (
    <div className="App">
      <Header title="Groceries" />
      <SearchItem search={search} setSearch={setSearch} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        handleSearch={handleSearch}
      />
      <p>Hello, {name}! Let's add our groceries.</p>
      <button onClick={handleNameChange}>Change Name </button>
      <Content
        items={items.filter((element) =>
          element.item.toLowerCase().includes(search.toLowerCase())
        )}
        setItem={setItem}
      />

      <Footer length={items.length} />
    </div>
  );
}

export default App;
