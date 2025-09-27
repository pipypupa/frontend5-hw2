function App() {
  const Greeting = ({ name }) => <h1>Привіт, {name}!</h1>;
  const Message = ({ text }) => <p>{text}</p>;
  const Button = ({ onClick }) => (
    <button onClick={onClick}>Натисни мене</button>
  );

  const handleClick = () => {
    console.log("Кнопку натиснуто!");
  };

  return (
    <div>
      <Greeting name="Андрій" />
      <Message text="Що робиш?" />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
