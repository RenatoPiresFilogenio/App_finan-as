import CreateCategory from "./componente/CreateCategory/CreateCategory";
import ListCategory from "./componente/listCategory/ListCategory";
import style from "./page.module.scss";
import { getCookieServer } from "@/lib/cookieServer";
import Link from "next/link"
export default async function Category() {
  const token = (await getCookieServer()) ?? "";

  return (
    <main className={style.main_page}>
     
        <Link href={`/home/categoryDetail`}>
          <button className={style.viewButton}>Visualizar categorias</button>
        </Link>
        
        <CreateCategory token={token}/>
        <ListCategory token={token} />
    </main>
  );
}
