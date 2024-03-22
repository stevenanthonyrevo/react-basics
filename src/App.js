import React, { useState } from 'react';
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

const Input = styled.input`
  width: auto;
  height: 56px;
  position: relative;
  padding: 0px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: #f6f6f6;
  color: #282828;
  outline: none;
  border: 1px solid #e3e3e3;
  box-shadow: 0px 4px 20px 0px transparent;
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
  -webkit-appearance: none;
  &:focus {
    border-color: #1652cc;
    transition: border-color 0.3s ease-in-out;
    outline: 0;
  }
`

const Textarea = styled.textarea`
  width: auto;
  resize: none;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  &:focus {
    border-color: #1652cc;
    transition: border-color 0.3s ease-in-out;
    outline: 0;
  }
`

function MyPostMethodForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          mobileNumber: mobileNumber,
        })
      })
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMobileNumber("");
        setMessage("User created successfully: \n" + JSON.stringify(resJson.data) );
      } else {
        setMessage("Some error occured")
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <form style={ { display: 'inline-grid', margin: '0', width: '100%'} } onSubmit={handleSubmit}>
        <Input
          style={{ marginBottom: '.4rem' }}
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)} />
        <Input
          style={{ marginBottom: '.4rem' }}
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />
        <Input
          style={{ marginBottom: '.4rem' }}
          type="tel"
          pattern="\d*"
          value={mobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)} />
        <Button type="submit" name="create">Create</Button>
        <div style={{ wordWrap: 'revert-layer', whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{__html: message }}></div>
      </form>
    </div>
  );
}

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
        <Textarea 
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
      <MyPostMethodForm></MyPostMethodForm>
    </div>
  );
}

export default App;
