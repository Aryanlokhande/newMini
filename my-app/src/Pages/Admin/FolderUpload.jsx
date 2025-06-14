import { useState } from "react"
import { postFile } from "../../CRUDdata"

function FolderUpload(){

    const[folder,setFolder]=useState()

    const handleFolderUpload=(event)=>{
        // const filesArray=Array.from(event.target.files)
        // setFolder(filesArray)
        console.log("hi");
    }

    const handleUploadClick=async()=>{
        const formDataObj={
            objId: 3,
            paths: folder.map(file=>file.webkitRelativePath),
            'files': folder,
        }

        const edited=await postFile(formDataObj,`http://localhost:3002/api/json/uploadfolder`)
    }

    return(
        <>
            <div className="upload-folder-screen">
                <p>Upload Assignment Question Folder: <input type="file" webkitdirectory="true" multiple="true" onChange={handleFolderUpload}/></p>
                <button className="upload-buttons" onClick={handleUploadClick}>Upload</button>
            </div>
        </>
    )
}

export default FolderUpload