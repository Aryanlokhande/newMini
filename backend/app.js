const cors=require('cors')
const corsOpt=require('./config/corsOpt')
const express=require('express')
const app=express()

const {
    addNewFeedbackForm,
    changeFeedbackFormState,
    unsubmitAssignment,
    getAssignmentDetails,
    updateFeedBackQuestion,
    getAllFacultyReport,
    deleteFeedbackQuestion,
    postFeedBackQuestion,
    getFeedbackQuestions,
    getFeedbackReport,
    getFacClassSubList,
    putFeedback,
    feedBackOfAStudent,
    getTableData,
    getUser,
    removeCurrentUser,
    getFloorDetails,
    showClass,
    showsubjects,
    subAndAssgnOfSpecClass,
    addAssignments,
    updateAssignmentDetails,
    trackAssignments,
    deleteAssignments,
}=require('./controllers/userControllers')

app.use(cors(corsOpt))
app.use(express.json())

app.post("/api/json/addnewfeedbackform",addNewFeedbackForm)

app.put("/api/json/changefeedbackformstate",changeFeedbackFormState)

app.put("/api/json/updatefeedbackquestion",updateFeedBackQuestion)

app.get("/api/json/getallfacultyreport/:fnum",getAllFacultyReport)

app.delete("/api/json/deletefeedbackquestion/:qid",deleteFeedbackQuestion)

app.post("/api/json/postfeedbackquestion",postFeedBackQuestion)

app.get("/api/json/getfeedbackquestions",getFeedbackQuestions)

app.get("/api/json/getfeedbackreport/:fnum/:rec/:recO/:conf",getFeedbackReport)

app.get("/api/json/getfacclasssublist/:formId",getFacClassSubList)

app.put("/api/json/feedback",putFeedback)

app.get("/api/json/feedbackof/:username",feedBackOfAStudent)

app.get("/api/json/gettabledata",getTableData)

app.delete("/api/json/deleteassignment/:id",deleteAssignments)

app.get('/api/json/assignmenttrack',trackAssignments)

app.put('/api/json/unsubmitasgn',unsubmitAssignment)

app.get('/api/json/getasgndetails/:user/:subid/:asgnnum',getAssignmentDetails)

app.put('/api/json/updateasgndetails',updateAssignmentDetails)

app.put('/api/json/assignmenttrack',addAssignments)

app.get('/api/json/subAndAsgnInSpecClass/:username/:classname',subAndAssgnOfSpecClass)

// app.get('/api/json/studentassignment/:user/:sub_name',studentAssignments)

app.get('/api/json/showsubjects/:username',showsubjects)

app.get("/api/json/showclass/:user/:desg",showClass)

app.get("/api/json/getFloor/:dep/:id",getFloorDetails)

app.get("/api/json/:user/:password",getUser)

app.delete("/api/json/deleteTable/:user",removeCurrentUser)

app.listen(3002,()=>{
    console.log("Server listening on port 3002")
})

   
   
