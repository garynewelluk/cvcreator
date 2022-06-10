import { useState } from 'react'

const AddGrade = ({ onAdd, school }) => {
    const [subject, setSubject] = useState('')   
    const [result, setResult] = useState('')   
    const [schoolId] = useState(school.id)
    const onSubmit = (e) => {
        e.preventDefault()

        if (!subject) {
            alert('Please add a subject')
            return
        }

        if (!result) {
            alert('Please add a result')
            return
        }

        onAdd(schoolId, subject, result)
        setSubject('')
        setResult('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Subject</label>
                <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Result</label>
                <input type="text" placeholder="Result" value={result} onChange={(e) => setResult(e.target.value)} />
            </div>
            <input type='submit' className='btn btn-block' value='Save Grade'/>
        </form>
    )
}

export default AddGrade
