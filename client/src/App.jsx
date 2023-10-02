import { useState } from 'react'
import Homepage from './views/HomePage/Homepage'
import {Routes,Route} from 'react-router-dom'
import ProfessorPage from './views/Dashboard-Teacher/ProfessorPage'
import LoginPage from './views/HomePage/LoginPage'
import DashboardAdmin from './views/Dashboard-Admin/DashboardAdmin'
import ChooseBoard from './components/Registration-Components/ChooseBoard'
import RegisterStudent from './views/Registration/RegisterStudent'
import RegisterProf from './views/Registration/RegisterProf'
import StudentPage from './views/Dashboard-Student/StudentPage'
import Createcourse from './views/Dashboard-Teacher/Createcourse'
import AllCourses from './views/Dashboard-Teacher/AllCourses'
import AllEnrollements from './views/Dashboard-Teacher/AllEnrollements'
import EditProfileTeacher from './views/Dashboard-Teacher/EditProfileTeacher'
import AboutUs from './views/HomePage/AboutUs'
import OurTeachers from './views/HomePage/OurTeachers'
import Chemistry from './components/StudentSubjects/Chemistry'
import Geography from './components/StudentSubjects/Geography'
import History from './components/StudentSubjects/History'
import Physics from './components/StudentSubjects/Physics'
import Biology from './components/StudentSubjects/Biology'
import Math from './components/StudentSubjects/Math'
import MyCourses from './components/student/MyCourses'



function App() {
  const [count, setCount] = useState(0)

  return (



    <Routes>
      {/* Home Page Routes */}
 <Route path='/ourteachers' element={<OurTeachers/>} />
  <Route path='/' element={<Homepage/>}/>
  <Route path='/aboutUs' element={<AboutUs/>}/>
  <Route path='/login' element={<LoginPage/>}/>  

  {/* login take us to dashboard student or teacher bu condition  */}
  <Route path='/choose' element={<ChooseBoard/>}/>
  {/* <Choose/> inside choseboard */}
  {/* Registration components */}



{/* """"""""""""""""""""""""""""""Student Register And Dashboard""""""""""""""""""""""""" */}
  <Route path='/registerstudent' element={<RegisterStudent/>}/>
{/* <Nav/>

    <RegisterForm operation={register} user={user} setter={setUser}  /> */}

  
  <Route path='/student' element={<StudentPage/>}/>

  {/*↓↓↓ <DashboardStudent/> */}

  <Route path='/mycourses' element={<MyCourses/>}/>

{/* Student Subject Routes */}
  <Route path='/math' element={<Math/>}   />
  <Route path='/chemistry' element={<Chemistry/>}   />
  <Route path='/geography' element={<Geography/>}   />
  <Route path='/history' element={<History/>}   />
  <Route path='/physics' element={<Physics/>}   />
  <Route path='/mern' element={<Biology/>}   />

{/* Logout is a function not a route that redirects to the home page  */}


{/* Teacher Register And Dashboard */}

  <Route path='/registerteacher' element={<RegisterProf/>}/>

{/* <Nav/>
    
    <RegisterTeacher operation={register} user={teacher} setter={setTeacher}/> */}


{/* Now another Nav in every compoenent <NavDashboardTeacher/>  */}


  <Route path='/teacher' element={<ProfessorPage/>} />

{/* <HomePageProfessor />  */}
{/* ↓↓↓↓   links inside teacher dashboard  ↓↓↓↓*/}
  <Route path='/createcourse' element={<Createcourse/>} />

{/*    <CreateCourseForm course={course} setCourse={setCourse} formHandler={formHandler}   /> */}
      {/* <CourseForm> */}
  <Route path='/settingteacher' element={<EditProfileTeacher/>}/>

  <Route path='/enrollements' element={<AllEnrollements/>} />

  <Route path='/showcourses' element={<AllCourses/>} />
{/* logout redirect to Homepage  */}




{/* Admin Routes  */}

  <Route path='/admin' element={<DashboardAdmin/>}/>





  
    </Routes>

  )
}

export default App
