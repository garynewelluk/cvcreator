import Grades from "./Grades"
import { FaEdit, FaWindowClose, FaTimes, FaPlus, FaSortUp, FaSortDown, FaBookOpen } from 'react-icons/fa'
import { useState } from "react"
import EditSchool from "./EditSchool"

const School = ({school, onEdit, onDelete, onAddGrade, onEditGrade, onDeleteGrade, onSortUp, onSortDown, onGradeSortUp, onGradeSortDown, setTogglePageBreak}) => {
    const [showEditSchool, setShowEditSchool] = useState(
        false
    )

    const [showAddGrade, setShowAddGrade] = useState(false)

    const addGrade = async (schoolId, subject, result) => {
        onAddGrade({schoolId,subject,result})
        setShowAddGrade(false)
    }
    
    return (
        <div className="school">
            <h2>{school.schoolName} <FaSortUp onClick = {() => onSortUp(school.id)} /> <FaSortDown onClick = {() => onSortDown(school.id)} /> {showEditSchool ? <FaWindowClose onClick={() => setShowEditSchool(!showEditSchool)}/> : <FaEdit style={{color: 'green'}} onClick={() => setShowEditSchool(!showEditSchool)} />} <FaTimes onClick = {() => onDelete(school.id)} style={{ color: 'red', cursor: 'pointer'}}/> {school.pageBreakAfter ? <FaBookOpen style={{color: 'green'}} onClick={() => setTogglePageBreak(school)} /> : <FaBookOpen style={{color: 'red'}} onClick={() => setTogglePageBreak(school)} /> }</h2>
            <h3>({school.startDate} - {school.endDate})</h3>
            <p>{school.qualification}</p>
            {showEditSchool && <EditSchool school={school} onEdit={onEdit} />}
            <h3 className={school.grades.length === 0 ? "noprint" : "print"}>Grades {showAddGrade ? <FaWindowClose onClick={() => setShowAddGrade(!showAddGrade)}/> : <FaPlus style={{color: 'green'}} onClick={() => setShowAddGrade(!showAddGrade)} />}</h3>
            {(school.grades.length > 0 || {showAddGrade}) && <Grades school={school} showAddGrade={showAddGrade} onAdd={addGrade} onEditGrade={onEditGrade} onDeleteGrade={onDeleteGrade} onGradeSortUp={onGradeSortUp} onGradeSortDown={onGradeSortDown}/>}
            {school.pageBreakAfter && <div className="pagebreakafter" />}
        </div>
    )
}

export default School
