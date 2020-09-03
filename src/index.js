import * as React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import SearchPage from './SearchPage'
import RecommendedVideos from './RecommededVideos'


function App () {
  return (
    <div className='app'>
      <Header />

      <div className='app-page'>
        <Sidebar />
        <SearchPage />
      </div>

      <div className='app-page'>
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)