import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Details from './Details'
import Main from './Main'
import Login from './Login'
import Layout from './Layout'

const PageRouting = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/students" element={<Layout><Main/></Layout>}/>
                <Route path="/student/:id" element={<Layout><Details/></Layout>}/>
            </Routes>
        </Router>

    </div>
  )
}

export default PageRouting