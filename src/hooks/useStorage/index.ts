
export default function useStorage() 
{

  function setUserName(userName:string ='')
  {
    localStorage.setItem("userName", JSON.stringify(userName))
    return
  }

  function getUserName()
  {
    const saved = localStorage.getItem("userName");
    return saved? JSON.parse(saved) : null;
  }

  return [
    setUserName,
    getUserName,
  ]
}