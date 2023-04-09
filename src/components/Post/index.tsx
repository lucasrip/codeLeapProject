import { Container } from "./styles";

import editIcon from '../../assets/edit.svg';
import excluirIcon from '../../assets/excluir.svg';
import { formatDistance } from "date-fns";
import { PostData } from "../../types/post";
import { useState } from 'react';
import Modal from './../Modal/index';
import BoxContent from "../BoxContent";
import Button from "../Button";
import { toast } from 'react-toastify';
import { useMutation } from "react-query";
import { deletePost, editPost } from "../../server/server";
import { EditPost } from './../../types/post';
import Loading from "../Loading";

interface Props
{
 postData:PostData;
 loggedUser:string | void;
 updatePost: () => void;
}

export default function Post({postData, loggedUser,  updatePost}:Props) 
{
  const {id,username ,created_datetime , title, content} = postData;
  const distanceTime = formatDistance(new Date(created_datetime) , new Date());
 
  const [isOpenEdit , setIsOpenEdit] = useState(false);
  const [isOpenExlud , setIsOpenExclud] = useState(false);

  const [titleEdit, setTitleEdit] = useState("");
  const [contentEdit, setContentEdit] = useState("");

  const disabled = (titleEdit.length < 5 || contentEdit.length < 10)? true: false; 

  const maskUserName = `@${username}`;
  function handleDeletePost()
  {
    deletePostMutatetion(`${id}`);
    setIsOpenExclud(false);
  }

  function handleEditPost()
  {
    const post = {
      id: `${id}`,
      title: titleEdit,
      content: contentEdit,
    };
    
    editPostMutatetion(post);
    setIsOpenEdit(false);
  }

  const {mutate:deletePostMutatetion , isLoading:deletePostLoading} = useMutation((id:string) => deletePost(id) ,{
    onSuccess:() => { 
      toast.success("post delete with successfully")
      updatePost();
    
    } ,
    onError: () => { toast.error("there was an unexpected error please try again later")},
  });

  const {mutate:editPostMutatetion , isLoading:editPostLoading} = useMutation((post:EditPost) => editPost(post) ,{
    onSuccess:() => { 
      toast.success("post edited with successfully");
      updatePost();
      setTitleEdit("");
      setContentEdit("");

    } ,
    onError: () => {toast.error("there was an unexpected error please try again later")},
  });

  return (
   <Container>
            
     { (deletePostLoading || editPostLoading)&& <Loading/> }
 
     <Modal isOpen={isOpenExlud}>
       <BoxContent width="41.25rem">
         <h1>
           Are you sure you want to delete this item?
         </h1>
         <footer>
           <Button
            action={()=>setIsOpenExclud(false)}
            text="Cancel"
            typeStyle="base"
            title={{ 
              noDisabled:"press this button for close modal"
            }}
           />

           <Button
            action={handleDeletePost}
            text="Delete"
            typeStyle="nagative"
            title={{
              noDisabled:"press this button for exclud this post"
            }}
           />

         </footer>
       </BoxContent>    
     </Modal>

     <Modal isOpen={isOpenEdit}>
      <BoxContent width="41.25rem">
         <h1>
           Edit Post
         </h1>

         <div>
          <label htmlFor="titleEdit">
            Title
          </label>
           <input 
            value={titleEdit}
            type="text"
            name="titleEdit"
            id="titleEdit"
            onChange={(e)=> setTitleEdit(e.target.value)} 
            />
         </div>
   
          <div>
           <label htmlFor="contentEdit">
             Content
           </label>
           <textarea 
             value={contentEdit}
             name="contentEdit"
             id="contentEdit" 
             onChange={(e)=> setContentEdit(e.target.value)} 
           />
          </div>

         <footer>
            <Button
             action={()=>setIsOpenEdit(false)}
             text="Cancel"
             typeStyle="base"
             title={{
              noDisabled:"press this button for close modal"
             }}
           />
            <Button
             action={handleEditPost}
             text="Save"
             disabled={disabled}
             typeStyle="positive"
             title={{
              disabled:"you need complete all of form field",
              noDisabled:"press this button for save your edited post"
             }}
           />
         </footer>
      </BoxContent>
     </Modal>
     

     <header>
       <h2 title={title}>
         {title}
       </h2>
       {
        loggedUser === username &&(
         <div>
          <img 
           src={excluirIcon} 
           alt="exluir post"
           title="exluir post"
           onClick={()=> setIsOpenExclud(true)}
          />
          <img 
           src={editIcon}    
           alt="edit post"  
           title="edit post"
           onClick={()=> setIsOpenEdit(true)}
          />
         </div>
        )

       }
     </header>
     
     <div>
      <div>
       <strong title={maskUserName}>{maskUserName}</strong>
       <span title={distanceTime}>{distanceTime}</span>
      </div>
      
      <main>
       {content}
      </main>
     </div>
   
   </Container>)
}