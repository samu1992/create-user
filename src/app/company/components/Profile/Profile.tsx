import style from './profile.module.css'

export default function Profile(){
    return(
        <section className={style.containerProfile}>
            <div className={style.cardProfile}></div>
            <div className={style.ellipse1}></div>
            <div className={style.ellipse2}></div>
        </section>
    )
}