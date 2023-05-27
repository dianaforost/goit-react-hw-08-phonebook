import { NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css'
export default function SharedLayout(){
    return <header className={css.header}>
        <div className={css.container}>
            <div className={css.cont}>
        <NavLink to='/' className={css.linkToHomePage}>PhoneBook</NavLink>
        <div className={css.linksContainer}>
            <NavLink to='/register' className={css.linksToPages}>Register</NavLink>
            <NavLink to='/login' className={css.linksToPages}>Log In</NavLink>
            </div>
        </div>
        </div>
    </header>
}