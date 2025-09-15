import './App.css'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import EditCom from './Component/EditCom'
import Add from './Component/Add'
import { useState } from 'react';

function App() {
        const[task,setTask]=useState([]);
  return (
    <>
    <BrowserRouter>
    <nav>
       <div id="start">
        <div id="update">  <Link className="custom-button" to={'/add'}>Add</Link></div>
        
         <div id="edit"> <Link className="custom-button" to={'/edit'}>Task's</Link> </div>
       </div>
    </nav>
    <Routes>
        <Route path='/add' element={<Add task={task} setTask={setTask}/>}> </Route>
         <Route path='/edit' element={<EditCom task={task} setTask={setTask}/>}> </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
