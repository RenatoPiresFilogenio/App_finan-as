import styles from "./page.module.scss"
import Link from "next/link"
import {api} from "@/services/api"
import Btn_Submit from "@/Components/buttonSubmit/button"
import { redirect } from 'next/navigation'

export default function signup(){

async function handleRegister(formData: FormData){
            "use server"
        const name = formData.get("name")
         const email = formData.get("email")
         const password = formData.get("password")

         if(!name || !email || !password){
            console.log("Todos os campos deve ser preenchidos")
         }
         
         try {
            await api.post("/users",{
                name,email,password
            })
         } catch (error) {
            console.log(error)
         }
         redirect("/")
    }

    return(
        <main>
          
            <div className={styles.div_principal}>
                <h1> SaveMoney</h1>
                <h2>SignUp</h2>
                <section>
                    <form action={handleRegister}>

                         <input type="text" placeholder="Digite seu nome"
                        required
                        name="name"

                        />


                        <input type="email" placeholder="Coloque seu email"
                        required
                        name="email"

                        />
                        <input type="password"  placeholder="Digite sua senha"
                            required
                            name="password"
                        />

                        <Btn_Submit/>

                    <Link href={"/"}>
                        Já possui uma conta?
                    </Link>

                    </form>
                
                </section>
            </div>
          
        </main>
    )
}

