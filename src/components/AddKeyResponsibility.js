import { useState } from 'react'

const AddKeyResponsibility = ( { onAdd, job }) => {
    const [responsibility, setResponsibility] = useState('')   
    const [jobId] = useState(job.id)
    const onSubmit = (e) => {
        e.preventDefault()

        if (!responsibility) {
            alert('Please add a responsibility')
            return
        }
        
        onAdd(jobId, responsibility)
        setResponsibility('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Key Responsibility</label>
                <input type="text" placeholder="key responsibility" value={responsibility} onChange={(e) => setResponsibility(e.target.value)} />
            </div>
            <input type='submit' className='btn btn-block' value='Save Key Responsibility'/>
        </form>
    )
}

export default AddKeyResponsibility
