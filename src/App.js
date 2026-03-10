import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DataContextFunction from './context/context.js';
import Layout from './components/layout/Layout.jsx';
import WelcomePage from './components/WelcomePage/WelcomePage.jsx';
import { ToastContainer } from 'react-toastify';
import ForgetPasswordstudent from './components/ForgetPasswordstudent/ForgetPasswordstudent.jsx';
import ForgotPasswordParent from './components/ForgetPasswordparent/ForgetPasswordparent.jsx';
import ForgetPasswordteacher from './components/ForgetPasswordteacher/ForgetPasswordteacher.jsx';
import ForgotPasswordsupervisor from './components/ForgetPasswordsupervisor/ForgetPasswordsupervisor.jsx';
import RedirectIfAuthenticated from './components/RedirectIfAuthenticated/RedirectIfAuthenticated.jsx';
import Notfoundpage from './components/Notfoundpage/Notfoundpage.jsx';
import Protected from './components/Protucted/Protucted.jsx';
import LoginStudent from './components/LoginStudent/LoginStudent.jsx';
import SignupStudent from './components/SignupStudent/SignupStudent.jsx';
import LoginTeacher from './components/LoginTeacher/LoginTeacher.jsx';
import SignUpTeacher from './components/SignUpTeacher/SignUpTeacher.jsx';
import LoginParent from './components/LoginParent/LoginParent.jsx';
import SignupParent from './components/SignupParent/SignupParent.jsx';
import CompleteProfileTeacher from './components/CompleteProfileTeacher/CompleteProfileTeacher.jsx';
import CompleteProfileSupervisor from './components/CompleteProfileSupervisor/CompleteProfileSupervisor.jsx';
import LoginSupervisor from './components/LoginSupervisor/LoginSupervisor.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import AddBooks from './components/AddBooks/AddBooks.jsx';
import TeacherBooks from './components/TeacherBooks/TeacherBooks.jsx';
import ProfileStudent from './components/ProfileStudent/ProfileStudent.jsx';
import LibraryStudent from './components/LibraryStudent/LibraryStudent.jsx';
import Parentprofile from './components/Parentprofile/Parentprofile.jsx';
import Parentassessment from './components/Parentassessment/Parentassessment.jsx';
import StudentBag from './components/StudentBag/StudentBag.jsx';
import StudentGuide from './components/StudentGuide/StudentGuide.jsx';
import TeacherGuide from './components/TeacherGuide/TeacherGuide.jsx';
import ReadingClubEvaluation from './components/ReadingClubEvaluation/ReadingClubEvaluation.jsx';
import ParentGuide from './components/ParentGuide/ParentGuide.jsx';
import OneSchoolTeacherEvaluations from './components/OneSchoolTeacherEvaluations/OneSchoolTeacherEvaluations.jsx';
import OneSchoolStusentEvaluations from './components/OneSchoolStusentEvaluations/OneSchoolStusentEvaluations.jsx';
import OneSchoolParentEvaluations from './components/OneSchoolParentEvaluations/OneSchoolParentEvaluations.jsx';
import Bookevaluations from './components/Bookevaluations/Bookevaluations.jsx';
import Selfevaluations from './components/Selfevaluations/Selfevaluations.jsx';
import Clubevaluations from './components/Clubevaluations/Clubevaluations.jsx';
import AttendanceoneSchool from './components/AttendanceoneSchool/AttendanceoneSchool.jsx';
import ReadingBooksNumberoneSchool from './components/ReadingBooksNumberoneSchool/ReadingBooksNumberoneSchool.jsx';
import TeacherEvaluationsOfStudents from './components/TeacherEvaluationsOfStudents/TeacherEvaluationsOfStudents.jsx';
import Student_Rates from './components/StudentRates/Student_Rates.jsx';
import Student_SchoolBookRatings from './components/StudentRates/Student_SchoolBookRatings.jsx';
import Student_SelfAssessments from './components/StudentRates/Student_SelfAssessments.jsx';
import Student_ReadingClubRatings from './components/StudentRates/Student_ReadingClubRatings';
import ShowParentassessments from './components/Parentassessment/ShowParentassessments.jsx';
import StudentReviewsofTeacherBooks from './components/StudentReviewsofTeacherBooks/StudentReviewsofTeacherBooks.jsx';
import Show_Student_SchoolBookRatings from './components/StudentReviewsofTeacherBooks/Show_Student_SchoolBookRatings.jsx';
import Show_Student_SelfAssessments from './components/StudentReviewsofTeacherBooks/Show_Student_SelfAssessments.jsx';
import ChangeTeacherPassword from './components/ForgetPasswordteacher/ChangeTeacherPassword.jsx';
import ChangeStudentPassword from './components/ForgetPasswordstudent/ChangeStudentPassword.jsx';
import ChangeSupervisorPassword from './components/ForgetPasswordsupervisor/ChangeSupervisorPassword.jsx';
import ChangeParentPassword from './components/ForgetPasswordparent/ChangeParentPassword.jsx';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/SchoolsBookClubs',
      element: <Layout />,
      children: [
        { index: true, element: <RedirectIfAuthenticated><WelcomePage /></RedirectIfAuthenticated> },
        { path: 'dashboard', element: <Protected><Dashboard /></Protected> },
        { path: 'ProfileStudent', element: <Protected><ProfileStudent /></Protected> },
        { path: 'books', element: <Protected><AddBooks /></Protected> },
        { path: 'LibraryStudent', element: <Protected><LibraryStudent /></Protected> },
        { path: 'Teacherbooks', element: <Protected><TeacherBooks /></Protected> },
        { 
          path: '/SchoolsBookClubs/LoginStudent', 
          element: <RedirectIfAuthenticated><LoginStudent /></RedirectIfAuthenticated> 
        },
        { 
          path: '/SchoolsBookClubs/LoginTeacher', 
          element: <RedirectIfAuthenticated><LoginTeacher /></RedirectIfAuthenticated> 
        },
        { 
          path: '/SchoolsBookClubs/LoginParent', 
          element: <RedirectIfAuthenticated><LoginParent /></RedirectIfAuthenticated> 
        },
        { 
          path: '/SchoolsBookClubs/LoginSupervisor', 
          element: <RedirectIfAuthenticated><LoginSupervisor /></RedirectIfAuthenticated> 
        },
        { 
          path: '/SchoolsBookClubs/SignupStudent', 
          element: <RedirectIfAuthenticated><SignupStudent /></RedirectIfAuthenticated> 
        },
        { 
          path: '/SchoolsBookClubs/SignupTeacher', 
          element: <RedirectIfAuthenticated><SignUpTeacher /></RedirectIfAuthenticated> 
        },
        { 
          path: '/SchoolsBookClubs/SignupParent', 
          element: <RedirectIfAuthenticated><SignupParent /></RedirectIfAuthenticated> 
        },
        { 
          path: '/SchoolsBookClubs/CompleteProfileTeacher', 
          element: <RedirectIfAuthenticated><CompleteProfileTeacher /></RedirectIfAuthenticated> 
        },
        { 
          path: '/SchoolsBookClubs/CompleteProfileSupervisor', 
          element: <RedirectIfAuthenticated><CompleteProfileSupervisor /></RedirectIfAuthenticated> 
        },
        { 
          path: '/SchoolsBookClubs/ForgetPasswordstudent', 
          element: <RedirectIfAuthenticated>  <ForgetPasswordstudent /></RedirectIfAuthenticated> 
        },
        {
          path: '/SchoolsBookClubs/ChangeTeacherPassword',
          element: <RedirectIfAuthenticated><ChangeTeacherPassword /></RedirectIfAuthenticated>
        },
        {
          path: '/SchoolsBookClubs/ChangeStudentPassword',
          element: <RedirectIfAuthenticated><ChangeStudentPassword /></RedirectIfAuthenticated>
        },
        {
          path: '/SchoolsBookClubs/ChangeSupervisorPassword',
          element: <RedirectIfAuthenticated><ChangeSupervisorPassword /></RedirectIfAuthenticated>
        },
        {
          path: '/SchoolsBookClubs/ChangeParentPassword',
          element: <RedirectIfAuthenticated><ChangeParentPassword /></RedirectIfAuthenticated>
        },
        { 
          path: '/SchoolsBookClubs/ForgetPasswordParent', 
          element: <RedirectIfAuthenticated><ForgotPasswordParent /></RedirectIfAuthenticated> 
        },
        { 
          path: '/SchoolsBookClubs/ForgetPasswordteacher', 
          element: <RedirectIfAuthenticated><ForgetPasswordteacher /></RedirectIfAuthenticated> 
        },
        { 
          path: '/SchoolsBookClubs/ForgotPasswordsupervisor', 
          element: <RedirectIfAuthenticated><ForgotPasswordsupervisor /></RedirectIfAuthenticated> 
        },
        { 
          path: '/SchoolsBookClubs/Parentprofile', 
          element: <Protected><Parentprofile /></Protected> 
        },
        { 
          path: '/SchoolsBookClubs/Parentprofile', 
          element: <Protected><Parentprofile /></Protected> 
        },
        { 
          path: '/SchoolsBookClubs/ParentGuide', 
          element: <Protected><ParentGuide /></Protected> 
        },
        {
          path: '/SchoolsBookClubs/ReadingClubEvaluation',
          element: <Protected><ReadingClubEvaluation /></Protected>
        },
        { 
          path: '/SchoolsBookClubs/Parentassessment', 
          element: <Protected><Parentassessment /></Protected> 
        },
        { 
          path: '/SchoolsBookClubs/StudentBag', 
          element: <Protected><StudentBag /></Protected> 
        },
        { 
          path: '/SchoolsBookClubs/StudentGuide', 
          element: <Protected><StudentGuide /></Protected> 
        },
        { 
          path: '/SchoolsBookClubs/TeacherGuide', 
          element: <Protected><TeacherGuide /></Protected> 
        },
        {
          path: '/SchoolsBookClubs/admin/OneSchoolTeacherEvaluations',
          element: <Protected><OneSchoolTeacherEvaluations /></Protected>
        },
        {
          path: '/SchoolsBookClubs/admin/OneSchoolStusentEvaluations',
          element: <Protected><OneSchoolStusentEvaluations /></Protected>
        },
        {
          path: '/SchoolsBookClubs/admin/OneSchoolParentEvaluations',
          element: <Protected><OneSchoolParentEvaluations /></Protected>
        }
        ,{
          path: '/SchoolsBookClubs/admin/Bookevaluations',
          element: <Protected><Bookevaluations /></Protected>
        }
        ,{
          path: '/SchoolsBookClubs/admin/Selfevaluations',
          element: <Protected><Selfevaluations /></Protected>
        }
        ,{
          path: '/SchoolsBookClubs/admin/Clubevaluations',
          element: <Protected><Clubevaluations /></Protected>
        }
        ,{
          path: '/SchoolsBookClubs/admin/AttendanceoneSchool',
          element: <Protected><AttendanceoneSchool /></Protected>
        }
        ,{
          path: '/SchoolsBookClubs/admin/ReadingBooksNumberoneSchool',
          element: <Protected><ReadingBooksNumberoneSchool /></Protected>
        }
        ,{
          path: '/SchoolsBookClubs/TeacherEvaluationsOfStudents',
          element: <Protected><TeacherEvaluationsOfStudents /></Protected>
        }
        ,{
          path: '/SchoolsBookClubs/Student_Rates',
          element: <Protected><Student_Rates /></Protected>
        }
        ,
        {
          path: '/SchoolsBookClubs/Student_SchoolBookRatings',
          element: <Protected><Student_SchoolBookRatings /></Protected>
        },
        {
          path: '/SchoolsBookClubs/Student_SelfAssessments',
          element: <Protected><Student_SelfAssessments /></Protected>
        },
        {
          path: '/SchoolsBookClubs/Student_ReadingClubRatings',
          element: <Protected><Student_ReadingClubRatings /></Protected>
        },
        {
          path: '/SchoolsBookClubs/ShowParentassessments',
          element: <Protected><ShowParentassessments /></Protected>
        },
        {
          path: '/SchoolsBookClubs/StudentReviewsofTeacherBooks',
          element: <Protected><StudentReviewsofTeacherBooks /></Protected>
        },
        {
          path: '/SchoolsBookClubs/Show_Student_SchoolBookRatings',
          element: <Protected><Show_Student_SchoolBookRatings /></Protected>
        },
        {
          path: '/SchoolsBookClubs/Show_Student_SelfAssessments',
          element: <Protected><Show_Student_SelfAssessments /></Protected>
        },
        { 
          path: '*', 
          element: <Notfoundpage /> 
        }
      ]
    }
  ]);

  return (
    <DataContextFunction>
      <RouterProvider router={router} />
      <ToastContainer />
    </DataContextFunction>
  );
}
