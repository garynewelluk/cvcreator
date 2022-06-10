import { useState } from 'react'

const EditReferences = ({onEdit, references}) => {
    const [details, setDetails] = useState(references.details)

    const onSubmit = (e) => {
        e.preventDefault()
        onEdit({ details })
    }

    return (
        <form className='edit-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>References</label>
                <textarea onChange={(e) => setDetails(e.target.value)} value={details}/>
            </div>
            <input type='submit' className='btn btn-block' value='Save References'/>
        </form>
    )
}

export default EditReferences
