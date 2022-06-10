import { FaEdit, FaWindowClose } from 'react-icons/fa'
import { useState } from "react"
import EditPersonalDetails from "../components/EditPersonalDetails";
import { useImperativeHandle, forwardRef } from "react";

const PersonalDetails = forwardRef(({personalDetailsModel}, _ref) => {

    const [personalDetails, setPersonalDetails] = useState(personalDetailsModel)

    // edit personalDetails
    const editPersonalDetails = async (personalDetails) => {
        setPersonalDetails(personalDetails)
        setShowEditPersonalDetails(false)
    }

    const [showEditPersonalDetails, setShowEditPersonalDetails] = useState(
        false
    )

    useImperativeHandle(_ref, () => ({
        getPersonalDetails: () => {
            return personalDetails
        },
        setPersonalDetails: (value) => {
            setPersonalDetails(value)
        }
    }))

    return (
        <div className="personaldetails">
            <h1><span className={ personalDetails.name.length === 0 ? "noprint" : "print"}>{personalDetails.name}</span><span className={ personalDetails.role.length === 0 ? "noprint" : "print"}> {personalDetails.role.length > 0 ? "|" : ""} {personalDetails.role} {showEditPersonalDetails ? <FaWindowClose onClick={() => setShowEditPersonalDetails(!showEditPersonalDetails)}/> : <FaEdit style={{color: 'green'}} onClick={() => setShowEditPersonalDetails(!showEditPersonalDetails)} />}</span></h1>  
            <address className={ personalDetails.address.length === 0 ? "noprint" : "print"}>{personalDetails.address}</address>
            <div className={ personalDetails.telephone.length === 0 ? "noprint" : "print"}>{personalDetails.telephone}</div>
            <div className={ personalDetails.email.length === 0 ? "noprint" : "print"}>{personalDetails.email}</div>
            {showEditPersonalDetails && <EditPersonalDetails personalDetails={personalDetails} onEdit={editPersonalDetails} />} 
        </div>
    )
})  

export default PersonalDetails
