import { api } from "@/services/api";
import FORM from "@/app/home/categoryDetail/component/form"
import { getCookieServer } from "@/lib/cookieServer";



export default async function categoryDetail(){
        const token = await getCookieServer();
        const response = await api.get("/ListCategory",{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })

        console.log(response.data)
return(
        <main>
            <FORM categories={response.data}/>                
        </main>
);



}