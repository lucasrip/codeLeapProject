import styled from 'styled-components';
import { colors } from './../../globalStyles/colors';

export const Container = styled.div`
 position: relative;
 width: 47rem;
 height: auto;
 border: 1px solid ${colors.gray.bold};
 border-radius: 16px;

 header
 {
  background: ${colors.blue};
  min-height: 4.375rem;
  height: auto;
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius:16px; 
  border-top-right-radius:16px; 
  padding:0 1.5rem;

  h2
  {
    
    max-width: 80%;
    word-break: break-all;
    height: auto;
    font-weight: 700;
    font-size: 1.375rem;
    font-style: normal;
    color: ${colors.white};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div
  {
    display: flex;
    gap:1.5rem;

    img
    {
      width: 1.95rem;
      height: 1.875rem;
      cursor:pointer;
    }
  }
 }

 & > div
 {
   width: 100%;
   padding: 1.5rem;
   display: flex;
   flex-direction: column;
   gap: 1rem;
 }

 div > div
 {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  color: ${colors.gray.normal};

  strong
  {
   font-style: normal;
   font-weight: 700;
   font-size: 1.125rem;
   max-width: 10rem;
   min-width: auto;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
  }

  span
  {
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
  }
 }

 div main
 {
  width: 100%;
  word-break: break-all;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 21px;
  color:${colors.black};
 }

 @media (max-width:350px)
 {
  &{
    width: 85%;
  }

  header
  {
   padding:0 0.5rem;
 
   & > div
   {
    padding:0 0.5rem;

   }
    
  }
 }


`;
