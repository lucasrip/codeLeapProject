import { Button, Container } from "./styles";
import { useState } from 'react';

import doubleArrowLeft from '../../assets/doubleArrowLeft.svg';
import doubleArrowRight from '../../assets/doubleArrowRight.svg';
import { Search } from "../../types/post";

interface Props
{
  userNameFilter:string;
  numberPosts:number;
  limit:number;
  changePage: (config:Search) => void ;
}

export default function Pagination({numberPosts, changePage,limit=10, userNameFilter=""}:Props) 
{
  const [minRange, setMinRange] = useState(0);
  const [currentPageValue, setCurrentPageValue] = useState(1);
  
  const buttonsRange = 5;
  const maxRange = minRange + buttonsRange;
  
  const numberPages = Math.ceil(numberPosts / limit);
  const messagePages = `page: ${currentPageValue} / ${numberPages -1 < currentPageValue?1 : numberPages -1 }`

  const nextPositions = (page:number) => page -  2;
  const lastPositions = (page:number) => page -  1;

  const buttonsList = Array.from({length:maxRange},(_,value:number)=> value ).slice(minRange , maxRange);

  function handleChangePage(page:number)
  {
    const offset = (limit * (page == 1?0:page));
    setCurrentPageValue(page);
    changePage({limit,offset, username:userNameFilter})
    const controllMaxButtons =((page - 2) + buttonsRange) > numberPages ;
    
    if(controllMaxButtons)return null
    if(page == 1)
    {
      setMinRange(0);
      return null
    }

    setMinRange(page >=  nextPositions(page)? nextPositions(page) : lastPositions(page));
  }

  return (

   <Container>
    
   <div>
   {
      minRange > 0 &&
      (
         <Button
          onClick={()=> {
            const firstPage =  1;
            handleChangePage(firstPage);
          }}
         >
           <img src={ doubleArrowLeft } alt="click go to the first page" />
         </Button>
      
      )
    }
     
     {
      
      buttonsList.map(page =>{  
        const maskNumberPage = page + 1 ;
        if(maskNumberPage < minRange || maskNumberPage >= numberPages) return null
         return (
          <Button 
           key={maskNumberPage}
           onClick={() => handleChangePage(maskNumberPage)}
          >
          {maskNumberPage}
        </Button>
         )
        })
     }
     
     {  
       maxRange < numberPages - 1&&
      <>    
         <Button
          onClick={()=> {
            const lastPage = numberPages-1 ;
            const offset = (limit * lastPage );
            setMinRange(lastPage - buttonsRange);
            changePage({limit,offset, username:userNameFilter})
          }}
         >
           <img src={ doubleArrowRight } alt="click go to the last page" />
         </Button>
        </>
      } 
   </div>

   {
     numberPages > 0&&(
      <div title={`current page and total page ${messagePages }`}>
      <strong >
         { messagePages }
      </strong>
     </div>
    )
   }
     
   </Container>
   )
} 

