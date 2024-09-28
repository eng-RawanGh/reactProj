import { ButtonHTMLAttributes, ReactNode } from "react"

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode,
    className?:string,
    width?: "w-full" | "w-fit",
    
}


const Button = ({children,className ,width,...rest}:Iprops) => {
  return (
  <>
<button  className={ ` p-2 rounded-md cursor-pointer  text-white  ${className} ${{width}}`}{...rest}> {children}</button>
  </>
  )
}

export default Button