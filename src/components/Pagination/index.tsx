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
  const searchDisplay =  userNameFilter.length < 5?true : false;
  const [limit , setLimit] = useState(5);


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
   
  {
    isFilter&&(
      <FiltersContainer>
      <img 
           src={refresh}
           alt='click for refrsh page' 
           title='click for refrsh page'
           onClick={()=> {
            setMinRange(0);
            setCurrentPageValue(1);
            changePage({
              limit:10,
              offset: 0,
            })
           }}
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
           disabled={searchDisplay}
           title={{
            disabled: 'you need digit five or more characters for search',
            noDisabled:"press to searchPost"
           }}
           text='Search'
           action={()=> { 
            changePage({
             limit,
             offset:0,
             username:userNameFilter
             });
             setUserNameFilter("")
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
                 setMinRange(0);
                 setCurrentPageValue(1);
                 
                 changePage({
                  limit: newLimit,
                  offset: 1 * newLimit,
                  username: userNameFilter
                 });
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
          onClick={()=> {
            const firstPage =  1;
            handleChangePage(firstPage);
          }}
         >
           <img src={ doubleArrowLeft } alt="click go to the first page" />
         </PageButton>   
      )
   }
     
   {
      
      buttonsList.length >= 2  &&(
      buttonsList.map(page =>{  
        const maskNumberPage = page + 1 ;
        if(maskNumberPage < minRange || maskNumberPage >= numberPages) return null
         return (
          <PageButton 
           key={maskNumberPage}
           onClick={() => handleChangePage(maskNumberPage)}
          >
          {maskNumberPage}
        </PageButton>
         )
       })
    )
   }
     
     {  
       minRange > 5&&
      <>    
         <PageButton
          onClick={()=> {
            const lastPage = numberPages-1 ;
            const offset = (limit * lastPage );
            setMinRange(lastPage - buttonsRange);
            changePage({limit,offset, username:userNameFilter})
            setCurrentPageValue(lastPage);
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

