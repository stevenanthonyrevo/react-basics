import React,  { useState } from 'react';

function MyInput() {
  const [content, setContent] = useState('');
  function send(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const content = formData.get("content");
    const button = event.target.button.value;

    if (!content || content.trim() === "") {
      window.alert("Content cannot be empty");
      return;
    }

    alert(`formData: '${content}' submit was clicked input: '${button}'`);
  }
  return (
    <div style={{ paddingBottom: '20px', paddingTop: '20px' }}>
      <form onSubmit={send}>
        <textarea 
          name="content" 
          rows={1} 
          cols={40} 
          placeholder='Describe yourself here...'
          value={content} 
          onChange={(event) => setContent(event.target.value)}  />
        <br />
        <button type="submit" name="button" value={content}>Click me</button>
      </form>
    </div>
  )
}

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
      <MyInput></MyInput>
    </div>
  );
}

export default App;
