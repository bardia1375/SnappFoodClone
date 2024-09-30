import react from "react"
interface Props{
    Name:string,
    onClick:()=>void
}
const Button=({Name,onClick}:Props)=>{
  return(
    <button
    onClick={onClick}
    >
   {Name}
    </button>
  )
}

export default Button