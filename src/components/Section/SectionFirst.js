import propTypes from 'prop-types';
import css from './Section.module.css';
export const SectionFirst =({title, children}) =>{
    return <section className={css.section}>
        <div className={css.container}>
            <div className={css.mainCont}>
            <div className={css.textContainer}>
                <h2 className={css.titleWelcome}>Welcome!</h2>
                <p className={css.text}>Here you can add, delete and filter your own contacts!</p>
            </div>
        <div className={css.formContainer}>
        <div className={css.iconContainer}>
        <svg className={css.icon} width={30} height={30} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" >
        <path d="M23,11H21V9a1,1,0,0,0-2,0v2H17a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V13h2a1,1,0,0,0,0-2Z"/><path d="M9,12A6,6,0,1,0,3,6,6.006,6.006,0,0,0,9,12ZM9,2A4,4,0,1,1,5,6,4,4,0,0,1,9,2Z"/><path d="M9,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,9,14Z"/>
        </svg>
        <h2 className={css.title}>{title}</h2>
        </div>
        {children}
        </div>
        </div>
        </div>
    </section>
}
SectionFirst.propTypes = {
    title: propTypes.string.isRequired,
    childre: propTypes.node,
}