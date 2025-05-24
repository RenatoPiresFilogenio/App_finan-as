import Header  from "./header_components/index"

export default function header({children}: {children: React.ReactNode}){
    return(
        <>
        <Header/>
     {children}
        </>
    )
}