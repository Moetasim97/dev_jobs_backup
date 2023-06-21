import React from "react"
import "./Details.css"


export default function Details ({state}){
    const [myState,setState]=React.useState(false)

    console.log(state)


    var empty=[]


    return (
        
        <>
  
        {Object.keys(state).length>4 ?  (
            <div className="modal_background w-100 px-4">
                <div className="wrap">
            <div className="description_header d-flex border">
                
                <img src={state.thumbnail} className="modal_thumbnail"/>
                <div className="d-flex justify-content-between w-100 align-items-center p-4" >
                    <div className="d-flex flex-column  align-items-start">
                        <div className="h6">
                        {state.company_name}
                        </div>
                        <div className="text-secondary">
                        {state.related_links[0].text }   
                        </div>
                    
                    </div>
                    <a href={state.related_links[0].link} className="links" >
                        Company Site
                        </a>
                    </div>
                </div>
                </div>

               <div className="wrap">
                <div className="modal_body mt-4 border p-5 ">
                        <div className="d-flex justify-content-between mb-5">
                            <div className="d-flex flex-column">
                                <div className="d-flex">
                                    <div className="text-secondary">
                                    {state.detected_extensions.posted_at} .
                                    </div>
                                    <div className="text-secondary">
                                    {state.detected_extensions.schedule_type}
                                    </div>

                                </div>
                                <div className="modal_title h4">
                                    {state.title}
                                </div>
                                <div className="company" align="start">
                                    {state.location}
                                </div>
                            </div>
                            <a href={state.related_links[0].link} className="big_link ">
                            Apply Now
                            </a>
                        </div>
                        <div className="job_description text-secondary mb-5" align="start">
                        {state.description}
                        </div>
                        <div className="h5 mb-4" align="start">
                            Requirements
                        </div>
                        {state.job_highlights[0].items.map((requirement)=>{
                            return(
                                <li align="start">{requirement}</li>
                            )
                        })}

                        <div className="h5 mb-4 mt-3" align="start">
                             What You will do
                        </div>
                        {state.job_highlights[1].items.map((requirement)=>{
                            return(
                                <li className="another_li" align="start">{requirement}</li>
                            )
                        })}
                      
                    </div>
               </div>
            </div>
        )
    :
    console.log("not going to appear")
    }
        
        </>
    )
}