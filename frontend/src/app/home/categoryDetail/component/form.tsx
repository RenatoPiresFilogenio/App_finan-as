import { api } from "@/services/api";
import { getCookieClient } from "@/lib/cookieClient";
import style from "./page.module.scss"
import Link from "next/link"
interface CategoryProp{
    name: string;
    total: number;
    id:string;
}

interface Props{
    categories: CategoryProp[];
}


export default function FORM({categories}: Props){
    

       return (
    <section className={style.section_list_category}>
        <div className={style.main_div}>
            {categories.map((category) => (
                <Link href={`/home/category/categoryPage/${category.id}`} key={category.id}>
                    <div className={style.category_card}>
                        <label className={style.category_name}>{category.name}</label>
                        <label className={style.category_total}>Total: {category.total}</label>
                    </div>
                </Link>
            ))}
        </div>
    </section>
);


}