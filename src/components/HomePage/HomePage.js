import css from './HomePage.module.css';
import image from '../../images/image.png'
import { NavLink } from 'react-router-dom';
export default function HomePage(){
    return <div className={css.container}>
        <div className={css.welcomePageContainer}>
        <div className={css.textContainer}>
        <h1 className={css.title}>Welcome! Nice to meet you!</h1>
        <p className={css.text}>You can create your own personal phone book by registering or logging into an existing account. Simple navigation, use and deletion of contacts will allow you to use our product with pleasure!</p>
        </div>
        <img src={image} alt='smt'  className={css.image}></img>
        </div>
        <div>
            <h2>You can continue with:</h2>
            <div className={css.btnsContainer}>
            <NavLink to='/register' className={css.register}>Register</NavLink>
            <NavLink to='/login' className={css.login}>Log In</NavLink>
            </div>
        </div>
    </div>
}