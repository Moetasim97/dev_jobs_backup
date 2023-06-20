import React, {useEffect} from "react"
import "./App.css"
import Job from "./Job.js"
function App() {

  
  const [state,setInitial]=React.useState([])
  const [filteringTerms,setFilter]=React.useState({query:"",country:"",checked:"false"})


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



  const NameElement=document.querySelector("#nameInput")
  const countryElement=document.querySelector("#countryInput")
  const checkBox=document.querySelector("#fullTime")

  console.log(filteringTerms)
  console.log(filteringTerms.checked)
  console.log(state)

  

  

  return (
    
    <div className="App">
  
      <div className="top_section ">
        <div className='filter_bar d-flex p-3 fit_content '>
          <input type="text" id="nameInput" name="Name" className='' placeholder='Filter by title, company, expertise..'></input>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#5964e0" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          <input type="text" id="countryInput" name="Country" className='' placeholder='Filter by location'></input>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#5964e0" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <div className="d-flex align-items-baseline">
            <div className='d-flex align-items-start mx-2'>
              <input type="checkbox" id="fullTime" name="vehicle1"  value="job">
              </input>
              <label htmlFor="fullTime"> Full Time Only</label>
              
            </div>
            <button className='search_btn px-4' onClick={()=>{
              var queryInput=NameElement.value
              var countryInput=countryElement.value
              var checkboxState=checkBox.checked
              var object={}
              object.query=queryInput
              object.country=countryInput
              object.checked=checkboxState
              
              NameElement.value=""
              countryElement.value=""
              setFilter(object)
            }}>Search</button>
          </div>
        </div>
        <div className='container'>
          <div className='d-flex justify-content-between pb-4'>
            <div className='main_title'>devjobs</div>
            <div className='d-flex'>
                <div>placeholder</div>
                <div>another</div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle_section container ">
        <div className="row g-2">
          {state.map((job,index)=>{ 
            return <Job jobState={job}/>})}
        </div>

      </div>
    </div>
  );
}

export default App;
