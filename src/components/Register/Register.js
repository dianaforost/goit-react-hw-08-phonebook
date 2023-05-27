import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './Register.module.css'
import image from '../../images/development.webp'
import { NavLink } from 'react-router-dom';

export default function Register () {
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
          register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
          })
        );
        form.reset();
      };
    return (
      <section className={css.section}>
      <div className={css.container}>
        <div className={css.registerForm}>
          <div className={css.imageContainer}>
          <img src={image} alt='register' className={css.image}></img>
          </div>
          <div className={css.registerFormCont}>
            <div className={css.textContainer}>
          <h1 className={css.title}>Register</h1>
          <p className={css.text}>Fill this form to register</p>
          </div>
        <form  onSubmit={handleSubmit} autoComplete="off" className={css.form}>
          <div className={css.formGroup}>
            <input type="input" className={css.formField} placeholder="Name" name="name" id='name' required />
            <label htmlFor="name" className={css.formLabel}>Name</label>
        </div>
        <div className={css.formGroup}>
            <input type="input" className={css.formField} placeholder="Email" name="email" id='email' required />
            <label htmlFor="email" className={css.formLabel}>Email</label>
        </div>
        <div className={css.formGroup}>
            <input type="input" className={css.formField} placeholder="Password" name="password" id='password' required />
            <label htmlFor="password" className={css.formLabel}>Password</label>
        </div>
          <button type="submit" className={css.button}>Create account</button>
        </form>
        <p className={css.linkToLogin}>Already have an account? <NavLink to='/login'>LogIn</NavLink></p>
        </div>
        </div>
        </div>
        </section>
      );
    }
    