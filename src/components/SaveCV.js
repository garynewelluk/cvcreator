import { useState } from 'react'

const SaveCV = ({onShowSave, personalDetailsModel, professionalProfileModel, skillsModel, jobsModel, schoolsModel, hobbiesModel, referencesModel}) => {
    const [fileName, setFileName] = useState("yourCV.json")

    const download = (e) => {
        e.preventDefault()

        const CVModel = {
            personalDetails: personalDetailsModel,
            professionalProfile: professionalProfileModel,
            skills: skillsModel,
            jobs: jobsModel,
            schools: schoolsModel,
            hobbies: hobbiesModel,
            references: referencesModel
        }
        const data = JSON.stringify(CVModel,undefined,4)
        var blob = new Blob([data], {type: 'text/json'}),
            e = document.createEvent('MouseEvents'),
            a = document.createElement('a')
        
        a.download = fileName
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0,0,0,0,0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
        onShowSave(false)
    }
    
    return (        
        <div>
            <form className='edit-form'>
                <div className='form-control'>
                    <label>File Name</label>
                    <input type="text" placeholder="fileName" value={fileName} onChange={(e) => setFileName(e.target.value)} />
                </div>
                <button className='btn btn-block' onClick={download}>
                    Download the file
                </button>
                          
            </form>
        </div>
    )
}

export default SaveCV
