import Navbar from './components/Navbar'
import News from './components/News'
import React, { useState }  from 'react'

import LoadingBar from 'top-loading-bar/dist'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App =()=> {

  const [progress, setProgress] = useState(0)
 const pageSize=5
 const apiKey="0da65b3d02644bc8b5325486312b7779"

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        height={2}
        progress={progress}
       
      />
          <Routes>
          <Route exact path="/science" element={<News setProgress={ setProgress} apiKey={apiKey}  key="science" pageSize={ pageSize} country="in" category="science"/>}/>
          <Route exact path="/" element={<News setProgress={ setProgress}apiKey={apiKey}  key="/"  pageSize={ pageSize} country="in" category="general"/>}/>
          <Route exact path="/technology" element={<News setProgress={ setProgress} apiKey={apiKey}  key="technology" pageSize={ pageSize} country="in" category="technology"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={ setProgress} apiKey={apiKey}  key="entertainment" pageSize={ pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/health" element={<News setProgress={ setProgress} apiKey={apiKey}  key="health" pageSize={ pageSize} country="in" category="health"/>}/>
          <Route exact path="/sports" element={<News setProgress={ setProgress} apiKey={apiKey}  key="sports" pageSize={ pageSize} country="in" category="sports"/>}/>
          <Route exact path="/business" element={<News setProgress={ setProgress} apiKey={apiKey}  key="business" pageSize={ pageSize} country="in" category="business"/>}/>
          </Routes>
        </Router>
       </div>
    )
  }

export default App