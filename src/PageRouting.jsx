import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Details from './Details'
import Main from './Main'
import Login from './Login'

const PageRouting = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/table" element={<Main/>}/>
                <Route path="/student/:id" element={<Details/>}/>
            </Routes>
        </Router>

    </div>
  )
}

export default PageRouting