import React,{useState} from "react"
import Details from "./Details"
import {useNavigate} from 'react-router-dom';
import {ThemeContext} from "./App"




export default function Job({jobState,settingJob}){

    const darkTheme=React.useContext(ThemeContext)

    const MainTheme={
        backgroundColor:darkTheme ? " #121721" : "#f4f6f8"
      }
      const secondaryTheme={
        backgroundColor:darkTheme? "#19202D" : "white",
        color:darkTheme? "white" : "black" 
      }

    
    return (
        <>
      
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card_wrapper d-flex flex-column m-2 align-items-start justify-content-between  " style={secondaryTheme}
             onClick={()=>{
                settingJob(jobState)
                

            }}>
                <img src={jobState.thumbnail} className="job_thumbnail"/>
                <div className="d-flex flex-column align-items-start ">
                <div className="d-flex text-secondary small_font mb-2 mt-2">
                    <div className="mx-2">{jobState.detected_extensions.posted_at} .</div>
                    <div>{jobState.detected_extensions.schedule_type}</div>
                </div>
                <div className="h6 mb-1 card_title" align="start">{jobState.title}</div>
                <div className="text-secondary ">{jobState.company_name}</div>
                </div>
                
                <div className="company">{jobState.location}</div>

            </div>

        </div>
        
        </>
    )
}