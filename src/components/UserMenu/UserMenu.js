import css from './UserMenu.module.css'
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
export default function UserMenu(){
    const dispatch = useDispatch();
    const {user} = useAuth();
    return <header className={css.header}>
    <div className={css.container}>
        <div className={css.cont}>
    <NavLink to='/contacts' className={css.linkToHomePage}>PhoneBook</NavLink>
    <div className={css.linksContainer}>
        <p>Hello, {user.name}</p>
        <button onClick={(() => dispatch(logOut()))} className={css.button}>Logout</button>
        </div>
    </div>
    </div>
</header>
}