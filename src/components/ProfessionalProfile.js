import { FaEdit, FaWindowClose } from 'react-icons/fa'
import { useState } from "react"
import EditProfessionProfile from "../components/EditProfessionProfile";
import { useImperativeHandle, forwardRef } from "react";

const ProfessionalProfile = forwardRef(({professionalProfileModel}, _ref) => {
    const [professionalProfile, setProfessionalProfile] = useState(professionalProfileModel)
    // edit professional profile
    const editProfessionalProfile = async (professionalProfile) => {
        setProfessionalProfile(professionalProfile)
        setShowEditProfessionalProfile(false)
    }

    const [showEditProfessionalProfile, setShowEditProfessionalProfile] = useState(
        false
    )

    useImperativeHandle(_ref, () => ({
        getProfessionalProfile: () => {
            return professionalProfile
        },
        setProfessionalProfile: (value) => {
            setProfessionalProfile(value)
        }
    }))
     
    return (
        <div className={ professionalProfile.profile.length === 0 ? "noprint" : "print"}>
            <h1>Professional Profile {showEditProfessionalProfile ? <FaWindowClose className="screenOnly" onClick={() => setShowEditProfessionalProfile(!showEditProfessionalProfile)}/> : <FaEdit style={{color: 'green'}} onClick={() => setShowEditProfessionalProfile(!showEditProfessionalProfile)} />}</h1>
            <p>{professionalProfile.profile}</p>
            {showEditProfessionalProfile && <EditProfessionProfile professionalProfile={professionalProfile} onEdit={editProfessionalProfile} />}
        </div>
    )
})

export default ProfessionalProfile
