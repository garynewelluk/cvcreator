import { useState } from 'react'

const EditHobbies = ({onEdit, hobbies}) => {
    const [hobby, setHobby] = useState(hobbies.hobby)

    const onSubmit = (e) => {
        e.preventDefault()
        onEdit({ hobby })
    }

    return (
        <form className='edit-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Hobbies</label>
                <textarea onChange={(e) => setHobby(e.target.value)} value={hobby}/>
            </div>
            <input type='submit' className='btn btn-block' value='Save Hobbies'/>
        </form>
    )
}

export default EditHobbies
