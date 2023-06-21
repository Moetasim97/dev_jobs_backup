import React,{useState} from "react"
import Details from "./Details"
import {useNavigate} from 'react-router-dom';




export default function Job({jobState,settingJob}){
    
    return (
        <>
      
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card_wrapper d-flex flex-column bg-white m-2 align-items-start justify-content-between  "
             onClick={()=>{
                settingJob(jobState)
                

            }}>
                <div className="d-flex flex-column align-items-start ">
                <div className="d-flex text-secondary small_font mb-2 ">
                    <div className="mx-2">{jobState.detected_extensions.posted_at} .</div>
                    <div>{jobState.detected_extensions.schedule_type}</div>
                </div>
                <div className="h6 mb-1 " align="start">{jobState.title}</div>
                <div className="text-secondary ">{jobState.company_name}</div>
                </div>
                
                <div className="company">{jobState.location}</div>

            </div>

        </div>
        
        </>
    )
}