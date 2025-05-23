import styles from "./page.module.scss"
import Link from "next/link"
import Btn_Submit from "@/Components/buttonSubmit/button"
import {api} from "@/services/api"
import { redirect } from 'next/navigation'
export default function signup(){
  
async function  handleLogin(formData:FormData) {
        "use server"
        const email = formData.get("email")
        const password = formData.get("password")

        if(!email || !password){
          console.log("todos os campos precisam ser preenchidos")
          return;
        }


        try {
        const response = await api.post("/session",{
          email,
          password
        })
        } catch (error) {
          console.log(error)
          return;
        }
       
           redirect("/home")
       
}     
  return(
    <main>
      <div className={styles.div_principal}>
        <h1>SaveMoney</h1>
        <h2>Login</h2>

        <section>
          <form action={handleLogin}>
          <input type="email" placeholder="Coloque seu email"
          required
          name="email"

          />
          <input type="password"  placeholder="Digite sua senha"
            required
            name="password"
          />

          <Btn_Submit/>
          </form>
          
          <Link href="/signup">
          <label>Não possui cadastro?</label>
          </Link>
        </section>
        

      </div>
    </main>
  )
}