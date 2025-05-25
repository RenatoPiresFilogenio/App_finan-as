"use client"

import { api } from "@/services/api"
import { getCookieClient } from "@/lib/cookieClient"
import Btn_Submit from "@/Components/buttonSubmit/button";
import style from './page.module.scss'

interface CategoryProp{
    name: string;
    total: number;
    id:string;
}

interface Props{
    categories: CategoryProp[];
}

export default function FORM({ categories }: Props){
    async function handleItem(formData:FormData){


        const token = await getCookieClient();
        const name = formData.get("name")
        const amountNumber = formData.get("amount")
        const categoryId = formData.get("categoryId")


        const amount = Number(amountNumber);
                if (isNaN(amount)) {
                alert("Valor inválido para o campo valor do item");
                return;
                }

        if(!name || !amount || !categoryId){
            alert("preencha todos os campos")
            return;
        }
        try {
             await api.post("/createItem",{name,amount:amount,categoryId},{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
        
    }

    
    
  return (
  <section className={style.formSection}>
         <h1 className={style.formTitle}>Crie seu item</h1>
        <form className={style.formContainer} action={handleItem}>
            <label  className={style.formLabel}>Selecione a categoria</label>
            <select name="categoryId" id="category" className={style.formSelect}>
                {categories.map((category, index) => (
                <option key={category.id} value={category.id}>
                {category.name}
                </option>
                ))}
            </select>

            <label  className={style.formLabel}>Nome do item</label>
            <input
                type="text"
                required
                placeholder="Nome do item"
                name="name"
                id="name"
                className={style.formInput}
            />

            <label className={style.formLabel}>Valor do item</label>
            <input
                type="number"
                required
                placeholder="Valor do item"
                name="amount"
                id="amount"
                className={style.formInput}
            />

            <div className={style.formButtonWrapper}>
                <Btn_Submit/>
            </div>
        </form>
  </section>
);



}
