import { getCookieServer } from "@/lib/cookieServer";
import { api } from "@/services/api";
import Link from "next/link"
import style from "./style.module.scss"
interface CategoryProp {
  id: string;
  name: string;
  total: number;
}

export default async function Form() {
  
  const token = await getCookieServer();

  const response = await api.get("/ListCategory", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const categories: CategoryProp[] = response.data;
  return (
    <div className={style.div_principal}>
        <br />
      <h1>Categorias criadas</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name} Total: {category.total} <Link href={`/home/categoryPage/${category.id}`}><button>Conferir</button></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
