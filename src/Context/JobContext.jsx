import { createContext, useEffect, useState } from "react";

export const JobContext=createContext()

export const JobProvider=({children})=>{
    const [jobOpenings, setJobOpenings]=useState([])
    useEffect(()=>{
    const fetchJobDetails=async()=>{
        try{
            const response=await fetch('https://jsonfakery.com/jobs')
            if(!response.ok){
                throw new Error('something went wrong in API call')
            }
            const data=await response.json()
            const selectedJobs=data.slice(0,10)
            setJobOpenings(selectedJobs)
        }
        catch(err){
            console.error('An error occured')
        } 
    }
    fetchJobDetails()
},[])
console.log(jobOpenings)
    return <JobContext.Provider value={{jobOpenings}}>{children}</JobContext.Provider>
}