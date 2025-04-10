import { Scanner } from '@yudiel/react-qr-scanner'
import  { useState } from "react"
import s from './QrCodeScanner.module.css'
import { SCAN_DATA } from '../../constants.js'

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null)
    
    const scanHandler = (result) => {
        console.log(result)
        setScanned(result[0].rawValue)
        
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
        
        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, result[0].rawValue])
        )
    }
    const settings = {
        audio: false,
        finder: false,
    }

    return (
        <div className={s.container}>
            <p className={s.result}>{scanned}</p>
            <Scanner
                components={settings}
                onScan={scanHandler}
                styles={{
                    container: {width: 350}
                }}
            />
        </div>
    )
}
