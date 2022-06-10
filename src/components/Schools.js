import School from "./School"
import { FaPlus, FaWindowClose } from 'react-icons/fa'
import AddSchool from "../components/AddSchool"
import { useState } from "react"
import { useImperativeHandle, forwardRef } from "react"

const Schools = forwardRef(({schoolsModel}, _ref) => {
    const [schools, setSchools] = useState(schoolsModel)

    const [showAddSchools, setShowAddSchools] = useState( false )

    const addSchools = async (school) => {
      
      const id = Math.max(...schools.map(school => school.id)) + 1
      const newSchool = { id, ...school }
      if (newSchool.id === null || !Number.isFinite(newSchool.id))
      {
        newSchool.id = 1
      }
      newSchool.sortOrder = Math.max(...schools.map(school => school.sortOrder)) + 1
      if (newSchool.sortOrder === null || !Number.isFinite(newSchool.sortOrder))
      {
        newSchool.sortOrder = 1
      }
      newSchool.grades = []
      setSchools([...schools, newSchool])
      setShowAddSchools(false)
    }
  
    // edit school
    const editSchool = async (amendedSchool) => {
      setSchools(schools.map((school) => school.id === amendedSchool.id ? {
        startDate: amendedSchool.startDate,
        endDate: amendedSchool.endDate,
        schoolName: amendedSchool.schoolName,
        location: amendedSchool.location,
        qualification: amendedSchool.qualification,
        grades: amendedSchool.grades,
        sortOrder: amendedSchool.sortOrder,
        pageBreakAfter: amendedSchool.pageBreakAfter
      } : school))
    }
  
    // delete school
    const deleteSchool = async (id) => {
      setSchools(schools.filter((school) => school.id !== id))
    }
  
    const toggleSchoolPageBreak = async (amendedSchool) => {
      setSchools(schools.map((school) => school.id === amendedSchool.id ? {
        startDate: amendedSchool.startDate,
        endDate: amendedSchool.endDate,
        schoolName: amendedSchool.schoolName,
        location: amendedSchool.location,
        qualification: amendedSchool.qualification,
        grades: amendedSchool.grades,
        sortOrder: amendedSchool.sortOrder,
        pageBreakAfter: !amendedSchool.pageBreakAfter
      } : school))
    }
  
    const sortSchoolUp = async (id) => {
      const schoolToMoveUp = schools.find((school) => school.id === id) 
      const reducer = (previousValue, currentValue) => currentValue.sortOrder >= schoolToMoveUp.sortOrder ? previousValue : currentValue
      const schoolToMoveDown = schools.reduce(reducer)
     
      if (schoolToMoveDown !== undefined)
      {
        let schoolDownSortOrder = schoolToMoveUp.sortOrder
        schoolToMoveUp.sortOrder = schoolToMoveDown.sortOrder
        schoolToMoveDown.sortOrder = schoolDownSortOrder
  
        setSchools(schools.map((school) => school.id === schoolToMoveUp.id ? {
          id: schoolToMoveUp.id,
          schoolName: schoolToMoveUp.schoolName,
          location: schoolToMoveUp.location,
          startDate: schoolToMoveUp.startDate,
          endDate: schoolToMoveUp.endDate,
          qualification: schoolToMoveUp.qualification,
          grades: schoolToMoveUp.grades,
          sortOrder: schoolToMoveUp.sortOrder,
          pageBreakAfter: schoolToMoveUp.pageBreakAfter
        } : school))
  
        setSchools(schools.map((school) => school.id === schoolToMoveDown.id ? {
          id: schoolToMoveDown.id,
          schoolName: schoolToMoveDown.schoolName,
          location: schoolToMoveDown.location,
          startDate: schoolToMoveDown.startDate,
          endDate: schoolToMoveDown.endDate,
          qualification: schoolToMoveDown.qualification,
          grades: schoolToMoveDown.grades,
          sortOrder: schoolToMoveDown.sortOrder,
          pageBreakAfter: schoolToMoveDown.pageBreakAfter
        } : school))
      }
    }
  
    const sortSchoolDown = async (id) => {
      const schoolToMoveDown = schools.find((school) => school.id === id)
      const schoolToMoveUp = schools.find((school) => school.sortOrder > schoolToMoveDown.sortOrder)
  
      if (schoolToMoveUp !== undefined)
      {
        let schoolDownSortOrder = schoolToMoveUp.sortOrder
        schoolToMoveUp.sortOrder = schoolToMoveDown.sortOrder
        schoolToMoveDown.sortOrder = schoolDownSortOrder
  
        setSchools(schools.map((school) => school.id === schoolToMoveUp.id ? {
          id: schoolToMoveUp.id,
          schoolName: schoolToMoveUp.schoolName,
          location: schoolToMoveUp.location,
          startDate: schoolToMoveUp.startDate,
          endDate: schoolToMoveUp.endDate,
          qualification: schoolToMoveUp.qualification,
          grades: schoolToMoveUp.grades,
          sortOrder: schoolToMoveUp.sortOrder,
          pageBreakAfter: schoolToMoveUp.pageBreakAfter
        } : school))
  
        setSchools(schools.map((school) => school.id === schoolToMoveDown.id ? {
          id: schoolToMoveDown.id,
          schoolName: schoolToMoveDown.schoolName,
          location: schoolToMoveDown.location,
          startDate: schoolToMoveDown.startDate,
          endDate: schoolToMoveDown.endDate,
          qualification: schoolToMoveDown.qualification,
          grades: schoolToMoveDown.grades,
          sortOrder: schoolToMoveDown.sortOrder,
          pageBreakAfter: schoolToMoveDown.pageBreakAfter
        } : school))
      }
    }

    const addGrades = async (grade) => {
        const school = schools.find((school) => school.id === grade.schoolId)
        let amendedGrades = [];
        if (school.grades !== undefined)
        {
          amendedGrades = school.grades;
        }
        const id = Math.max(...amendedGrades.map(grade => grade.id)) + 1
        const newGrade = { id, ...grade }
        newGrade.sortOrder = Math.max(...amendedGrades.map(kr => kr.sortOrder)) + 1
        if (newGrade.id === null || !Number.isFinite(newGrade.id))
        {
          newGrade.id = 1
        }

        if (newGrade.sortOrder === null || !Number.isFinite(newGrade.sortOrder))
        {
          newGrade.sortOrder = 1
        }

        amendedGrades.push(newGrade)
    
        setSchools(schools.map((amendedschool) => school.id === amendedschool.id ? {
          id: amendedschool.id,
          startDate: amendedschool.startDate,
          endDate: amendedschool.endDate,
          schoolName: amendedschool.schoolName,
          location: amendedschool.location,
          qualification: amendedschool.qualification,
          grades: amendedschool.grades,
          sortOrder: amendedschool.sortOrder,
          pageBreakAfter: amendedschool.pageBreakAfter
        } : amendedschool))
    
    }
    
    const editGrade = async (grade) => {
        const school = schools.find((school) => school.id === grade.schoolId)
        let amendedGrades = school.grades    
        const index = amendedGrades.findIndex((k) => k.id === grade.id)
        
        amendedGrades = [...amendedGrades.slice(0,index), grade, ...amendedGrades.slice(index+1)]

        setSchools(schools.map((amendedschool) => school.id === amendedschool.id ? {
            id: amendedschool.id,
            startDate: amendedschool.startDate,
            endDate: amendedschool.endDate,
            schoolName: amendedschool.schoolName,
            location: amendedschool.location,
            qualification: amendedschool.qualification,
            grades: amendedGrades,
            sortOrder: amendedschool.sortOrder,
            pageBreakAfter: amendedschool.pageBreakAfter
        } : amendedschool))
    }
    
    const deleteGrade = async (id,schoolId) => {
        const school = schools.find((school) => school.id === schoolId)
        const amendedGrades = school.grades.filter((grade) => grade.id !== id)

        setSchools(schools.map((amendedschool) => school.id === amendedschool.id ? {
            id: amendedschool.id,
            startDate: amendedschool.startDate,
            endDate: amendedschool.endDate,
            schoolName: amendedschool.schoolName,
            location: amendedschool.location,
            qualification: amendedschool.qualification,
            grades: amendedGrades,
            sortOrder: amendedschool.sortOrder,
            pageBreakAfter: amendedschool.pageBreakAfter
        } : amendedschool))
    }
    
    const sortGradeUp = async (id, schoolId) => {
        console.log(schoolId)
        const school = schools.find((school) => school.id === schoolId)
        console.log(school.schoolName)
        let amendedGrades = school.grades    
        const gradeToMoveUp = school.grades.find((gr) => gr.id === id) 
        const reducer = (previousValue, currentValue) => currentValue.sortOrder >= gradeToMoveUp.sortOrder ? previousValue : currentValue
        const gradeToMoveDown = school.grades.reduce(reducer)
        
        if (gradeToMoveDown !== undefined)
        {
            let index = amendedGrades.findIndex((k) => k.id === gradeToMoveUp.id)    
            amendedGrades = [...amendedGrades.slice(0,index), gradeToMoveUp, ...amendedGrades.slice(index+1)]
            let gradeDownSortOrder = gradeToMoveUp.sortOrder
            gradeToMoveUp.sortOrder = gradeToMoveDown.sortOrder
            gradeToMoveDown.sortOrder = gradeDownSortOrder

            setSchools(schools.map((amendedschool) => amendedschool.id === school.id ? {
            id: amendedschool.id,
            schoolName: amendedschool.schoolName,
            location: amendedschool.location,
            startDate: amendedschool.startDate,
            endDate: amendedschool.endDate,
            qualification: amendedschool.qualification,
            grades: amendedGrades,
            sortOrder: amendedschool.sortOrder,
            pageBreakAfter: amendedschool.pageBreakAfter
            } : amendedschool))

            index = amendedGrades.findIndex((k) => k.id === gradeToMoveDown.id)    
            amendedGrades = [...amendedGrades.slice(0,index), gradeToMoveDown, ...amendedGrades.slice(index+1)]

            setSchools(schools.map((amendedschool) => amendedschool.id === school.id ? {
            id: amendedschool.id,
            schoolName: amendedschool.schoolName,
            location: amendedschool.location,
            startDate: amendedschool.startDate,
            endDate: amendedschool.endDate,
            qualification: amendedschool.qualification,
            grades: amendedGrades,
            sortOrder: amendedschool.sortOrder,
            pageBreakAfter: amendedschool.pageBreakAfter
            } : amendedschool))
        }
    }
    
    const sortGradeDown = async (id, schoolId) => {

        const school = schools.find((school) => school.id === schoolId)

        let amendedGrades = school.grades    

        const gradeToMoveDown = school.grades.find((kr) => kr.id === id)

        const gradeToMoveUp = school.grades.find((kr) => kr.sortOrder > gradeToMoveDown.sortOrder)

        if (gradeToMoveUp !== undefined)
        {
            let index = amendedGrades.findIndex((k) => k.id === gradeToMoveUp.id)    
            amendedGrades = [...amendedGrades.slice(0,index), gradeToMoveUp, ...amendedGrades.slice(index+1)]
            let gradeDownSortOrder = gradeToMoveUp.sortOrder
            gradeToMoveUp.sortOrder = gradeToMoveDown.sortOrder
            gradeToMoveDown.sortOrder = gradeDownSortOrder

            setSchools(schools.map((amendedschool) => school.id === amendedschool.id ? {
            id: amendedschool.id,
            schoolName: amendedschool.schoolName,
            location: amendedschool.location,
            startDate: amendedschool.startDate,
            endDate: amendedschool.endDate,
            qualification: amendedschool.qualification,
            grades: amendedGrades,
            sortOrder: amendedschool.sortOrder,
            pageBreakAfter: amendedschool.pageBreakAfter
            } : amendedschool))

            index = amendedGrades.findIndex((k) => k.id === gradeToMoveDown.id)    
            amendedGrades = [...amendedGrades.slice(0,index), gradeToMoveDown, ...amendedGrades.slice(index+1)]

            setSchools(schools.map((amendedschool) => amendedschool.id === school.id ? {
            id: amendedschool.id,
            schoolName: amendedschool.schoolName,
            location: amendedschool.location,
            startDate: amendedschool.startDate,
            endDate: amendedschool.endDate,
            qualification: amendedschool.qualification,
            grades: amendedGrades,
            sortOrder: amendedschool.sortOrder,
            pageBreakAfter: amendedschool.pageBreakAfter
            } : amendedschool))
        }
    }
    
    useImperativeHandle(_ref, () => ({
        getSchools: () => {
            return schools
        },
        setSchools: (value) => {
          setSchools(value)
        }
    }))

    return (
        <div className={ schools.length === 0 ? "noprint" : "print"}>
            <h1>Education {showAddSchools ? <FaWindowClose onClick={() => setShowAddSchools(!showAddSchools)}/> : <FaPlus style={{color: 'green'}} onClick={() => setShowAddSchools(!showAddSchools)} />}</h1>
            {showAddSchools && <AddSchool onAdd={addSchools}/>}

            {schools.sort((a,b) => a.sortOrder > b.sortOrder ? 1 : -1).map((school) => (
                <School key={school.id} school={school} onEdit={editSchool} onDelete={deleteSchool} onAddGrade={addGrades} onEditGrade={editGrade} onDeleteGrade={deleteGrade} onSortUp={sortSchoolUp} onSortDown={sortSchoolDown} onGradeSortUp={sortGradeUp} onGradeSortDown={sortGradeDown} setTogglePageBreak={toggleSchoolPageBreak}/>
            ))}
        </div>    
    )
})

export default Schools
