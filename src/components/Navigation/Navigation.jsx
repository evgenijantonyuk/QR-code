import { Link } from 'react-router-dom'
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
        <nav className={s.nav}>
            <Link className={s.navLink} to="./generate">Генерировать QR-код</Link>
            <Link className={s.navLink} to="./scan">Сканировать QR-код</Link>
            <Link className={s.navLink} to="/scanHistory">История сканирования</Link>
            <Link className={s.navLink} to="/generateHistory">История генерирования</Link>
        </nav>
    )
}
