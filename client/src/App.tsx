import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/auth' element={<Auth/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
