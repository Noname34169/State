import React, { useState } from 'react'
import './State.css'

const State = () => {

    const [num, setNum] = useState(0) 
    const [text, setText] = useState('')
    const [img, setImg] = useState(false)
    const [open, setOpen] = useState('OPEN')
    const [close, setClose] = useState('CLOSE')

    const plus = () => {
        if (num < 10) {
            setNum(num + 1)
        }
    }

    const minus = () => {
        if (num > 0) {
            setNum(num - 1)
        }
    }

    const change = () => {
        setImg(!img)
        setOpen(img ? 'OPEN' : 'CLOSE')
    }

  return (
    <>

    <div className="box">
        <button onClick={change}>{open} IMAGE</button>
        {img && (
            <img src="https://abbos29.github.io/dream/img/main.png" alt="" />
        )}
    </div>

    <div className="box">
     <h2>{text}</h2>
     <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>


      <div className="box">
        <h2>{num}</h2>
        <button onClick={plus}>Увеличеть число</button>
        <button onClick={minus}>Уменьшеть число</button>
        <button onClick={() => setNum(num * 2)}>Удвоить число</button>
        <button onClick={() => setNum(num / 2)}>Разделить число</button>
        <button onClick={() => setNum(0)}>Обнулить число</button>
      </div>
    </>
  )
}

export default State