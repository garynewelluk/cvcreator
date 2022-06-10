import AddKeyResponsibility from "./AddKeyResponsibility"
import KeyResponsibility from "./KeyResponsibility"

const KeyResponsibilities = ({job, showAddKeyResponsibility, onAdd, onEditKeyResponsibility, onDeleteKeyResponsibility, onKeyResponsibilitySortUp, onKeyResponsibilitySortDown }) => {
    return (
        <div className={ job.keyResponsibilities.length === 0 ? "noprint" : "print"}>
            {job.keyResponsibilities.sort((a,b) => a.sortOrder > b.sortOrder ? 1 : -1).map((keyResponsibility) => (
                <KeyResponsibility key={keyResponsibility.id} keyResponsibility={keyResponsibility}  onEditKeyResponsibility={onEditKeyResponsibility} onDeleteKeyResponsibility={onDeleteKeyResponsibility} onKeyResponsibilitySortUp={onKeyResponsibilitySortUp} onKeyResponsibilitySortDown={onKeyResponsibilitySortDown}/>
            ))}
            {showAddKeyResponsibility && <AddKeyResponsibility onAdd={onAdd} job={job}/>}

        </div>    
    )
}

export default KeyResponsibilities
