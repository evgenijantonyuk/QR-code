import {Route, Routes} from "react-router-dom"
import { Navigation } from './components/Navigation/Navigation.jsx'
import { QrCodeGenerator } from "./components/Generation/QrCodeGenerator.jsx"
import { QrCodeScanner } from "./components/Scan/QrCodeScanner.jsx"
import { GenerateHistory } from "./components/GenerateHistory/GenerateHistory.jsx"
import { ScanHistory } from "./components/ScanHistory/ScanHistory.jsx"

const Layout = () => {
    return (
        <div>
            <Navigation />
            
            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/scanHistory" element={<ScanHistory />} />
                <Route path="/generateHistory" element={<GenerateHistory />} />
            </Routes>
        </div>
    )
}

export { Layout }
