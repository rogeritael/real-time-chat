import { useRef, useState, useEffect } from "react"

export default function Chat({ socket }) {
  const messageRef = useRef()
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    
    socket.on('receive_message', data => {
      setMessageList((current) => [...current, data])
    })

    //para nao ficar repetindo mensagens, rodando o evento mais de uma vez
    return () => socket.off('receive_message')
  }, [socket])

  function handleSubmit(){
    const message = messageRef.current.value
    if(!message.trim()) return

    //enviando um evento com o nome mensagem para o servidor
    socket.emit('message', message)

    messageRef.current.value = ''
  }

  return (
    <div>
        <h1>Chat</h1>
        <div>
          {messageList.map((message, index) => (
            <p key={index}>{message.author}: {message.text}</p>
          ))}
        </div>
        <input ref={messageRef} type="text" placeholder="Mensagem..." id="" />
        <button onClick={() => handleSubmit()}>Enviar</button>
    </div>
  )
}
