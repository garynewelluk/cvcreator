import { useState } from 'react'

const AddSchool = ({onAdd}) => {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [schoolName, setSchoolName] = useState('')
    const [location, setLocation] = useState('')
    const [qualification, setQualification] = useState('')
    const grades = []
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

        if (!schoolName) {
            alert('You must include a school name')
            return
        }

        onAdd({ startDate, endDate, schoolName, location, qualification, grades, pageBreakAfter })

        setStartDate('')
        setEndDate('')
        setSchoolName('')
        setLocation('')
        setQualification('')
        
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
                <label>School Name</label>
                <input type="text" placeholder="School Name" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Location</label>
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Qualification</label>
                <input type="text" placeholder="Qualification" value={qualification} onChange={(e) => setQualification(e.target.value)} />
            </div>
            <input type='submit' className='btn btn-block' value='Save School'/>
        </form>
    )
}

export default AddSchool
