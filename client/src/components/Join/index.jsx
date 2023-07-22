import { useRef } from "react"
import io from 'socket.io-client'

export default function Join({setChatVisibility, setSocket}) {
    const usernameRef = useRef()

    function handleSubmit(){
        const username = usernameRef.current.value;
        if(!username.trim()) return
            //url do servidor
            const socket = io('http://localhost:5000');
            socket.emit('set_username', username);
            setSocket(socket);
            setChatVisibility(true);
    }

    return (
      <div>
        <h1>Join</h1>
        <input ref={usernameRef} type="text" placeholder="Nome de usuário..." id="" />
        <button onClick={() => handleSubmit()}>Entrar</button>
      </div>
    )
  }
  