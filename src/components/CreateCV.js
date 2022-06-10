import ResumeGenerator from "./ResumeGenerator";

const CreateCV = () => {

    const personalDetails = {
        name: '',
        address: '',
        telephone: '',
        email: '',
        role: ''
    }    

    const professionalProfile = {
        profile: ''
    }

    const skills = [
    ]

    const jobs = [
    ]

    const schools = [
    ]

    const hobbies = {
        hobby: ''
    }

    const references = {
        details: ''
    }

    return (
        <div className="page">
            <ResumeGenerator personalDetailsModel={personalDetails} 
                         professionalProfileModel={professionalProfile}
                         skillsModel={skills}
                         jobsModel={jobs}
                         schoolsModel={schools}
                         hobbiesModel={hobbies}
                         referencesModel={references}
                         loadFile={false}
                         />

        </div>
    )
}

export default CreateCV
