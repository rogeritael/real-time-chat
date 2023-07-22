import { useState } from 'react'
import './App.css'
import Chat from './components/Chat'
import Join from './components/Join'

function App() {
  const [chatVisibility, setChatVisibility] = useState(false);
  const [socket, setSocket] = useState(null)

  return (
    <>
      { chatVisibility ? <Chat socket={socket} /> : <Join setSocket={setSocket} setChatVisibility={setChatVisibility} /> }
    </>
  )
}

export default App
