
import {GENERATE_DATA} from "../../constants.js"
import s from './GenerateHistory.module.css'
import {QRCodeSVG} from "qrcode.react";

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
    return (
        <div  className={s.history}>
            {data.map((text) => (
                <p className={s.item} key={text}>
                    {text} -
                    <QRCodeSVG value={text} size={50} />
                </p>
            ))}
        </div>
    )
}
