    import { getCookieClient } from "@/lib/cookieClient";
    import { api } from "@/services/api";
    import style from './page.module.scss';

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
    }

    export default async function Form({ category }: Props) {
        console.log("console dentro do form",category)
    const items = category.items ?? [];
        
    return (
        <div className={style.main_div}>
        <h1>{category.name}</h1>
        <p>Total: {category.total ?? 0}</p>

        <ul className={style.ul}>
            {items.length > 0 ? (
            items.map(item => (
                <li key={item.id} className={style.li}>
                {item.name} - R${item.amount}
                </li>
            ))
            ) : (
            <li className={style.li}>Nenhum item encontrado</li>
            )}
        </ul>
        </div>
    );
    }
