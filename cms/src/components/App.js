import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './layout/Header'
import Footer from './layout/Footer'
import NoMatch from './utils/NoMatch'
import Home from './content/Home'
import Login from './user/Login'
import Profile from './user/Profile'

function App() {
  const isLogged = useSelector((state) => state.isLogged)
  return (
    <div className="dark h-screen w-screen m-0 p-0 flex flex-col justify-between bg-primary text-primary">
      <BrowserRouter>
        {isLogged ? <Header /> : <span></span>}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          {isLogged ? (
            <Route exact path="/" component={Home} />
          ) : (
            <Redirect exact to="/login" />
          )}
          <Route component={NoMatch} className="content" />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
