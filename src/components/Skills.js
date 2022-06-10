import Skill from "./Skill"
import { FaPlus, FaWindowClose } from 'react-icons/fa'
import { useState } from "react"
import AddSkill from "../components/AddSkill";
import { useImperativeHandle, forwardRef } from "react";

const Skills = forwardRef(({ skillsModel },_ref) => {
    const [skills, setSkills] = useState(skillsModel)

    const addSkills = async (skill) => {
        let skillId = 1
        let sortOrder = 1
        console.log(skills.length)
        if (skills.length > 0)
        {
            skillId = Math.max(...skills.map(skill => skill.skillId)) + 1
            sortOrder = Math.max(...skills.map(skill => skill.sortOrder)) + 1
        }
        const newSkill = { skillId, ...skill }    
        newSkill.sortOrder = sortOrder

        setSkills([...skills, newSkill])
        setShowAddSkills(false)
        
    }
    
    const sortSkillUp = async (id) => {
        const skillToMoveUp = skills.find((skill) => skill.skillId === id) 
        const reducer = (previousValue, currentValue) => currentValue.sortOrder >= skillToMoveUp.sortOrder ? previousValue : currentValue
        const skillToMoveDown = skills.reduce(reducer)
    
        if (skillToMoveDown !== undefined)
        {
            let skillDownSortOrder = skillToMoveUp.sortOrder
            skillToMoveUp.sortOrder = skillToMoveDown.sortOrder
            skillToMoveDown.sortOrder = skillDownSortOrder

            setSkills(skills.map((skill) => skill.skillId === skillToMoveUp.skillId ? {
            skillId: skillToMoveUp.skillId,
            skillName: skillToMoveUp.skillName,
            sortOrder: skillToMoveUp.sortOrder
            } : skill))

            setSkills(skills.map((skill) => skill.skillId === skillToMoveDown.skillId ? {
            skillId: skillToMoveDown.skillId,
            skillName: skillToMoveDown.skillName,
            sortOrder: skillToMoveDown.sortOrder
            } : skill))

        }
    }
    
    const sortSkillDown = async (id) => {
        const skillToMoveDown = skills.find((skill) => skill.skillId === id)
        const skillToMoveUp = skills.find((skill) => skill.sortOrder > skillToMoveDown.sortOrder)

        if (skillToMoveUp !== undefined)
        {
            let skillDownSortOrder = skillToMoveUp.sortOrder
            skillToMoveUp.sortOrder = skillToMoveDown.sortOrder
            skillToMoveDown.sortOrder = skillDownSortOrder

            setSkills(skills.map((skill) => skill.skillId === skillToMoveUp.skillId ? {
            skillId: skillToMoveUp.skillId,
            skillName: skillToMoveUp.skillName,
            sortOrder: skillToMoveUp.sortOrder
            } : skill))
        
            setSkills(skills.map((skill) => skill.skillId === skillToMoveDown.skillId ? {
            skillId: skillToMoveDown.skillId,
            skillName: skillToMoveDown.skillName,
            sortOrder: skillToMoveDown.sortOrder
            } : skill))
        
        }
    }
    
    const [showAddSkills, setShowAddSkills] = useState( false )
    
    const deleteSkill = async (id) => {
        setSkills(skills.filter((skill) => skill.skillId !== id))
    }
    
    useImperativeHandle(_ref, () => ({
        getSkills: () => {
            return skills
        },
        setSkills: (value) => {
            setSkills(value)
        }
    }))

    return (
        <div className={ skills.length === 0 ? "noprint" : "print"}>
            <h1>Key Skills {showAddSkills ? <FaWindowClose onClick={() => setShowAddSkills(!showAddSkills)}/> : <FaPlus style={{color: 'green'}} onClick={() => setShowAddSkills(!showAddSkills)} />}</h1>
            <ul>
            {skills.sort((a,b) => a.sortOrder > b.sortOrder ? 1 : -1).map((skill) => (
                <Skill key={skill.skillId} skill={skill} onDelete={deleteSkill} onSortUp={sortSkillUp} onSortDown={sortSkillDown}/>
            ))}
            </ul>
            {showAddSkills && <AddSkill onAdd={addSkills} />}
        </div>
    )
})

export default Skills