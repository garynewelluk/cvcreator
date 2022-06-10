import { useState } from 'react'
const AddSkill = ({ onAdd }) => {
    const [skillName, setSkillName] = useState('')   

    const onSubmit = (e) => {
        e.preventDefault()

        if (!skillName) {
            alert('Please add a skill')
            return
        }

        onAdd({ skillName })
        setSkillName('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Skill</label>
                <input type='text' placeholder='Add Skill' value={skillName} onChange={(e) => setSkillName(e.target.value)} /> 
            </div>
            <input type='submit' className='btn btn-block' value='Save Skill'/>
        </form>
    )
}

export default AddSkill
