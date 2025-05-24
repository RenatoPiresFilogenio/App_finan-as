"use client";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import style from "./page.module.scss"
interface Props {
  token: string;
}

interface Category {
  id: string;
  name: string;
}

export default function ListCategory({ token }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);

  async function fetchCategories() {
    try {
      const response = await api.get("/ListCategory", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className={style.section_list}>
      <h1>Categorias criadas</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </section>
  );
}