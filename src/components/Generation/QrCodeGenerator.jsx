
import { useState } from "react";
import { QRCodeSVG } from 'qrcode.react'
import {GENERATE_DATA } from "../../constants.js";
import s from "./qrCodeGenerator.module.css";

const QrCodeGenerator = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    
    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
        
        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value])
        )
    
        setResult(value)
       setValue('')
    }
    const onChangeHandler = (event) => {
        setValue(event.target.value)
        setResult('')
    }
    console.log('result:', result)
    return (
        <div className={s.container}>
            <input className={s.input}
                   type="text"
                   placeholder="Введите текст..."
                   value={value}
                   onChange={onChangeHandler} />
            <button className={s.generatorBtn} type="button" onClick={onClickHandler}>Сгенерировать QR-Code</button>
            {result !== '' && <QRCodeSVG value={result} size={200}/>}
        </div>
    )
}

export { QrCodeGenerator }
