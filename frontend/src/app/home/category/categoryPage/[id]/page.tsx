import { api } from "@/services/api";
import { getCookieServer } from "@/lib/cookieServer";
import Form from "./component/form"
interface Props{
    params: {id:string};
}

export default  async function  categoryPage({params}:Props){
   const { id } = params;
    const token = await getCookieServer();

     const response = await api.get(`/detailCategory/${id}`, {
        headers: {
        Authorization: `Bearer ${token}`
        }
    });

    return(
        <Form 
        category={response.data[0]} 
        token={token as string} 
    />
    );
}