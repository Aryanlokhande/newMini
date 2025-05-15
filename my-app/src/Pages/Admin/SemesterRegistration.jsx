import { useState } from "react"
import { postFile } from "../../CRUDdata"
import { useNavigate } from "react-router-dom"

function SemesterRegistration(){
    const navigate=useNavigate()
    const [facultyFile,setFacFile]=useState()
    const [studentFile,setStudFile]=useState()
    const [subjectFile,setSubFile]=useState()
    const [classFile,setClsFile]=useState()
    const [mergefile,setMrgFile]=useState()

    const handleFacultyFileChange=(e)=>setFacFile(e.target.files[0])
    const handleClassFileChange=(e)=>setClsFile(e.target.files[0])
    const handleSubjectFileChange=(e)=>setSubFile(e.target.files[0])
    const handleMergeFileChange=(e)=>setMrgFile(e.target.files[0])
    const handleStudentFileChange=(e)=>setStudFile(e.target.files[0])

    const handleFileUpload=()=>{
        const formDataObj={
            objId: 2,
            "files":[facultyFile,,classFile,subjectFile,mergefile,studentFile]
        }

        const edited= postFile(formDataObj,"http://localhost:3002/api/json/semeterregistrationassociations")
        console.log(edited)
        if(edited.status==200){
            navigate(../folderupload)
        }
    }

    return(
        <>
            Upload csv files for the following
            <div className="upload-csv">
                <label htmlFor="facultyFile">Faculty Information: </label>
                <input type="file" id="facultyFile" onChange={handleFacultyFileChange}/> 
            </div>
            <div className="upload-csv">
                <label htmlFor="classFile">Class Information: </label>
                <input type="file" id="classFile" onChange={handleClassFileChange}/> 
            </div>
            <div className="upload-csv">
                <label htmlFor="subjectFile">Subject Information: </label>
                <input type="file" id="subjectFile" onChange={handleSubjectFileChange}/> 
            </div>
            <div className="upload-csv">
                <label htmlFor="mergeFile">Load Distribution Information: </label>
                <input type="file" id="mergeFile" onChange={handleMergeFileChange}/> 
            </div>
            <div className="upload-csv">
                <label htmlFor="studFile">Student Information: </label>
                <input type="file" id="studFile" onChange={handleStudentFileChange}/> 
            </div>
            <button onClick={handleFileUpload}>Upload</button>            
        </>
    )
}

export default SemesterRegistration