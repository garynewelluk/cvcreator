import { useState } from 'react'

const EditGrade = ({ grade, onEdit }) => {

    const [subject, setSubject] = useState(grade.subject);
    const [result, setResult] = useState(grade.result);
    const id = grade.id
    const schoolId = grade.schoolId
    const sortOrder = grade.sortOrder

    const onSubmit = (e) => {
        e.preventDefault()

        if (!subject) {
            alert('You must enter a subject')
            return
        }

        if (!result) {
            alert('You must enter a result')
            return
        }

        onEdit(id, schoolId, subject, result, sortOrder )
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Subject</label>
                <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Result</label>
                <input type="text" placeholder="result" value={result} onChange={(e) => setResult(e.target.value)} />
 
            </div>
            <input type='submit' className='btn btn-block' value='Save Grade'/>
        </form>
    )
}

export default EditGrade
