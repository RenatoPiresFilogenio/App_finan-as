import { api } from "@/services/api";
import { getCookieServer } from "@/lib/cookieServer";
import {SendHorizontal} from 'lucide-react'
import Btn_Submit from "@/Components/buttonSubmit/button";
import styles from "./style.module.scss"
import  Form  from "./components/form";
import { redirect } from "next/navigation";
import Link from "next/link"
export default async function category() {

    async function createCategory(formData: FormData) {
        "use server"
        const name = formData.get("name")
        if(!name){
          console.log("sem nome no campo")
          return;
        }
        const data = {name}
        const token = await getCookieServer();
        const response = await api.post("/category", data,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        redirect("/home/category");
    }


  return (
   <main className={styles.main}>
    <h1 className={styles.title}>  <SendHorizontal/> Criar Categoria</h1>

    <form action={createCategory} className={styles.createCategory}>
        <input
        type="text"
        placeholder="Nome da categoria"
        name="name"
        className={styles.input}
        /> 
        <div className={styles.btn_submit}>
        <Btn_Submit/>
        </div>
       
  </form>
    <Form/> 
</main>
  );
}
