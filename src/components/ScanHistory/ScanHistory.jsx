
import { QRCodeSVG } from "qrcode.react";
import { SCAN_DATA} from "../../constants.js";
import s from './ScanHistory.module.css'

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
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
