import PersonalDetails from "../components/PersonalDetails";
import ProfessionalProfile from "../components/ProfessionalProfile";
import Skills from "../components/Skills";
import Jobs from "../components/Jobs";
import Schools from "../components/Schools";
import Hobbies from "../components/Hobbies";
import References from "../components/References";
import SaveCV from "./SaveCV";
import LoadCV from "./LoadCV";
import { FaSave, FaWindowClose } from 'react-icons/fa'
import { useState } from 'react'
import { useRef } from 'react';

const ResumeGenerator = ({ personalDetailsModel, professionalProfileModel, skillsModel, jobsModel, schoolsModel, hobbiesModel, referencesModel, loadFile}) => {
    const [showSave, setShowSave] = useState( false )
    const [showLoad, setShowLoad] = useState( loadFile )
    const personalDetailsRef = useRef();
    const professionalProfileRef = useRef();
    const skillsRef = useRef();
    const jobsRef = useRef();
    const schoolsRef = useRef();
    const hobbiesRef = useRef();
    const referencesRef = useRef();

    const LoadFile = async (personalDetails, professionalProfile, skills, jobs,schools, hobbies, references) => {
        personalDetailsRef.current.setPersonalDetails(personalDetails)
        professionalProfileRef.current.setProfessionalProfile(professionalProfile)
        skillsRef.current.setSkills(skills)
        jobsRef.current.setJobs(jobs)
        schoolsRef.current.setSchools(schools)
        hobbiesRef.current.setHobbies(hobbies)
        referencesRef.current.setReferences(references)
    }   
  
    return (
        <div>
            <div className="actions noprint">
                <div className="action">
                {showSave ? <a className="noprint" onClick={() => setShowSave(!showSave)}><FaWindowClose /> Hide</a>: <a className="noprint" onClick={() => setShowSave(!showSave)}> <FaSave style={{color: 'green'}} /> Download CV</a>} 
                {showSave && <SaveCV onShowSave={setShowSave}
                                    personalDetailsModel={personalDetailsRef.current.getPersonalDetails()}
                                    professionalProfileModel={professionalProfileRef.current.getProfessionalProfile()}
                                    skillsModel={skillsRef.current.getSkills()}
                                    jobsModel={jobsRef.current.getJobs()}
                                    schoolsModel={schoolsRef.current.getSchools()}
                                    hobbiesModel={hobbiesRef.current.getHobbies()}
                                    referencesModel={referencesRef.current.getReferences()}
                                    />}
                </div>
            </div>
            <div className="noprint">
                {showLoad && <LoadCV onShowLoad={setShowLoad}
                                    onLoadFile={LoadFile}/>}
            </div>
            {!showLoad && <PersonalDetails ref={personalDetailsRef} personalDetailsModel={personalDetailsModel}/> }            
            {!showLoad && <ProfessionalProfile ref={professionalProfileRef} professionalProfileModel={professionalProfileModel}/>}
            {!showLoad && <Skills ref={skillsRef} skillsModel={skillsModel}/> }
            {!showLoad && <Jobs ref={jobsRef} jobsModel={jobsModel}/>}
            {!showLoad && <Schools ref={schoolsRef} schoolsModel={schoolsModel}/>}
            {!showLoad && <Hobbies ref={hobbiesRef} hobbiesModel={hobbiesModel}/>}
            {!showLoad && <References ref={referencesRef} referencesModel={referencesModel}/>}
        </div>
    )
}

export default ResumeGenerator
