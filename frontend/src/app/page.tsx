import styles from "./page.module.scss"
import Link from "next/link"
export default function signup(){
  return(
    <main>
      <div className={styles.div_principal}>
        <h1>SaveMoney</h1>
        <h2>Login</h2>

        <section>
          <form>
          <input type="email" placeholder="Coloque seu email"
          required
          name="email"

          />
          <input type="password"  placeholder="Digite sua senha"
            required
            name="password"
          />

          <button type="submit">Entrar</button>
          </form>
          
          <Link href="/signup">
          <label>Não possui cadastro?</label>
          </Link>
        </section>
        

      </div>
    </main>
  )
}