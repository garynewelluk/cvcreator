import { useState } from 'react'
const AddJob = ({onAdd}) => {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [roleType, setRoleType] = useState('')
    const [role, setRole] = useState('')
    const [location, setLocation] = useState('')
    const [outline, setOutline] = useState('')
    const keyResponsibilities = []
    const pageBreakAfter = false
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

        onAdd({ startDate, endDate, companyName, roleType, role, location, outline, keyResponsibilities, pageBreakAfter })

        setStartDate('')
        setEndDate('')
        setCompanyName('')
        setRoleType('')
        setRole('')
        setLocation('')
        setOutline('')
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

export default AddJob
