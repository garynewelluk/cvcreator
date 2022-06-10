import SamplePersonalDetails from "../models/samplecv/SamplePersonalDetails";
import SampleProfessionalProfile from "../models/samplecv/SampleProfessionalProfile";
import SampleHobbies from "../models/samplecv/SampleHobbies";
import SampleJobs from "../models/samplecv/SampleJobs";
import ResumeGenerator from "./ResumeGenerator";
import SampleReferences from "../models/samplecv/SampleReferences"; 
import SampleSkills from "../models/samplecv/SampleSkills";
import SampleSchools from "../models/samplecv/SampleSchools";

const SampleResumeGenerator = () => {

    return (
        <div className="page">
            <ResumeGenerator personalDetailsModel={SamplePersonalDetails} 
                         professionalProfileModel={SampleProfessionalProfile}
                         skillsModel={SampleSkills}
                         jobsModel={SampleJobs}
                         schoolsModel={SampleSchools}
                         hobbiesModel={SampleHobbies}
                         referencesModel={SampleReferences}
                         loadFile={false}
                         />
        </div>
    )
}

export default SampleResumeGenerator
