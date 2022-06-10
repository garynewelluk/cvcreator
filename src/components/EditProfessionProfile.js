import { useState } from 'react'

const EditProfessionProfile = ({onEdit, professionalProfile}) => {
    const [profile, setProfile] = useState(professionalProfile.profile)

    const onSubmit = (e) => {
        e.preventDefault()
        onEdit({ profile })
    }

    return (
        <form className='edit-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Profile</label>
                <textarea onChange={(e) => setProfile(e.target.value)} value={profile}/>
            </div>
            <input type='submit' className='btn btn-block' value='Save Profile'/>
        </form>
    )
}

export default EditProfessionProfile
