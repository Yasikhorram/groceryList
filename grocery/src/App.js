import "./App.css";
import Header from "./Header";

function App() {
  const handleNameChange = () => {
    const names = ["Yasi", "Yasaman", "Yasamanjoon"];
    let random = Math.floor(Math.random() * names.length);
    return names[random];
  };
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
