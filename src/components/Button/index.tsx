import { Container } from "./styles";

interface Props
{
  text: string | React.ReactNode;
  disabled?: boolean;
  action: () => void;
  typeStyle?: "default" | "base" | "positive" | "nagative";
  title: {
    noDisabled: string,
    disabled?: string,
  };
}

export default function Button({text="texto do button",disabled=false,action, typeStyle="default" , title}:Props) 
{
  return (
   <Container 
     disabled={disabled} 
     onClick={action} 
     typeStyle={typeStyle}
     title={ disabled? title.disabled : title.noDisabled }
    >
     { text }
   </Container>)
}