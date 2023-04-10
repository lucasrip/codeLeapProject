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
