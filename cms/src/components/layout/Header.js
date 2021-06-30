import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleMenu, logout } from '../../redux/actions/actions'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      redirectTo: ''
    }
    this.getOut = this.getOut.bind(this)
  }
  getOut = () => {
    this.props.logout()
    this.setState({ redirect: true, redirectTo: '/login' })
  }
  render() {
    if (this.state.redirect === true) {
      return <Redirect to={this.state.redirectTo} />
    }
    return (
      <div className="h-screen flex fixed flex-col bg-tertiary jutify-start min-h-layout">
        {this.props.isOpen ? (
          <span className="block w-6 h-6 m-3"></span>
        ) : (
          <span
            className="block w-6 h-6 m-3"
            onClick={() => this.props.toggleMenu()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
        )}
        <NavLink exact to="/" activeClassName="text-accent">
          <span className="block w-6 h-6 m-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </span>
        </NavLink>
        <NavLink
          exact
          to={this.props.isLogged ? '/profile' : '/login'}
          activeClassName="text-accent"
        >
          <span className="block w-6 h-6 m-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </span>
        </NavLink>
        {this.props.isLogged ? (
          <div className="cursor-pointer" onClick={() => this.props.logout()}>
            <span className="block w-6 h-6 m-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </span>
          </div>
        ) : (
          <span></span>
        )}
        <nav
          className={
            'transition-all duration-300 ease-in-out flex flex-col bg-tertiary fixed h-full w-64 sm:w-auto items-center border-white ' +
            (this.props.isOpen ? 'left-0' : '-left-64')
          }
        >
          <div className="flex flex-row flex-center items-center text-center ml-2">
            <h1 className="p-3 font-bold text-4x1 ">Portfolio-CMS</h1>
            <div>
              {this.props.isOpen ? (
                <span
                  className="block w-6 h-6 m-3"
                  onClick={() => this.props.toggleMenu()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              ) : (
                <span
                  className="block w-6 h-6 m-3"
                  onClick={() => this.props.toggleMenu()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>
              )}
            </div>
          </div>

          <NavLink
            exact
            to="/"
            activeClassName="text-accent"
            className="w-full text-center flex flex-row items-center"
            onClick={() => this.props.toggleMenu()}
          >
            <span className="block w-6 h-6 m-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </span>{' '}
            Home
          </NavLink>
          {this.props.isLogged ? (
            <NavLink
              exact
              to="/profile"
              activeClassName="text-accent"
              className="w-full text-center flex flex-row items-center"
              onClick={() => this.props.toggleMenu()}
            >
              <span className="block w-6 h-6 m-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>{' '}
              Profile
            </NavLink>
          ) : (
            <NavLink
              exact
              to="/login"
              activeClassName="text-accent"
              className="w-full text-center flex flex-row items-center"
              onClick={() => this.props.toggleMenu()}
            >
              <span className="block w-6 h-6 m-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>{' '}
              Login
            </NavLink>
          )}
          {this.props.isLogged ? (
            <div
              className="w-full text-center flex flex-row items-center cursor-pointer"
              onClick={() => this.getOut()}
            >
              <span className="block w-6 h-6 m-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </span>{' '}
              SignOut
            </div>
          ) : (
            <span></span>
          )}
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isOpen: state.isOpen, isLogged: state.isLogged }
}
const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
  logout: () => dispatch(logout())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
