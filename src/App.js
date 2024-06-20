import './App.css'
import { Route, Routes } from 'react-router-dom'
import Admin from './UserArea/Admin'
import User from './UserArea/User'
import ProjectLeader from './UserArea/ProjectLeader'

function App() {
  return (
    <Routes>
      <Route path={'/admin/*'} element={<Admin />} />
      <Route path={'/project-leader/*'} element={<ProjectLeader />} />
      <Route path={'/user/*'} element={<User />} />
    </Routes>
  )
}

export default App
