import './Mini.css'
import AssignmentCard from './Pages/Faculty/AssignmentCard'
import SubjectAssignment,{subAsgnLoader} from './Pages/Faculty/AssignmentCollection'
import StudentSubject, { studSubjectLoader } from './Pages/Student/SSubjects'
import FacultyLayout from './components/FacultyLayout'
import StudentLayout, {studentLayoutLoader} from './components/StudentLayout'
import AdminLayout from './components/AdminLayout'
import MainLayout from './components/MainLayout'
import FClass,{fclassLoader} from './Pages/Faculty/FClass'
import UserLogin from './Pages/UserLogin'
import Specific from './Pages/Specific'
import FeatureLayout from './components/FeatureLayout' 
import Navigate from './Pages/NavigateContainer'
import Sample from './Pages/Sample'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import UserLayout ,{userLayoutLoader} from './components/UserLayout'
import FAssignment from './Pages/Faculty/FAssignment'
import SubmitAssignment from './Pages/Faculty/SubmitAssignment'
import SAssignmentSubmit,{sAssignmentSubmitLoader} from './Pages/Student/SAssignmentsSubmit'
import GenerateReport,{generateReportLoader} from './Pages/Admin/GenerateReport'
import StudentFeedback, {studentFeedBackLoader} from './Pages/Student/StudentFeedback'
import FeedBackComplete from './Pages/Student/FeedBackComplete'
import FeedbackReport, {feedbackReportLoader} from './components/FeedbackReport'
import SelectedReport, {selectedReportLoader} from './Pages/Admin/SelectedReport'
import FeedbackPreview ,{feedbackPreviewLoader} from './Pages/Admin/FeedbackPreview'
import AllFacultyReport, {allFacultyReportLoader} from './Pages/Admin/AllFacultyReport'
import FeedbackRange, { feedbackRangeLoader } from './Pages/Admin/FeedbackRange'
import SemesterRegistration from './Pages/Admin/SemesterRegistration'
import GradeSubmission, { gradeSubmissionLoader } from './components/GradeSubmission'
import SpecStudentAssignment from './Pages/Faculty/SpecificStudentAssignment'
import FSubject, { fsubjectLoader } from './Pages/Faculty/FSubject'
import FolderUpload from './Pages/Admin/FolderUpload'


const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
        <Route path={`user/:username`} element={<FacultyLayout />}>
            <Route path='faculty' element={<FClass />} loader={fclassLoader}>    
                <Route path=':class_name' element={<FSubject/>} loader={fsubjectLoader} >
                    <Route path=':subName' element={<SubjectAssignment />} loader={subAsgnLoader} />
                </Route>
            </Route>  
            <Route path='faculty/:class_name' element={<SubjectAssignment />} loader={subAsgnLoader} />
            <Route path='faculty/:class_name/newassignment' element={<SubmitAssignment />} />
            <Route path='faculty/:class_name/:subName/:fAsgnId/gradesubmission' element={<GradeSubmission />} loader={gradeSubmissionLoader}>
                <Route path=':specStudent' element={<SpecStudentAssignment/>} />
            </Route>          
        </Route>    
        
        <Route path={`user/:username/student`} element={<StudentLayout />} loader={studentLayoutLoader}>
            <Route index element={<StudentSubject />} loader={studSubjectLoader} />
            <Route path='feedback' element={<StudentFeedback />} loader={studentFeedBackLoader} />
            <Route path='feedback/complete' element={<FeedBackComplete />} /> 
            <Route path=':sub_id/:asgn' element={<SAssignmentSubmit/>} loader={sAssignmentSubmitLoader} />       
        </Route>
        <Route path={`user/:username/admin`} element={<AdminLayout />}>
            <Route index element={<GenerateReport />} loader={generateReportLoader}/>
            <Route path='registration' element={<SemesterRegistration />} />  
            <Route path='folderupload' element={<FolderUpload />} />
            <Route path='feedback' element={<FeedbackReport />} loader={feedbackReportLoader}>
                <Route path=':range' element={<FeedbackRange/>} loader={feedbackRangeLoader} />
                <Route path=':fnum/allfacultyreport' element={<AllFacultyReport />} loader={allFacultyReportLoader} />
                <Route path=':fnum/:rec1/:recObjele' element={<SelectedReport />} loader={selectedReportLoader} />
            </Route>    
            <Route path='feedbackpreview' element={<FeedbackPreview />} loader={feedbackPreviewLoader}/>              
        </Route>    
        <Route index element={<UserLogin />} />
        <Route path={`feature`} element={<FeatureLayout />}>
            <Route index element={<Navigate />} />
            <Route path='specific/:dep/:id' element={<Specific />}/>
        </Route>
        <Route path='/sample' element={<Sample />} />
        {/* <Route path='/sample2' element={<Sample2 />}/> */}
    </Route>
))

function App(){
    
    return(
        <>
            <div>
                <RouterProvider router={router} />
            </div>
        </>
    )
}

export default App