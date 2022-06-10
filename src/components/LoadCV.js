const LoadCV = ({onShowLoad,onLoadFile}) => {

    const uploadFile = (e) => {
        e.preventDefault()
        
        const fileReader = new FileReader()
        fileReader.readAsText(e.target.files[0],"UTF-8")
        fileReader.onload = e => {
            var obj = JSON.parse(e.target.result)
           
            onShowLoad(false)
            onLoadFile(obj.personalDetails, obj.professionalProfile, obj.skills, obj.jobs, obj.schools, obj.hobbies, obj.references)
        }

    }

    return (
        <div class="loadCV">
            <h1>Load an existing CV</h1>
            <p>
                To be able to load an existing CV you must have previously created a CV using this tool and saved it.
            </p>
            <p>
                Click on the "Choose File" button and navigate to the CV you wish to load.
            </p>
            <form className='edit-form'>
                <div className='form-control'>
                    <input type="file" placeholder="fileName" onChange={uploadFile} />
                </div>                          
            </form>            
        </div>
    )
}

export default LoadCV
