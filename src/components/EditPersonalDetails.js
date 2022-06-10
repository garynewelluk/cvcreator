import { useState } from 'react'

const EditPersonalDetails = ({ onEdit, personalDetails }) => {

    const [name, setName] = useState(personalDetails.name)
    const [role, setRole] = useState(personalDetails.role)
    const [address, setAddress] = useState(personalDetails.address)
    const [telephone, setTelephone] = useState(personalDetails.telephone)
    const [email, setEmail] = useState(personalDetails.email)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Your CV should include your name')
            return
        }

        onEdit({ name, address, telephone, email, role })
    }

    return (
        <form className='edit-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Role</label>
                <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Address</label>
                <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Telephone Number</label>
                <input type="text" placeholder="Telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Email Address</label>
                <input type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <input type='submit' className='btn btn-block' value='Save Personal Details'/>
        </form>    
    )
} 

export default EditPersonalDetails
