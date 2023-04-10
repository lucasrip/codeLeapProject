
import { EditPost, Search, SendPost } from '../types/post';
import { api } from './../hooks/axios/index';

export async function getPosts({limit,offset,username}:Search = {limit:0,offset:0, username:''})
{
   const isUsername = username === undefined || username === null?'': `&username=${username || ''}`;
 
   return await api.get(`careers/?limit=${limit}&offset=${offset}${isUsername}`);  
}

export async function submitPost(post:SendPost)
{
   return await api.post('careers/',post);  
}

export async function deletePost(id:string)
{
   return await api.delete(`careers/${id}/`);  
}

export async function editPost(editedPost:EditPost)
{
  const {id , title , content } = editedPost;
  
   return await api.patch(`careers/${id}/`, {title,content});  
}

