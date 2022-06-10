import { FaTimes, FaSortUp, FaSortDown } from 'react-icons/fa'

const Skill = ({skill, onDelete, onSortUp, onSortDown}) => {
    return (
        <div>
            <li key="{skill.skillId}">{skill.skillName} <FaSortUp onClick = {() => onSortUp(skill.skillId)} /> <FaSortDown onClick = {() => onSortDown(skill.skillId)} /> <FaTimes onClick = {() => onDelete(skill.skillId)} style={{ color: 'red', cursor: 'pointer'}}/></li>
        </div>
    )
}

export default Skill
