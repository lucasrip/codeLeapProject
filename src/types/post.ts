

export interface  PostData{
  id: number,
  username: string,
  created_datetime: Date,
  title: string,
  content: string
}

export interface SendPost
{
  username: string,
  title: string,
  content: string
}
export interface EditPost
{
  id: string,
  title: string,
  content: string
}

export interface Search
{
  limit:number;
  offset:number;
  username?:string;
}