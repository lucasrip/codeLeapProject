import { PageButton, Container, FiltersContainer } from "./styles";
import { useState } from 'react';
import refresh from '../../assets/refresh.svg';
import doubleArrowLeft from '../../assets/doubleArrowLeft.svg';
import doubleArrowRight from '../../assets/doubleArrowRight.svg';
import { Search } from "../../types/post";
import Button from "../Button";

interface Props
{
  numberPosts:number;
  changePage: (config:Search) => void ;
  isFilter?:boolean;
}

export default function Pagination({numberPosts, changePage , isFilter=false}:Props) 
{

  const [ userNameFilter , setUserNameFilter] = useState("");
  const [limit , setLimit] = useState(5);
  
  const [minRange, setMinRange] = useState(0);
  const [currentPageValue, setCurrentPageValue] = useState(1);
  
  const buttonsRange = 5;
  const maxRange = minRange + buttonsRange;
  
  const numberPages = Math.ceil(numberPosts / limit);
  
  const messagePages = `page: ${currentPageValue} / ${numberPages }`

  const nextPositions = (page:number) => page -  2;
  const lastPositions = (page:number) => page -  1;

  const buttonsList = Array.from({length:maxRange},(_,value:number)=> value + 1 ).slice(minRange , maxRange);

  function handleChangePage(page:number)
  {
    const offset = (limit * page) - limit ;
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
   
  {
    (isFilter) &&(
      <FiltersContainer>
      <img 
           src={refresh}
           alt='click for refrsh page' 
           title='click for refrsh page'
           onClick={()=> handleChangePage(currentPageValue)}
          />
       <div>
        <label htmlFor="perUser">filter for userName</label>
          <input 
            value={userNameFilter}
            type="text" 
            name="perUser" 
            id="perUser" 
            onChange={ (e) => setUserNameFilter(e.target.value)}
          />
         
          <Button
  
           title={{
            disabled: 'you need digit five or more characters for search',
            noDisabled:"press to searchPost"
           }}
           text='Search'
           action={()=>{
            handleChangePage(1);
            setUserNameFilter("");
           }}
   
          />
    
          </div>
            <div>
              <label htmlFor="perLimit">
                select a limit post 
              </label>
              <select
                name="perLimit" 
                id="perLimit"
                onChange={(e) => {
                  const newLimit =parseInt(e.target.value);
                  setLimit(newLimit);
                  changePage({limit:newLimit,offset:0,username:userNameFilter})
              
                }
               }
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
           </div>
  
      </FiltersContainer>
    )
   }
   
   <div>
   {
      minRange >= 3 &&
      (
         <PageButton
          onClick={()=> handleChangePage(1) }
         >
           <img src={ doubleArrowLeft } alt="click go to the first page" />
         </PageButton>   
      )
   }
     
   {
      
      buttonsList.length >  1  &&(
      buttonsList.map(page =>{  
        if(page > numberPages) return null
         return (
          <PageButton 
           key={page}
           onClick={() => handleChangePage(page)}
          >
          {page}
        </PageButton>
         )
       })
    )
   }
     
     {  
      maxRange < numberPages &&
      <>    
         <PageButton
          onClick={()=> {
      
            const offset = ((limit * numberPages) - limit) ;
            setMinRange((numberPages - buttonsRange));
            changePage({limit,offset, username:userNameFilter})
            setCurrentPageValue(numberPages);
          }}
         >
           <img src={ doubleArrowRight } alt="click go to the last page" />
         </PageButton>
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

