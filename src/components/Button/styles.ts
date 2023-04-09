import styled from 'styled-components';
import { colors } from './../../globalStyles/colors';

interface Props
{
  typeStyle: "default" | "base" | "positive" | "nagative";
}

const buttonStyles = {
  default:{
    background: `${colors.blue}`,
    color: `${colors.white}`,
  },
  base:{
    background: 'transparent',
    color: `${colors.black}`,
    border: `1px solid ${colors.gray.bold}`
  },
  positive:{
    background: `${colors.green}`,
    color: `${colors.white}`,
  },
  nagative:{
    background: `${colors.red}`,
    color: `${colors.white}`,
  }

}
export const Container = styled.button`
 display:flex;
 justify-content: center;
 width: 6.875rem;
 max-width:auto;
 min-height: 2rem;
 height: auto;
 align-items: center;
 font-weight:700;
 font-size: 1rem;
 border: 0px ;
 border-radius: 8px;
 ${ ({typeStyle}:Props)=> buttonStyles[typeStyle]}
 

 & img
 {
   width: 2rem;
   height: 2rem;
 }

 &:disabled
 {
   background: ${colors.gray.normal};
   color: ${colors.gray.light};
   cursor: not-allowed;
 }
 
`;
