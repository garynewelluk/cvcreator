import { FaEdit, FaPlus, FaTimes, FaSortUp, FaSortDown, FaSave, FaWindowClose, FaBookOpen } from 'react-icons/fa'
import PersonalDetailsSample  from './images/PersonalDetailsSample.PNG'
import PersonalDetailsSampleEdit  from './images/PersonalDetailsSampleEdit.PNG'
import ProfessionalProfileSample from './images/ProfessionalProfileSample.PNG'
import ProfessionalProfileSampleEdit from './images/ProfessionalProfileSampleEdit.PNG'
import SkillsSampleAdd from './images/KeySkillsSampleAdd.PNG';
import WorkExperienceSample from './images/WorkExperienceSample.PNG';
import WorkExperienceSampleAdd from './images/WorkExperienceSampleAdd.PNG';
import KeyResponsibilitiesAdd from './images/KeyResponsibilityAdd.PNG';
import EducationSample from './images/EducationSample.PNG';
import EducationSampleAdd from './images/EducationSampleAdd.PNG';
import AddGrade from './images/AddGrade.PNG';
import HobbiesSample from './images/HobbiesSample.PNG';
import HobbiesSampleEdit from './images/HobbiesSampleEdit.PNG';
import ReferencesSample from './images/ReferencesSample.PNG';
import ReferencesSampleEdit from './images/ReferencesSampleEdit.PNG';
import SaveCVData from './images/SaveCVData0.PNG';
import SaveCVDataEdit from './images/SaveCVData.PNG';
import Printing from './images/printing.PNG';
import PrintPreview from './images/printing2.PNG';

