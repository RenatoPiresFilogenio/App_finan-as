"use client"

import { useState } from "react";
import { api } from "@/services/api";
import style from './page.module.scss';
import Link from "next/link";

interface Item {
  name: string;  
  id: string;
  amount: number;
}

interface Categoria {
  id: string;
  name: string;
  total: number;
  items?: Item[];
}

interface Props {
  category: Categoria;
  token: string;
}

export default function Form({ category, token }: Props) {
  // Estado para controlar a lista de itens
  const [items, setItems] = useState(category.items ?? []);

  async function itemDelete(itemId: string) {
    try {
      await api.delete(`/deleteItem/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      
      setItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error("Erro ao deletar item:", error);
    
    }
  }

  return (
    <div className={style.main_div}>
      <h1>{category.name}</h1>
      <p>Total: {category.total ?? 0}</p>

      <ul className={style.ul}>
        {items.length > 0 ? (
          items.map(item => (
            <li key={item.id} className={style.li}>
              {item.name} - R${item.amount}
              <br/>
              <br/>
              <button onClick={() => itemDelete(item.id)}>Excluir</button>
            </li>
          ))
        ) : (
          <li className={style.li}>Nenhum item encontrado</li>
        )}
      </ul>
      <Link href={"/home/categoryDetail"}>Voltar</Link>
    </div>
  );
}
