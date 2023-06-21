import React from "react"
import Job from "./Job.js"
import Details from "./Details.js"
import { ThemeContext } from "./App.js"
import {useContext} from "react"
import { dark } from "@mui/material/styles/createPalette.js"


export default function Main({state,filter,toggler}){
    

    const[singleJob,setSingleJob]=React.useState({})
    const darkTheme=React.useContext(ThemeContext)

    const NameElement=document.querySelector("#nameInput")
    const countryElement=document.querySelector("#countryInput")
    const checkBox=document.querySelector("#fullTime")

    const settingJob=(object)=>{
        setSingleJob(object)
    }

    const MainTheme={
        backgroundColor:darkTheme ? " #121721" : "#f4f6f8"
      }

      const secondaryTheme={
        backgroundColor:darkTheme? "#19202D" : "white",
        color:darkTheme? "white" : "black"
      }
      const special_theme={
        backgroundColor:darkTheme? "#34353F" : "#eff0fc"
      }



    return (
         <>
<div className="App" style={MainTheme} >
    <Details state={singleJob}/>

<div className="top_section ">
  <div className='filter_bar d-flex p-3 fit_content  ' style={secondaryTheme}>
    <input type="text" id="nameInput" name="Name" className='occupationField' placeholder='Filter by title, company, expertise..'></input>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#5964e0" className="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
    <input type="text" id="countryInput" name="Country" className='locationField' placeholder='Filter by location'></input>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#5964e0" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    </svg>
    <div className="d-flex align-items-baseline">
      <div className='d-flex align-items-start mx-2'>
        <input type="checkbox" id="fullTime" name="vehicle1"  value="job" style={special_theme}>
        </input>
        <label htmlFor="fullTime" className="first_label"> Full Time Only</label>
        
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
        filter(object)
      }}>Search</button>
    </div>
  </div>
  <div className='container'>
    <div className='d-flex justify-content-between pb-4'>
      <div className='main_title'>devjobs</div>
      <div className='d-flex'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-brightness-high" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
            </svg>
      <input type="checkbox" id="checkbox" name="vehicle3"  className="checkbox" onClick={()=>{
        toggler()
      }}/>
        <label htmlFor="checkbox"  className="togglerLabel mt-3">  <div className="ball"></div> </label>
          
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-moon-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        </svg>
      

                        
      </div>
    </div>
  </div>
</div>

<div className="middle_section container ">
  <div className="row g-3">
    {state.map((job,index)=>{ 
      return (<><Job jobState={job} settingJob={settingJob} />
                  </>  )})}
  </div>

</div>
</div>
</>

    )
}