const UserGuide = () => {

    return (
        <div className="HelpPage">
            <h1 className="MainHeader">How To Use The Generator</h1>
            <h2>Introduction</h2>
            <div className="Instructions">
                <p>The Online CV Creator is a WYSIWYG (What you see is what you get) editor.</p>
                <p>There are 7 sections that you can fill in on your CV</p>
                <ol>
                    <li>Personal Details - Name, Address, Contact Information, Job Title</li>
                    <li>Professional Profile - A description of who you are and what you are looking for</li>
                    <li>Skills - A list of the key skills that you possess</li>
                    <li>Work Experience - A list of the places you have worked and key responsibilities</li>
                    <li>Education - A list of schools, colleges, universities attended and qualifications achieved</li>
                    <li>Hobbies - A place for you to enter hobbies that help to accentuate your CV</li>
                    <li>References - The names of people who are willing to provide you with a reference</li>
                </ol>
                <p>If you do not wish to have a section appear on your CV then leave the contents of that section blank. (i.e. if you do not want to show hobbies then do not enter any and this section will be ignored)</p>
                <h2>Key Icons</h2>
                The following icons appear on the CV editor:
                <ul>
                    <li><FaEdit style={{color: 'green'}}/> - Used to edit a section of text</li>
                    <li><FaPlus style={{color: 'green'}}/> - Add a new component such as a skill, job, key responsibility etc</li>
                    <li><FaTimes style={{color: 'green'}}/> - Remove a component such as a skill, job, key responsibility etc</li>
                    <li><FaSortUp style={{color: 'green'}}/> - Change the sort order such as a skill, job, key responsibility etc by moving it up the list</li>
                    <li><FaSortDown style={{color: 'green'}}/> - Change the sort order such as a skill, job, key responsibility etc by moving it down the list</li>
                    <li><FaBookOpen style={{color: 'green'}}/> - Throw a page break after the section</li>
                    <li><FaBookOpen style={{color: 'red'}}/> - Do Not Throw a page break after the section</li>
                    <li><FaWindowClose style={{color: 'red'}}/> - Close the editor for a particular section</li>
                    <li><FaSave style={{color: 'green'}}/> - Download the CV as a JSON file, to enable you to load and edit in future</li>
                </ul>
                <h2>Editing Personal Details</h2>
                <img src={PersonalDetailsSample}/>
                <p>To edit the personal details click the <FaEdit style={{color: 'green'}}/> icon.</p>
                <img src={PersonalDetailsSampleEdit}/>
                <p>Enter your name, role, address, telephone number and email address.</p>
                <p>All of the fields are free text and have no validation.</p>
                <p>Click "Save Personal Details" to update your CV.</p>
                <h2>Editing Personal Profile</h2>
                <img src={ProfessionalProfileSample}/>
                <p>The personal profile is used to give a brief introduction to who you are, what you are and what you are looking for</p>.
                <p>To edit the professional profile click the <FaEdit style={{color: 'green'}}/> icon.</p>
                <img src={ProfessionalProfileSampleEdit}/>
                <p>Enter the text you wish to display as your professional profile and click "Save Profile".</p>                 
                <h2>Skills</h2>
                <p>Add a list of your key skills. This is very useful for technical CVs such as software development where you can list your main programming credentials.</p>
                <img src={SkillsSampleAdd}/>
                <p>To add a skill click on the <FaPlus style={{color: 'green'}}/> icon, enter the skill and then click "Save Skill".</p>
                <p>To remove a skill click on the <FaTimes style={{color: 'green'}}/> icon next to the skill you wish to remove.</p>
                <p>To move a skill higher or lower in the list click on the <FaSortUp style={{color: 'green'}}/> and <FaSortDown style={{color: 'green'}}/> icons.</p>
                <h2>Work Experience</h2>
                <img src={WorkExperienceSample}/>
                <p>The work experience section of the CV is broken into a series of roles that you have performed during your working career.</p>
                <p>Each job is split into an overall description of where you worked and when you worked there, followed by a list of key responsibilities.</p>
                <img src={WorkExperienceSampleAdd}/>
                <p>To add a role click on the <FaPlus style={{color: 'green'}}/> icon next to "Employment History" and then fill in the start and end date for the role, the company you worked for,
                whether you were a permanent or temporary staff member, the position you held (Role), the location of the role and an outline of what you were employed to do.    
                </p>
                <p>Click "Save Job" to save the role.</p>               
                <p>To amend a role, click on the <FaEdit style={{color: 'green'}}/> icon and amend the details as required.</p>
                <p>To delete a role, click on the <FaTimes style={{color: 'green'}}/> icon next to the job you wish to remove.</p>
                <p>To move a role higher or lower in the list click on the <FaSortUp style={{color: 'green'}}/> and <FaSortDown style={{color: 'green'}}/> icons.</p>
                <p>If you want to throw a page break after a role, click on the <FaBookOpen style={{color: 'red'}}/> icon. Click it again to remove the break.</p>
                <h3>Key Responsibilities</h3>
                <img src={KeyResponsibilitiesAdd}/>
                <p>To add a list of key responsibilities to a role click on the <FaPlus style={{color: 'green'}}/> icon next to the words "Key Responsibilities" for the role you wish to 
                add the responsibilities to.</p>
                <p>To delete a responsibility, click on the <FaTimes style={{color: 'green'}}/> icon.</p>
                <p>To move a responsibility higher or lower in the list click on the <FaSortUp style={{color: 'green'}}/> and <FaSortDown style={{color: 'green'}}/> icons.</p>
                <p>If you want to throw a page break after a responsibility, click on the <FaBookOpen style={{color: 'red'}}/> icon. Click it again to remove the break.</p>
                <h2>Education</h2>
                <img src={EducationSample}/>
                <p>The education section is where you list all of the schools, colleges and universities you attended as well as the qualifications achieved and grades received.</p>
                <img src={EducationSampleAdd}/>
                <p>To add a place of education click on the <FaPlus style={{color: 'green'}}/> icon next to "Education".</p>
                <p>Enter the start and end date for the years you attended the school, the name of the school, location and the overall qualifications achieved.</p>
                <p>Click Save school to add it to your CV.</p>
                <p>To amend a school, click on the <FaEdit style={{color: 'green'}}/> icon and amend the details as required.</p>
                <p>To delete a school, click on the <FaTimes style={{color: 'green'}}/> icon next to the school you wish to remove.</p>
                <p>To move a school higher or lower in the list click on the <FaSortUp style={{color: 'green'}}/> and <FaSortDown style={{color: 'green'}}/> icons.</p>
                <p>If you want to throw a page break after a role, click on the <FaBookOpen style={{color: 'red'}}/> icon. Click it again to remove the break.</p>
                <h3>Grades</h3>
                <img src={AddGrade}/>
                <p>To add grades for a particular qualification click on the <FaPlus style={{color: 'green'}}/> next to "Grades".</p>
                <p>To delete a grade, click on the <FaTimes style={{color: 'green'}}/> icon.</p>
                <p>To move a grade higher or lower in the list click on the <FaSortUp style={{color: 'green'}}/> and <FaSortDown style={{color: 'green'}}/> icons.</p>
                <p>If you want to throw a page break after a grade, click on the <FaBookOpen style={{color: 'red'}}/> icon. Click it again to remove the break.</p>
                <h2>Hobbies</h2>
                <img src={HobbiesSample}/>
                <p>To add a list of your hobbies click on the <FaEdit style={{color: 'green'}}/> icon next to the word "Hobbies"</p>.
                <img src={HobbiesSampleEdit}/>
                <p>Enter your hobbies in the text box provided and click "Save Hobbies".</p>
                <h2>References</h2>
                <img src={ReferencesSample}/>
                <p>To add references to your CV, click on the <FaEdit style={{color: 'green'}}/> icon next to the word "References"</p>.
                <img src={ReferencesSampleEdit}/>
                <p>Enter your references in the text box provided and click "Save References".</p>
                <h2>Download Your CV</h2>
                <img src={SaveCVData}/>
                <p>If you wish to use this tool again in the future and you don't want to enter all the details again, click on the <FaSave/> icon at the top of the screen.</p>
                <img src={SaveCVDataEdit}/>
                <p>Enter a file name and click on "Download the file".</p>
                <p>The file will be downloaded to your downloads folder. You should copy this to somewhere more permanent such as your documents folder.</p> 
                <p>Note that this is a settings file only and can only be used to load the data back into the CV when you use the tool again.</p>
                <h2>Print your CV</h2>
                <img src={Printing}/>
                <p>If you are using Chrome click on the icon with three vertical dots in the top right corner or click on the CTRL and "P" keys at the same time.</p>
                <img src={PrintPreview}/>
                <p>You can now see how your CV will look when you print the file. At this point you can go back to editing your CV to add the page breaks in the relevant places.</p> 
                <p>To print to a printer change the destination to the physical printer you wish to print to.</p>
                <p>To save the CV as a PDF, set the destination to "Microsoft print to PDF" (or the equivalent for your OS) and click "Print".</p>
                <p>A file dialog box will appear. Navigate to your documents folder, enter a name for the CV and click "Save".</p>

            </div>
        </div>
    )
}

export default UserGuide
