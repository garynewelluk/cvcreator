import { useState } from 'react'

const EditJob = ({ onEdit, job }) => {
    const [startDate, setStartDate] = useState(job.startDate)
    const [endDate, setEndDate] = useState(job.endDate)
    const [companyName, setCompanyName] = useState(job.companyName)
    const [roleType, setRoleType] = useState(job.roleType)
    const [role, setRole] = useState(job.role)
    const [location, setLocation] = useState(job.location)
    const [outline, setOutline] = useState(job.outline)
    const id = job.id
    const keyResponsibilities = job.keyResponsibilities
    const pageBreakAfter = job.pageBreakAfter

    const onSubmit = (e) => {
        e.preventDefault()

        if (!startDate) {
            alert('You must include an start date')
            return
        }

        if (!endDate) {
            alert('You must include an end date')
            return
        }

        if (!companyName) {
            alert('You must include a company name')
            return
        }

        if (!role) {
            alert('You must include a role')
            return
        }

        onEdit({ id, startDate, endDate, companyName, roleType, role, location, outline, keyResponsibilities, pageBreakAfter })
    }

    return (
        <form className='edit-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Start Date</label>
                <input type="text" placeholder="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>End Date</label>
                <input type="text" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Company Name</label>
                <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Role Type</label>
                <input type="text" placeholder="Role Type" value={roleType} onChange={(e) => setRoleType(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Role</label>
                <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Location</label>
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Outline</label>
                <textarea onChange={(e) => setOutline(e.target.value)} value={outline}/>
            </div>
            <input type='submit' className='btn btn-block' value='Save Job'/>
        </form>
    )
} 

export default EditJob
