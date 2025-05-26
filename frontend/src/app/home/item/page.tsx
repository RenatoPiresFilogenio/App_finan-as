import { api } from "@/services/api";
import FORM from "./component/form/form";
import style from "./page.module.scss";
import { getCookieServer } from "@/lib/cookieServer";

export default async function item() {
  const token = await getCookieServer();

  const response = await api.get("ListCategory", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  console.log("response",response.data)
  return (
    <main>
      <FORM categories={response.data} />
    </main>
  );
}
