"use client";
import styles from "./page.module.scss";
import Btn_Submit from "@/Components/buttonSubmit/button";
import { api } from "@/services/api";

interface Props {
  token: string;
}

export default function CreateCategory({ token }: Props) {
  async function handleCategory(formdata: FormData) {
    const name = formdata.get("name");

    if(!name){
        return;
    }

    try {
      const response = await api.post(
        "/category",
        { name }, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            
          },
        }
      );
    } catch (error) {
      console.error("Erro ao criar categoria:", error);
    }
  }

  return (
    <section className={styles.page_section}>
      <h1>Crie sua categoria</h1>
      <form action={handleCategory}>
        <input
          type="text"
          required
          name="name"
          placeholder="Nome da categoria"
        />
        <div className={styles.Btn_Submit}>
          <Btn_Submit />
        </div>
      </form>
    </section>
  );
}
