import React, {useEffect} from "react"
import "./App.css"
import Main from "./Main"
import Details from "./Details"
import {Route,Routes} from "react-router-dom"
function App() {

  
  const [state,setInitial]=React.useState([])
  const [filteringTerms,setFilter]=React.useState({query:"",country:"",checked:"false"})


  const settingFilter=(object)=>{
    setFilter(object)
  }
  useEffect(
    ()=>{
      const defaultLocation="United States"
      const defaultQuery="dev jobs"
      var emptyLoc;
      var emptyQuery;
    
      if(filteringTerms.query=="" || filteringTerms.country=="")
      {
        emptyLoc=defaultLocation
        emptyQuery=defaultQuery
      }
      else{
        emptyLoc=filteringTerms.country
        emptyQuery=filteringTerms.query
      }
        fetch(`https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_jobs&q=${emptyQuery}&hl=en&location=${emptyLoc}&api_key=1cf006956133739e8c0ae7531896411fe4a991fea859baaee226574d5b40b5ec`,{
          headers:{'x-requested-with':"GET"}
        }
        )
        .then((response)=>response.json())
        .then((data)=>
        {
          var array=data.jobs_results
          if (filteringTerms.checked==true){
            for(var i=0;i<array.length;i++){
              if(array[i].detected_extensions.schedule_type=="Part-time"){
                console.log(array[i])
                array.splice(i,1)
        
              }
             
           
            }
          }
          setInitial(array)
        })
      

    },[filteringTerms]
  )





  console.log(filteringTerms)
  console.log(filteringTerms.checked)
  console.log(state)

  

  

  return (
    
   <Routes>
    <Route path='/' element={<Main state={state} filter={settingFilter}/>}/>
   </Routes>
  );
}

export default App;
