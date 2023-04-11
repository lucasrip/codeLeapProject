import { useEffect } from 'react';
import useStorage from "../../hooks/useStorage";
import Post from "../../components/Post";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Container, Content, ControllContainer, Header } from './styles';
import BoxContent from '../../components/BoxContent';
import Button from '../../components/Button';
import { useState } from 'react';
import { getPosts, submitPost } from './../../server/server';
import { useMutation} from 'react-query'
import { PostData, Search, SendPost } from '../../types/post';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';

import arrowTop from '../../assets/arrowTop.svg';
import arrowDown from '../../assets/arrowDown.svg';

export default function Posts() 
{
  const  [ 
    setUserName,
    getUserName,
  ] = useStorage();

  const navigate = useNavigate();
  const loggedUser = getUserName();

  const [ title , setTitle] = useState("");
  const [ content , setContent] = useState("");
  
  
  const fieldLength= (title.length < 5 || content.length < 10 );
  
  const isDisabled =fieldLength ? true: false; 
  
  const [store , setStore] = useState<PostData[] | []>([]);
  const [numberPosts , setNumberPosts] = useState(0);

  const config = {
    limit: 5,
    offset: 0,
  };


  function handlerSavePost()
  {

    const username = loggedUser == null? '': loggedUser
    const post = {title,content, username}
    sendPost(post);

  }
  
  const {mutate:sendPost , isLoading:sendPostLoading } = useMutation((post:SendPost) => submitPost(post),{
    onSuccess:() => {
      toast.success("successfully saved post");
      searchPost(config);
      setTitle("");
      setContent("");
    } ,
    onError: () => {toast.error("there was an unexpected error please try again later")},
  });

  const { mutate:searchPost , isLoading:searchPostLoading} = useMutation((config:Search)=> getPosts(config), {
    onSuccess:(data:any) =>{ 
      setStore(data.data.results);
      setNumberPosts(data.data.count);
    } ,
    onError: () => {toast.error("there was an unexpected error please try again later")},
  });

  useEffect(()=>{
    
    if( loggedUser == null)
    {
      toast.info("you need have is logged for use this page")
      navigate('/');
    }
    searchPost(config);
    
  },[])

   const isLoading = ( searchPostLoading || sendPostLoading)

  return (
   <Container>
    
    { isLoading&& <Loading/> }
    <ControllContainer>
      <Button
          title={{
            noDisabled:"press to save your post"
          }}
          text={<img src={arrowTop} alt="click go to top page" title="click go to top page" />}
          action={()=> {
            window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
        }}
      />
       <Button
          title={{
            noDisabled:"press to save your post"
          }}
          text={<img src={arrowDown} alt="click go to top page" title="click go to top page" />}
          action={()=> {
            window.scrollTo({
            top:99999999999999999,
            behavior: 'smooth',
          })
        }}
      />
    </ControllContainer>
    
    <Header>
      <h1>
        CodeLeap Network
      </h1>
    </Header>
     <Content>
      <BoxContent width='47rem'>
       <h1>What’s on your mind?</h1>
        
        <div>
          <label htmlFor="title">
            Title
          </label>
          <input
           value={title}
           type="text" 
           name='title' 
           id='title'
           placeholder='Hellow world'
           onChange={(e)=> setTitle(e.target.value)}
           />
        </div>
        <div>
          <label htmlFor="content">
            Content
          </label>
          <textarea 
           value={content}
           name="content" 
           id="content"
           placeholder='Content here'
           onChange={(e)=> setContent(e.target.value)}
          />
        
        </div>
           <footer>
              <Button
               disabled={isDisabled}
               title={{
                disabled: "you need complete all of form field ",
                noDisabled:"press to save your post"
               }}
               text="Create"
               action={handlerSavePost}
              />
            </footer>
      </BoxContent>
     
      <Pagination
       isFilter={true}
       numberPosts={numberPosts}
       changePage={(config:Search) => searchPost(config)}
      />

      {
       store?store?.map((post:PostData) => (
       <Post
         updatePost={()=> searchPost(config)}
         key={post?.id}
         postData={post}
         loggedUser={loggedUser}
        />))
        :<p> not have a post cadastred</p>
      }
   
     </Content>
 
   </Container>)
}


