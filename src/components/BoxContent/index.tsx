
import { Container } from './styles';
import { ReactElement } from 'react';
interface Props
{
   width: string;
   children: React.ReactNode;
}

export default function BoxContent({width ,children}:Props) 
{
  return (
   <Container width={width}>
     {
      children
     }
   </Container>)
}