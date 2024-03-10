import React from 'react';

function MyButton() {
  function handleClick() {
    alert("You have clicked me!");
  }
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  )
}

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <MyButton></MyButton>
    </div>
  );
}

export default App;
