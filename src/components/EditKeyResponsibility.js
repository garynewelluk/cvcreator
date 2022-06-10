import { useState } from 'react'

const EditKeyResponsibility = ({ keyResponsibility, onEdit }) => {
    const [responsibility, setResponsibility] = useState(keyResponsibility.responsibility)
    const id = keyResponsibility.id
    const jobId = keyResponsibility.jobId
    const sortOrder = keyResponsibility.sortOrder

    const onSubmit = (e) => {
        e.preventDefault()

        if (!responsibility) {
            alert('You must enter a responsibility')
            return
        }

        onEdit(id, jobId, responsibility, sortOrder)
    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Key Responsibility</label>
                <input type="text" placeholder="Key Responsibility" value={responsibility} onChange={(e) => setResponsibility(e.target.value)} />
            </div>
            <input type='submit' className='btn btn-block' value='Save Key Responsibility'/>
        </form>
    )
}

export default EditKeyResponsibility
