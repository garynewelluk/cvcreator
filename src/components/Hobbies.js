import { FaEdit, FaWindowClose } from 'react-icons/fa'
import { useState, useEffect } from "react"
import EditHobbies from "../components/EditHobbies";
import { useImperativeHandle, forwardRef } from "react"

const Hobbies = forwardRef(({hobbiesModel}, _ref) => {
    const [hobbies, setHobbies] = useState(hobbiesModel)
    const [showEditHobbies, setShowEditHobbies] = useState(
        false
    )
    
    const editHobbies = async (hobbies) => {
    setHobbies(hobbies)
    setShowEditHobbies(false)
    }
    
    useImperativeHandle(_ref, () => ({
        getHobbies: () => {
            return hobbies
        },
        setHobbies: (value) =>
        {
            setHobbies(value)
        }
    }))
    
    return (
        <div className={hobbies.hobby.length == 0 ? "noprint" : "print"}>
            <h1>Hobbies {showEditHobbies ? <FaWindowClose onClick={() => setShowEditHobbies(!showEditHobbies)}/> : <FaEdit style={{color: 'green'}} onClick={() => setShowEditHobbies(!showEditHobbies)} />}</h1>
            <p>{hobbies.hobby}</p>
            {showEditHobbies && <EditHobbies hobbies={hobbies} onEdit={editHobbies} />}
        </div>
    )
})

export default Hobbies
