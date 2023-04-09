import styled from 'styled-components';
import { colors } from './../../globalStyles/colors';


export const Container = styled.div`
 position:relative;
 width:100%;
 height:100%;
 background: ${colors.white};
 display: flex;
 flex-direction:column;
 justify-content:center;

`;

export const Content = styled.div`
 min-width:100%;
 width:50rem;
 max-width:50rem;
 display: flex;
 flex-direction:column;
 align-items:center;
 gap:24px;
 padding: 24px;
`;

export const Header = styled.header`
 min-width: 100%;
 width:50rem;
 height: 5rem ;
 background: ${colors.blue};
 color: ${colors.white};
 display: flex;
 align-items:center;

 h1
 {
   margin-left: 2.3125rem;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 700;
   font-size: 1.375rem;
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

 div + div
 {

  display:flex;
  align-items:center;
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


export const ControllContainer = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
position: fixed;
right: 5%;
bottom: 10%;
width: 5rem;
height: auto;
padding: 0.5rem;
gap:0.5rem;
z-index: 9999999999999;
`
