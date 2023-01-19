import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  let soundSource = "https://www.w3schools.com/html/horse.mp3";
  let sound = new Audio(soundSource);

  const showNotification = () => {
    // create a new notification
    const notification = new Notification('JavaScript Notification API', {
        body: 'This is a JavaScript Notification API demo',
        icon: './img/js.png',
    });
    sound.play();

    // close the notification after 10 seconds
    setTimeout(() => {
        notification.close();
    }, 10 * 1000);

    // navigate to a URL when clicked
    notification.addEventListener('click', () => {
        window.open('https://www.javascripttutorial.net/web-apis/javascript-notification/', '_blank');
    });
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => showNotification()}>
          Notification Mobile
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
