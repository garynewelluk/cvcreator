import Job from './Job'
import { FaPlus, FaWindowClose } from 'react-icons/fa'
import AddJob from '../components/AddJob'
import { useState } from "react"
import { useImperativeHandle, forwardRef } from "react"
import { useRef } from 'react';

const Jobs = forwardRef(({jobsModel}, _ref) => {

    const [jobs, setJobs] = useState(jobsModel)

    const [showAddJobs, setShowAddJobs] = useState( false )
  
    const toggleJobPageBreak = async (amendedJob) => {
      setJobs(jobs.map((job) => job.id === amendedJob.id ? {
        startDate: amendedJob.startDate,
        endDate: amendedJob.endDate,
        companyName: amendedJob.companyName,
        roleType: amendedJob.roleType,
        role: amendedJob.role,
        location: amendedJob.location,
        outline: amendedJob.outline,
        keyResponsibilities: amendedJob.keyResponsibilities,
        sortOrder: amendedJob.sortOrder,
        pageBreakAfter: !amendedJob.pageBreakAfter
      } : job))
    }
  
  
    // edit job
    const editJob = async (amendedJob) => {
      setJobs(jobs.map((job) => job.id === amendedJob.id ? {
        startDate: amendedJob.startDate,
        endDate: amendedJob.endDate,
        companyName: amendedJob.companyName,
        roleType: amendedJob.roleType,
        role: amendedJob.role,
        location: amendedJob.location,
        outline: amendedJob.outline,
        keyResponsibilities: amendedJob.keyResponsibilities,
        sortOrder: amendedJob.sortOrder,
        pageBreakAfter: amendedJob.pageBreakAfter
      } : job))
    }
      
    // delete job
    const deleteJob = async (id) => {
      setJobs(jobs.filter((job) => job.id !== id))
    }
    
    // key responsibilities
    const addKeyResponsibilities = async (keyResponsibility) => {
      const job = jobs.find((job) => job.id === keyResponsibility.jobId)
      let amendedKeyResponsibilities = [];
      if (job.keyResponsibilities !== undefined)
      {
        amendedKeyResponsibilities = job.keyResponsibilities;
      }
      const id = Math.max(...amendedKeyResponsibilities.map(responsibility => responsibility.id)) + 1

      const newKeyResponsibility = { id, ...keyResponsibility }
      if (newKeyResponsibility.id === null || !Number.isFinite(newKeyResponsibility.id))
      {
        newKeyResponsibility.id = 1        
      }
      newKeyResponsibility.sortOrder = Math.max(...amendedKeyResponsibilities.map(kr => kr.sortOrder)) + 1
      if (newKeyResponsibility.sortOrder === null || !Number.isFinite(newKeyResponsibility.sortOrder))
      {
        newKeyResponsibility.sortOrder = 1
      }
      amendedKeyResponsibilities.push(newKeyResponsibility)
  
      setJobs(jobs.map((amendedjob) => job.id === amendedjob.id ? {
        id: amendedjob.id,
        startDate: amendedjob.startDate,
        endDate: amendedjob.endDate,
        companyName: amendedjob.companyName,
        roleType: amendedjob.roleType,
        role: amendedjob.role,
        location: amendedjob.location,
        outline: amendedjob.outline,
        keyResponsibilities: amendedKeyResponsibilities,
        pageBreakAfter: amendedjob.pageBreakAfter
      } : amendedjob))
  
    }
  
    const sortJobUp = async (id) => {
      const jobToMoveUp = jobs.find((job) => job.id === id) 
      const reducer = (previousValue, currentValue) => currentValue.sortOrder >= jobToMoveUp.sortOrder ? previousValue : currentValue
      const jobToMoveDown = jobs.reduce(reducer)
     
      if (jobToMoveDown !== undefined)
      {
        let jobDownSortOrder = jobToMoveUp.sortOrder
        jobToMoveUp.sortOrder = jobToMoveDown.sortOrder
        jobToMoveDown.sortOrder = jobDownSortOrder
  
        setJobs(jobs.map((job) => job.id === jobToMoveUp.id ? {
          id: jobToMoveUp.id,
          startDate: jobToMoveUp.startDate,
          endDate: jobToMoveUp.endDate,
          companyName: jobToMoveUp.companyName,
          roleType: jobToMoveUp.roleType,
          role: jobToMoveUp.role,
          location: jobToMoveUp.location,
          outline: jobToMoveUp.outline,
          keyResponsibilities: jobToMoveUp.keyResponsibilities,
          sortOrder: jobToMoveUp.sortOrder,
          pageBreakAfter: jobToMoveUp.pageBreakAfter
        } : job))
  
        setJobs(jobs.map((job) => job.id === jobToMoveDown.id ? {
          id: jobToMoveDown.id,
          startDate: jobToMoveDown.startDate,
          endDate: jobToMoveDown.endDate,
          companyName: jobToMoveDown.companyName,
          roleType: jobToMoveDown.roleType,
          role: jobToMoveDown.role,
          location: jobToMoveDown.location,
          outline: jobToMoveDown.outline,
          keyResponsibilities: jobToMoveDown.keyResponsibilities,
          sortOrder: jobToMoveDown.sortOrder,
          pageBreakAfter: jobToMoveDown.pageBreakAfter
        } : job))
      }
    }
  
    const sortJobDown = async (id) => {
      const jobToMoveDown = jobs.find((job) => job.id === id)
      const jobToMoveUp = jobs.find((job) => job.sortOrder > jobToMoveDown.sortOrder)
  
      if (jobToMoveUp !== undefined)
      {
        let jobDownSortOrder = jobToMoveUp.sortOrder
        jobToMoveUp.sortOrder = jobToMoveDown.sortOrder
        jobToMoveDown.sortOrder = jobDownSortOrder
  
        setJobs(jobs.map((job) => job.id === jobToMoveUp.id ? {
          id: jobToMoveUp.id,
          startDate: jobToMoveUp.startDate,
          endDate: jobToMoveUp.endDate,
          companyName: jobToMoveUp.companyName,
          roleType: jobToMoveUp.roleType,
          role: jobToMoveUp.role,
          location: jobToMoveUp.location,
          outline: jobToMoveUp.outline,
          keyResponsibilities: jobToMoveUp.keyResponsibilities,
          sortOrder: jobToMoveUp.sortOrder,
          pageBreakAfter: jobToMoveUp.pageBreakAfter
        } : job))
  
        setJobs(jobs.map((job) => job.id === jobToMoveDown.id ? {
          id: jobToMoveDown.id,
          startDate: jobToMoveDown.startDate,
          endDate: jobToMoveDown.endDate,
          companyName: jobToMoveDown.companyName,
          roleType: jobToMoveDown.roleType,
          role: jobToMoveDown.role,
          location: jobToMoveDown.location,
          outline: jobToMoveDown.outline,
          keyResponsibilities: jobToMoveDown.keyResponsibilities,
          sortOrder: jobToMoveDown.sortOrder,
          pageBreakAfter: jobToMoveDown.pageBreakAfter
        } : job))
      }
    }
  
    const editKeyResponsibility = async (keyResponsibility) => {
      const job = jobs.find((job) => job.id === keyResponsibility.jobId)
      let amendedKeyResponsibilities = job.keyResponsibilities    
      const index = amendedKeyResponsibilities.findIndex((k) => k.id === keyResponsibility.id)
      
  
      amendedKeyResponsibilities = [...amendedKeyResponsibilities.slice(0,index), keyResponsibility, ...amendedKeyResponsibilities.slice(index+1)]
  
      setJobs(jobs.map((amendedjob) => job.id === amendedjob.id ? {
        id: amendedjob.id,
        startDate: amendedjob.startDate,
        endDate: amendedjob.endDate,
        companyName: amendedjob.companyName,
        roleType: amendedjob.roleType,
        role: amendedjob.role,
        location: amendedjob.location,
        outline: amendedjob.outline,
        keyResponsibilities: amendedKeyResponsibilities,
        pageBreakAfter: amendedjob.pageBreakAfter
      } : amendedjob))
  
    }
  
    const deleteKeyResponsibility = async (id,jobId) => {
      const job = jobs.find((job) => job.id === jobId)
      const amendedKeyResponsibilities = job.keyResponsibilities.filter((keyResponsibility) => keyResponsibility.id !== id)
  
      setJobs(jobs.map((amendedjob) => job.id === amendedjob.id ? {
        id: amendedjob.id,
        startDate: amendedjob.startDate,
        endDate: amendedjob.endDate,
        companyName: amendedjob.companyName,
        roleType: amendedjob.roleType,
        role: amendedjob.role,
        location: amendedjob.location,
        outline: amendedjob.outline,
        keyResponsibilities: amendedKeyResponsibilities,
        pageBreakAfter: amendedjob.pageBreakAfter
      } : amendedjob))
    }
  
    const addJobs = async (job) => {
      
      const id = Math.max(...jobs.map(job => job.id)) + 1
      const newJob = { id, ...job }

      if (newJob.id === null || !Number.isFinite(newJob.id))
      {
        newJob.id = 1
      }

      newJob.sortOrder = Math.max(...jobs.map(job => job.sortOrder)) + 1

      if (newJob.sortOrder === null || !Number.isFinite(newJob.sortOrder))
      {
        newJob.sortOrder = 1
      }      
      alert(newJob.sortOrder)
      newJob.keyResponsibilities = []
      setJobs([...jobs, newJob])
      setShowAddJobs(false);
    }
  
    const sortKeyResponsibilityUp = async (id, jobId) => {
      const job = jobs.find((job) => job.id === jobId)
      let amendedKeyResponsibilities = job.keyResponsibilities    
      const keyResponsibilityToMoveUp = job.keyResponsibilities.find((kr) => kr.id === id) 
      const reducer = (previousValue, currentValue) => currentValue.sortOrder >= keyResponsibilityToMoveUp.sortOrder ? previousValue : currentValue
      const keyResponsibilityToMoveDown = job.keyResponsibilities.reduce(reducer)
     
      if (keyResponsibilityToMoveDown !== undefined)
      {
        let index = amendedKeyResponsibilities.findIndex((k) => k.id === keyResponsibilityToMoveUp.id)    
        amendedKeyResponsibilities = [...amendedKeyResponsibilities.slice(0,index), keyResponsibilityToMoveUp, ...amendedKeyResponsibilities.slice(index+1)]
        let keyResponsibilityDownSortOrder = keyResponsibilityToMoveUp.sortOrder
        keyResponsibilityToMoveUp.sortOrder = keyResponsibilityToMoveDown.sortOrder
        keyResponsibilityToMoveDown.sortOrder = keyResponsibilityDownSortOrder
  
        setJobs(jobs.map((amendedjob) => amendedjob.id === job.id ? {
          id: amendedjob.id,
          startDate: amendedjob.startDate,
          endDate: amendedjob.endDate,
          companyName: amendedjob.companyName,
          roleType: amendedjob.roleType,
          role: amendedjob.role,
          location: amendedjob.location,
          outline: amendedjob.outline,
          keyResponsibilities: amendedKeyResponsibilities,
          sortOrder: amendedjob.sortOrder,
          pageBreakAfter: amendedjob.pageBreakAfter
        } : amendedjob))
  
        index = amendedKeyResponsibilities.findIndex((k) => k.id === keyResponsibilityToMoveDown.id)    
        amendedKeyResponsibilities = [...amendedKeyResponsibilities.slice(0,index), keyResponsibilityToMoveDown, ...amendedKeyResponsibilities.slice(index+1)]
  
        setJobs(jobs.map((amendedjob) => amendedjob.id === job.id ? {
          id: amendedjob.id,
          startDate: amendedjob.startDate,
          endDate: amendedjob.endDate,
          companyName: amendedjob.companyName,
          roleType: amendedjob.roleType,
          role: amendedjob.role,
          location: amendedjob.location,
          outline: amendedjob.outline,
          keyResponsibilities: amendedKeyResponsibilities,
          sortOrder: amendedjob.sortOrder,
          pageBreakAfter: amendedjob.pageBreakAfter
        } : amendedjob))
      }
    }
  
    const sortKeyResponsibilityDown = async (id, jobId) => {
  
      const job = jobs.find((job) => job.id === jobId)
  
      let amendedKeyResponsibilities = job.keyResponsibilities    
  
      const keyResponsibilityToMoveDown = job.keyResponsibilities.find((kr) => kr.id === id)
  
      const keyResponsibilityToMoveUp = job.keyResponsibilities.find((kr) => kr.sortOrder > keyResponsibilityToMoveDown.sortOrder)
  
      if (keyResponsibilityToMoveUp !== undefined)
      {
        let index = amendedKeyResponsibilities.findIndex((k) => k.id === keyResponsibilityToMoveUp.id)    
        amendedKeyResponsibilities = [...amendedKeyResponsibilities.slice(0,index), keyResponsibilityToMoveUp, ...amendedKeyResponsibilities.slice(index+1)]
        let keyResponsibilityDownSortOrder = keyResponsibilityToMoveUp.sortOrder
        keyResponsibilityToMoveUp.sortOrder = keyResponsibilityToMoveDown.sortOrder
        keyResponsibilityToMoveDown.sortOrder = keyResponsibilityDownSortOrder
  
        setJobs(jobs.map((amendedjob) => job.id === amendedjob.id ? {
          id: amendedjob.id,
          startDate: amendedjob.startDate,
          endDate: amendedjob.endDate,
          companyName: amendedjob.companyName,
          roleType: amendedjob.roleType,
          role: amendedjob.role,
          location: amendedjob.location,
          outline: amendedjob.outline,
          keyResponsibilities: amendedKeyResponsibilities,
          sortOrder: amendedjob.sortOrder,
          pageBreakAfter: amendedjob.pageBreakAfter
        } : amendedjob))
  
        index = amendedKeyResponsibilities.findIndex((k) => k.id === keyResponsibilityToMoveDown.id)    
        amendedKeyResponsibilities = [...amendedKeyResponsibilities.slice(0,index), keyResponsibilityToMoveDown, ...amendedKeyResponsibilities.slice(index+1)]
  
        setJobs(jobs.map((amendedjob) => amendedjob.id === job.id ? {
          id: amendedjob.id,
          startDate: amendedjob.startDate,
          endDate: amendedjob.endDate,
          companyName: amendedjob.companyName,
          roleType: amendedjob.roleType,
          role: amendedjob.role,
          location: amendedjob.location,
          outline: amendedjob.outline,
          keyResponsibilities: amendedKeyResponsibilities,
          sortOrder: amendedjob.sortOrder,
          pageBreakAfter: amendedjob.pageBreakAfter
        } : amendedjob))
      }
    }

        
    useImperativeHandle(_ref, () => ({
      getJobs: () => {
          return jobs
      },
      setJobs: (value) => {
          setJobs(value)
      }
    }))

    const jobRef = useRef()
    return (
        <div className={jobs.length == 0 ? "noprint" : "print"}>
            <h1>Employment History {showAddJobs ? <FaWindowClose onClick={() => setShowAddJobs(!showAddJobs)}/> : <FaPlus style={{color: 'green'}} onClick={() => setShowAddJobs(!showAddJobs)} />}</h1>
            {showAddJobs && <AddJob onAdd={addJobs} />}
            {jobs.sort((a,b) => a.sortOrder > b.sortOrder ? 1 : -1).map((job) => (
            <Job key={job.id} job={job} onEdit={editJob} onDelete={deleteJob} onAddKeyResponsibility={addKeyResponsibilities} onEditKeyResponsibility={editKeyResponsibility} onDeleteKeyResponsibility={deleteKeyResponsibility}  onSortUp={sortJobUp} onSortDown={sortJobDown} onKeyResponsibilitySortUp={sortKeyResponsibilityUp} onKeyResponsibilitySortDown={sortKeyResponsibilityDown} setTogglePageBreak={toggleJobPageBreak}/>
            ))}
        </div>    
    )
})

export default Jobs
