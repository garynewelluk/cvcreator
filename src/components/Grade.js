import { useState, useEffect } from "react"
import { FaEdit, FaWindowClose, FaTimes, FaSortUp, FaSortDown } from 'react-icons/fa'
import EditGrade from "./EditGrade"

const Grade = ({grade, onEditGrade, onDeleteGrade, onGradeSortUp, onGradeSortDown }) => {
    const [showEditGrade, setShowEditGrade] = useState(
        false
    )

    const editGrade = async (id, schoolId, subject, result, sortOrder) => {
        onEditGrade({id, schoolId, subject, result, sortOrder})
        setShowEditGrade(false)
    }

    return (
        <li>
            {grade.subject} - {grade.result} <FaSortUp onClick = {() => onGradeSortUp(grade.id, grade.schoolId)} /> <FaSortDown onClick = {() => onGradeSortDown(grade.id, grade.schoolId)} /> {showEditGrade ? <FaWindowClose onClick={() => setShowEditGrade(!showEditGrade)}/> : <FaEdit style={{color: 'green'}} onClick={() => setShowEditGrade(!showEditGrade)}/>} <FaTimes onClick = {() => onDeleteGrade(grade.id, grade.schoolId)} style={{ color: 'red', cursor: 'pointer'}}/>
            {showEditGrade && <EditGrade grade={grade} onEdit={editGrade} />}

        </li>
    )
}

export default Grade
