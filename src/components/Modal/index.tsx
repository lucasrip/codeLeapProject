
import ReactDOM  from "react-dom"
import { Container } from "./styles";

interface Props
{
  children:React.ReactNode;
  isOpen: boolean;
}

export default function Modal({children,isOpen=false}:Props) 
{
  const id = document.getElementById("modal") as HTMLElement;

  if(!isOpen) return null

  return (
    ReactDOM.createPortal(
     <Container>
      { children }
     </Container>, id)
     )
}