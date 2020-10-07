import React from 'react'
import { NavLink } from 'react-router-dom'
import Toggle from '../Toggle'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.openMenu = this.openMenu.bind(this)
  }

  openMenu () {
    this.setState((state) => ({
      isOpen: !state.isOpen
    }))
  }

  render () {
    return (
      <div className='w-full flex fixed bg-primary sm:jutify-around sm:items-center md:justify-around justify-between min-h-layout shadow-lg'>
        <h1 className='p-3 font-bold text-4x1 mt-2 sm:mt-0'>
          Facundo Carbonel
        </h1>
        <div className='mt-2 sm:mt-0'>
          {this.state.isOpen ? (
            <span
              className='sm:hidden block w-6 h-6 m-3'
              onClick={() => this.openMenu()}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </span>
          ) : (
            <span
              className='sm:hidden block w-6 h-6 m-3'
              onClick={() => this.openMenu()}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </span>
          )}
        </div>
        <nav
          className={
            'transition-all sm:transition-none duration-300 ease-in-out flex flex-col sm:flex-row bg-tertiary sm:bg-primary fixed sm:static h-full sm:h-auto w-64 sm:w-auto items-center mr-3 ' +
            (this.state.isOpen ? 'left-0' : '-left-64')
          }
        >
          <NavLink
            exact
            to='/'
            activeClassName='text-accent'
            className='p-3 mt-3 sm:mt-0 w-full sm:w-auto text-center'
            onClick={() => this.openMenu()}
          >
            Home
          </NavLink>
          <NavLink
            to='/projects'
            activeClassName='text-accent'
            className='p-3 w-full sm:w-auto text-center'
            onClick={() => this.openMenu()}
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            activeClassName='text-accent'
            className='p-3 w-full sm:w-auto text-center'
            onClick={() => this.openMenu()}
          >
            About Me
          </NavLink>
          <NavLink
            to='/contact'
            activeClassName='text-accent'
            className='p-3 w-full sm:w-auto text-center'
            onClick={() => this.openMenu()}
          >
            Contact
          </NavLink>
          <Toggle />
        </nav>
      </div>
    )
  }
}

export default Header
