import React from 'react'

class NoMatch extends React.Component {
  render () {
    return (
      <div className='w-full h-full flex flex-col md:flex-row items-center justify-center text-center'>
        <div className='flex flex-col justify-center h-auto mx-12 my-12'>
          <h1 className='font-bold text-primary text-6xl'>Error 404</h1>
          <p className='font-semibold text-secondary text-3x1'>Sorry! We couldn't find that!</p>
        </div>
      </div>
    )
  }
}

export default NoMatch
