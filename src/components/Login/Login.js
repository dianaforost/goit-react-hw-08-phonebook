import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import image from '../../images/professional.png'
import css from  './Login.module.css'
import { NavLink } from 'react-router-dom';
export default function Login(){
    const dispatch = useDispatch();
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password : form.elements.password.value,
            })
        );
        form.reset();
    }
    return <section className={css.section}>
        <div className={css.container}>
            <div className={css.mainCont}>
            <div className={css.formContainer}>
                <div>
                    <h2>User login</h2>
                    <p className={css.text}>Fill this form to login</p>
                    <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
        <div className={css.formGroup}>
            <input type="input" className={css.formField} placeholder="Email" name="email" id='email' required />
            <label htmlFor="email" className={css.formLabel}>Email</label>
        </div>
        <div className={css.formGroup}>
            <input type="input" className={css.formField} placeholder="Password" name="password" id='password' required />
            <label htmlFor="password" className={css.formLabel}>Password</label>
        </div>
          <button type="submit" className={css.button}>Login</button>
        </form>
        <p className={css.linkToRegister}>Don't have an account?<NavLink to='/register'>Register</NavLink></p>
                </div>
            </div>
            <img src={image} alt='login' className={css.image}></img>
            </div>
        </div>
    </section>
}