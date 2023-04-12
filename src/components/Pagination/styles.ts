import styled from 'styled-components';
import { colors } from './../../globalStyles/colors';

export const Container = styled.div`
 width:46.875rem;
 height:auto;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 gap:0.5rem;

 div
 {
  width:100%;
  height:auto;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:0.5rem;
 }
 
 & > div + div
 {
  display: flex;
  justify-content:center;
  align-items:center;

  strong
  {
    font-size:1rem;
    color:${colors.gray.light}
    font-weight:bold;
  }
 }

`;

export const PageButton = styled.button`
position: relative;
width: 2.5rem;
height: 2.5rem;
border:0;
border-radius: 8px;
background:${colors.blue};
color:${colors.white};
display:flex;
justify-content: center;
align-items:center;
font-size: 1.5rem;

img
{
  width: 2rem;
  height: 2rem;
}
`;

export const FiltersContainer = styled.div`
 width: 46.875rem;
 height: auto;
 margin: 0.5rem 0;
 padding: 0.5rem 1.5rem;
 display:flex;
 justify-content:space-between;

 img
 {
  width: 2rem;
  height: 2rem;
  cursor:pointer;
 }
 div
 {
  display: flex;
  justify-contet:center;
  align-items:center;
  gap: 0.5rem; 
  width: auto;
  label
  {
    color:${colors.black};
    font-size: 1rem;
    font-weight: 400px;
    margin-right: 0.5rem ;
  }

  input
  {
   width: 10rem;
   padding: 8px 9.56px;
   border: 1px solid ${ colors.gray.normal};
   border-radius: 8px;
   color:${colors.black};
  }

  input::placeholder,
  {
   font-size: 0.875rem ;
   font-weight: 400 ;
   color:${colors.gray.light};
  }
  
 } 

 & div + div
 {

  display:flex;
  align-items:center;
  justify-contet:center;
  width: auto;

   select
   {
    width: 5rem;
    height: 2.5rem;
    border-radius: 8px;
    font-size: 1rem;
    color: ${colors.black};
    text-align:center;
   }
 }

`;
