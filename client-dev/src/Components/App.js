import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Layout/Header'
import Footer from './Layout/Footer'

import About from './Content/About'
import GitRepos from './Content/GitRepos'
import Contact from './Content/Contact'
import Home from './Content/Home'

import NoMatch from './NoMatch'

import { ThemeProvider } from './ThemeContext'

class App extends React.Component {
  render () {
    return (
      <ThemeProvider>
        <div className='h-screen w-screen m-0 p-0 flex flex-col justify-between bg-primary text-primary'>
          <div>
            <BrowserRouter>
              <Header />
              <div className='mt-24'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/contact' component={Contact} />
                  <Route path='/about' component={About} />
                  <Route path='/projects' component={GitRepos} />
                  <Route component={NoMatch} className='content' />
                </Switch>
              </div>
            </BrowserRouter>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
