const Content = () => {
  const handleNameChange = () => {
    const names = ["Yasi", "Yasaman", "Yasamanjoon"];
    let random = Math.floor(Math.random() * names.length);
    return names[random];
  };

  return (
    <main>
      <p>Hello, {handleNameChange()}! Let's add our groceries for today.</p>
    </main>
  );
};

export default Content;
