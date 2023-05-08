
import { Switch,Route } from 'react-router-dom';
import './App.css';
// import Base from './Base/Base';
import Students from './Components/Students.js';
import AddStudents from './Components/AddStudents';
import UpdateStudents from './Components/UpdateStudents';
// import data from './Data/data';
import { useEffect, useState } from 'react';
import Nopage from './Components/Nopage';
import DashBoard from './Components/DashBoard';
import { Redirect } from 'react-router-dom';
import UpdateTeachers from './Components/UpdateTeachers';
import AddTeachers from './Components/AddTeachers';
import Teachers from './Components/Teachers';

function App() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(()=>{
    const getStudents = async () =>{
        const response = await fetch("https://644b33c017e2663b9deab94b.mockapi.io/students", {
          method:"GET",
        }); 
        const data = await response.json();
        if(data){
          setStudents(data)
        }
    }
    getStudents();
  }, [])

  useEffect(()=>{
    const getTeachers = async () =>{
        const response = await fetch("https://6458a4528badff578ef68b00.mockapi.io/teachers", {
          method:"GET",
        }); 
        const data = await response.json();
        if(data){
          setTeachers(data)
        }
    }
    getTeachers();
  }, [])

  return (
    <div className="App">
       <Switch>
        {/* Exact path first page to load */}
         <Route exact path="/">
             <DashBoard/>
         </Route>

          <Route path="/students">
            <Students
            students = {students}
            setStudents ={setStudents}
            />
          </Route>

          <Route path="/details">
             <Redirect to ="/students"/>
          </Route>

         <Route path="/add">
            <AddStudents
            students = {students}
            setStudents ={setStudents}
            />
         </Route>

         <Route path="/edit/:id">
            <UpdateStudents
              students = {students}
              setStudents ={setStudents}
            />
         </Route>

         {/* Teachers section */}

         <Route path="/teachers">
            <Teachers
             teachers={teachers}
             setTeachers={setTeachers}
            />
          </Route>

          <Route path="/addteach">
            <AddTeachers
             teachers={teachers}
             setTeachers={setTeachers}
            />
         </Route>

         <Route path="/editteach/:id">
            <UpdateTeachers
             teachers={teachers}
             setTeachers={setTeachers}
            />
         </Route>


          <Route path="**">
              <Nopage/>
          </Route>

       </Switch>
    </div>
  );
}

export default App;
