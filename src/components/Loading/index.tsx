import { Container } from "./styles";

import loading from '../../assets/loading.gif';

export default function Loading() 
{
  return (
   <Container title="carregando">
    <div>
     <img src={loading} alt="loading" title="carregando..." />
     <strong>
      Loading...
     </strong>
    </div>
   </Container>)
}