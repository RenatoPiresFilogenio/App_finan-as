import styles from "../buttonSubmit/page.module.scss"
export default function Btn_Submit(){
    return(
        <div className={styles.btn_submit}>
            <button type="submit">Enviar</button>
        </div>
    )
}