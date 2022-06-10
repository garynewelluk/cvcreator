import { FaEdit, FaPlus, FaTimes, FaSortUp, FaSortDown, FaSave, FaWindowClose, FaBookOpen } from 'react-icons/fa'
import PersonalDetailsSample  from './images/PersonalDetailsSample.PNG'
import PersonalDetailsSampleEdit  from './images/PersonalDetailsSampleEdit.PNG'
const StartPage = () => {

    return (
        <div className="StartPage">
            <h1 className="MainHeader">Free Online CV Generator</h1>            
            <div id="Main">
                <a href="/cvcreator/CreateCV">
                <div className="box">
                    <h1>Create A CV From Scratch</h1>
                    <p>
                        Click here to create a CV.
                    </p>
                    <p>
                        All the entries are blank, leaving a clean canvas to write the CV as you see fit.
                    </p>
                </div>
                </a>
                <a href="/cvcreator/SampleResumeGenerator">
                <div className="box">
                    <h1>Create A CV Using Sample Data</h1>
                    <p>
                        Click here to create a CV.
                    </p>
                    <p>
                        Sample data has been added to give you hints on how to fill in the various sections.
                    </p>
                </div>
                </a>
                <a href="/cvcreator/LoadCV">
                <div className="box">
                    <h1>Load A CV</h1>
                    <p>
                        Click here to load a CV created previously using this tool.
                    </p>
                </div>
                </a>
            </div>
            <div id="Main">
                <a href="/cvcreator/UserGuide">
                <div className="box">
                    <h1>User Guide</h1>
                    <p>
                        Click here for a user guide to help you fill in your CV using the CV Creator.
                    </p>
                </div>
                </a>
                <a href="/About">
                <div className="box">
                    <h1>About Free Online CV Generator</h1>
                    <p>
                        Click here for more information about this tool and how your personal information isn't used.
                    </p>
                </div>
                </a>
                <div className="box">
                </div>
            </div>            
        </div>
    )
}

export default StartPage
