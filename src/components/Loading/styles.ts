import styled from 'styled-components';
import { colors } from './../../globalStyles/colors';

export const Container = styled.div`
  position: fixed;
  top:0;
  left: 0;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  z-index: 999999;
  
  & div
  {  
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     width: auto;
     height: auto;
     top:50%;
     left: 45%;
  }

  & div img
  {
    width: 8rem;
  }

  & div strong
  {
    margin-top:1rem;
    font-size:1.5rem;
    color:${colors.black};
  }
`;
