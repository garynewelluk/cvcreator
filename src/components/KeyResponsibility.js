
import { useState } from "react"
import EditKeyResponsibility from './EditKeyResponsibility'
import { FaEdit, FaWindowClose, FaTimes, FaSortUp, FaSortDown } from 'react-icons/fa'

const KeyResponsibility = ({keyResponsibility, onEditKeyResponsibility, onDeleteKeyResponsibility, onKeyResponsibilitySortUp, onKeyResponsibilitySortDown      }) => {
    const [showEditKeyResponsibility, setShowEditKeyResponsibility] = useState(
        false
    )

    const editKeyResponsibility = async (id, jobId, responsibility, sortOrder) => {
        onEditKeyResponsibility({id, jobId, responsibility, sortOrder})
        setShowEditKeyResponsibility(false)
    }

    return (
        <div>
            <li>
                {keyResponsibility.responsibility} <FaSortUp onClick = {() => onKeyResponsibilitySortUp(keyResponsibility.id, keyResponsibility.jobId)} /> <FaSortDown onClick = {() => onKeyResponsibilitySortDown(keyResponsibility.id, keyResponsibility.jobId)} /> {showEditKeyResponsibility ? <FaWindowClose onClick={() => setShowEditKeyResponsibility(!showEditKeyResponsibility)}/> : <FaEdit style={{color: 'green'}} onClick={() => setShowEditKeyResponsibility(!showEditKeyResponsibility)}/>} <FaTimes onClick = {() => onDeleteKeyResponsibility(keyResponsibility.id, keyResponsibility.jobId)} style={{ color: 'red', cursor: 'pointer'}}/>
                {showEditKeyResponsibility && <EditKeyResponsibility keyResponsibility={keyResponsibility} onEdit={editKeyResponsibility} />}
            </li>
        </div>    
    )
}

export default KeyResponsibility
