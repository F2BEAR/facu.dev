import React from 'react'

class NoMatch extends React.Component {
  render () {
    return (
      <div className='w-full content flex flex-col items-center justify-center text-center px-12'>
        <h1 className='font-bold text-primary text-6xl'>Error 404</h1>
        <p className='font-semibold text-secondary text-3x1'>Sorry! We couldn't find that :(</p>
      </div>
    )
  }
}

export default NoMatch
