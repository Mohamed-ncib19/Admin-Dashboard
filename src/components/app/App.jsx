import { MemoryRouter , Routes , Route } from "react-router-dom"
import Login from "../login/login"
import Welcome from "../welcome/Welcome"
import Dashboard from "../Dashboard/Dashboard"
function App() {
  return (
   <div >
    <MemoryRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </MemoryRouter>
   </div>
       
  )
}

export default App
