
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import { useState } from "react"
import EditReferences from "../components/EditReferences";
import { useImperativeHandle, forwardRef } from "react";

const References = forwardRef(({referencesModel},_ref) => {
    const [references, setReferences] = useState(referencesModel)
    const [showEditReferences, setShowEditReferences] = useState(
        false
    )
    
    const editReferences = async (references) => {
    setReferences(references)
    setShowEditReferences(false)
    }

    useImperativeHandle(_ref, () => ({
        getReferences: () => {
            return references
        },
        setReferences: (value) => {
            setReferences(value)
        }
    }))

    return (
        <div className={references.details.length === 0 ? "noprint" : "print"}>
            <h1>References {showEditReferences ? <FaWindowClose onClick={() => setShowEditReferences(!showEditReferences)}/> : <FaEdit style={{color: 'green'}} onClick={() => setShowEditReferences(!showEditReferences)} />}</h1>
            <p>{references.details}</p>
            {showEditReferences && <EditReferences references={references} onEdit={editReferences} />}
        </div>
    )
})

export default References
