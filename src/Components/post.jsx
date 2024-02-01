import style from './Post.module.css';

export function Post(){
    return(
        <article className={style.Post}>
            <header>
                <div className={styles.author}>
                    <img  className={styles.avatar} src="https://github.com/GabrielManojo.png" />
                    <div>
                        <strong>Gabriel Manojo</strong>
                        <span> Web developer</span>
                    </div>
                </div>
            </header>
        </article>
    )
}