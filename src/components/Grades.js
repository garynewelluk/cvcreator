import Grade from "./Grade"
import AddGrade from "./AddGrade"
const Grades = ({school, showAddGrade, onAdd, onEditGrade, onDeleteGrade, onGradeSortUp, onGradeSortDown }) => {
    return (
        <>
            <ul>
            {school.grades.sort((a,b) => a.sortOrder > b.sortOrder ? 1 : -1).map((grade) => (
                <Grade key={grade.id} grade={grade} onEditGrade={onEditGrade} onDeleteGrade={onDeleteGrade} onGradeSortUp={onGradeSortUp} onGradeSortDown={onGradeSortDown} />
            ))}
            {showAddGrade && <AddGrade onAdd={onAdd} school={school}/>}

            </ul>
        </> 
    )
}

export default Grades
