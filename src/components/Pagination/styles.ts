import styled from 'styled-components';
import { colors } from './../../globalStyles/colors';

export const Container = styled.div`
 width:46.875rem;
 padding:0.5rem;
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
 
 div + div
 {
  display: flex;
  justify-content:center;
  align-items:center;
  margin-top:0.5rem;
  strong
  {
    font-size:1rem;
    color:${colors.gray.light}
    font-weight:bold;
  }
 }
`;

export const Button = styled.button`
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
