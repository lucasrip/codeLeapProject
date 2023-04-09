import { useState } from "react";
import BoxContent from "../../components/BoxContent";
import Button from "../../components/Button";
import { toast } from 'react-toastify';
import {useNavigate } from "react-router-dom";
import useStorage from './../../hooks/useStorage/index';
import { Container } from "./styles";

export default function Home() 
{
  const [ name , setName ] = useState("");
 
  const isDisabled =  name?.length < 5 ? true: false;
  const navigate = useNavigate();
  const [setUserName] = useStorage();
 
   function handlerSubmit()
   {
    navigate('/posts',{state:{ userName: name }});
    setUserName(name);
    toast.success(` ${name} you is logged`);
   }

  return (
  <Container>

    <BoxContent 
     width="31.25rem"
    >
      <h1>Welcome to CodeLeap network!</h1>

      <div>
        <label htmlFor="name">
         Please enter your username
        </label>
        <input 
          value={name}
          type="text" 
          id="name" 
          name="name" 
          onChange={(e)=> setName(e.target.value)}
          placeholder="Exemple:John doe"
          />
      </div>
      <footer>
        <Button
         disabled={isDisabled}
         text="Enter"
         title={{
          disabled: "you need write your name for continue",
          noDisabled: "press this button for go to posts page"
         }}
         action={handlerSubmit}
        />
      </footer>

    </BoxContent>

  </Container>)
}