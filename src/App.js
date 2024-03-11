import React,  { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  outline: none;
  border-width: 0px;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: inherit;
  font-weight: 500;
  max-width: 100%;
  text-align: center;
  text-decoration: none;
  transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
  background: rgb(0, 82, 204);
  cursor: pointer;
  height: 32px;
  line-height: 32px;
  padding: 0px 12px;
  vertical-align: middle;
  width: auto;
  font-size: 14px;
  color: rgb(255, 255, 255);
  &:hover {
    background: rgb(0, 101, 255);
    text-decoration: inherit;
    transition-duration: 0s, 0.15s;
    color: rgb(255, 255, 255);
  }
`;

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
        <Button type="submit" name="button" value={content}>Click me</Button>
      </form>
    </div>
  )
}

function MyButton() {
  function handleClick() {
    alert("You have clicked me!");
  }
  return (
    <Button onClick={handleClick}>
      Click me
    </Button>
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
