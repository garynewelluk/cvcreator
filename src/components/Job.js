import KeyResponsibilities from "./KeyResponsibilities"
import { FaEdit, FaWindowClose, FaTimes, FaPlus, FaSortUp, FaSortDown, FaBookOpen } from 'react-icons/fa'
import { useState, useEffect } from "react"
import EditJob from './EditJob'

const Job = ({job, onEdit, onDelete, onAddKeyResponsibility, onEditKeyResponsibility, onDeleteKeyResponsibility, onSortUp, onSortDown, onKeyResponsibilitySortUp, onKeyResponsibilitySortDown, setTogglePageBreak}) => {
    const [showEditJob, setShowEditJob] = useState(
        false
    )

    const [showAddKeyResponsibility, setShowAddKeyResponsibility] = useState(false)
    
    const addKeyResponsibility = async (jobId, responsibility) => {
        onAddKeyResponsibility({jobId, responsibility})
        setShowAddKeyResponsibility(false)
    }

    return (
        <div className="jobs">
            <h2>{job.role}, {job.companyName}, {job.location}, {job.roleType} <FaSortUp onClick = {() => onSortUp(job.id)} /> <FaSortDown onClick = {() => onSortDown(job.id)} /> {showEditJob ? <FaWindowClose onClick={() => setShowEditJob(!showEditJob)}/> : <FaEdit style={{color: 'green'}} onClick={() => setShowEditJob(!showEditJob)} />} <FaTimes onClick = {() => onDelete(job.id)} style={{ color: 'red', cursor: 'pointer'}}/> {job.pageBreakAfter ? <FaBookOpen style={{color: 'green'}} onClick={() => setTogglePageBreak(job)} /> : <FaBookOpen style={{color: 'red'}} onClick={() => setTogglePageBreak(job)} /> }</h2>
            <h3>({job.startDate} - {job.endDate})</h3>
            <h4>Outline</h4>
            <p>{job.outline}</p>
            {showEditJob && <EditJob job={job} onEdit={onEdit} />}
            <h4 className={ job.keyResponsibilities == null || job.keyResponsibilities.length == 0 ? "noprint" : "print"}>Key Responsibilities {showAddKeyResponsibility ? <FaWindowClose onClick={() => setShowAddKeyResponsibility(!showAddKeyResponsibility)}/> : <FaPlus style={{color: 'green'}} onClick={() => setShowAddKeyResponsibility(!showAddKeyResponsibility)} />}</h4>             
            <KeyResponsibilities job={job} showAddKeyResponsibility={showAddKeyResponsibility} onAdd={addKeyResponsibility} onEditKeyResponsibility={onEditKeyResponsibility} onDeleteKeyResponsibility={onDeleteKeyResponsibility} onKeyResponsibilitySortUp={onKeyResponsibilitySortUp} onKeyResponsibilitySortDown={onKeyResponsibilitySortDown} />            
            {job.pageBreakAfter && <div className="pagebreakafter" />}
        </div>
    )
}

export default Job
