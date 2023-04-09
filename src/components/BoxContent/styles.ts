import styled from 'styled-components';
import { colors } from '../../globalStyles/colors';

interface ContainerProps
{
  width:string;
}

export const Container = styled.div`

width: ${({width}:ContainerProps) => width};
max-width:auto;
display:flex;
flex-direction: column;
position: relative;
padding:1.5rem;
height: auto;
min-height:9.125rem;
background: ${colors.white};
border: 1px solid ${colors.gray.light};
border-radius: 16px;

h1
{
  font-size: 1.375rem ;
  font-weight: 700 ;
  color:${colors.black}
}

div
{
  margin-top:1.5rem;

  label
  {
    color:${colors.black};
    font-size: 1rem;
    font-weight: 400px;
  }

  input,
  textarea
  {
   width: 100%;
   padding: 8px 9.56px;
   border: 1px solid ${ colors.gray.normal};
   border-radius: 8px;
   color:${colors.black};
   margin-top:8px;
  }

  input::placeholder,
  textarea::placeholder
  {
   font-size: 0.875rem ;
   font-weight: 400 ;
   color:${colors.gray.light};
  }

  textarea
  {
   height: 4.625rem;
   resize: none;
  }
  
}

footer
{
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: right;
  margin: 0px;
}

&:nth-last-child(-n+1) input 
{
  margin-bottom:1rem;
}

& textarea
{
  margin-bottom:1.5rem;
} 

#titleEdit
{
  margin-bottom:0rem;

}

& h1 + footer
{
  margin-top:2.5rem ;
}
`;
