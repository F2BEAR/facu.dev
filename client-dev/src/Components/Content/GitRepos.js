import React from 'react'
import axios from 'axios'

class GitRepos extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    const config = {
      method: 'get',
      url: 'https://api.github.com/users/F2BEAR/repos',
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    }

    axios(config)
      .then((response) => {
        const resData = response.data

        this.setState(() => ({
          data: resData
        }))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render () {
    return (
      <ul className='w-full bg-primary h-full flex justify-center px-3 flex-col items-center text-primary '>
        <p className='font-bold text-xl mb-3'>Projects</p>
        {this.state.data.map((item) => {
          return (
            <li
              className='bg-secondary rounded-lg p-12 m-3 w-full sm:max-w-2xl sm:min-w-2xl'
              key={item.id}
            >
              <a href={item.html_url} target='_blank' rel='noopener noreferrer'>
                <span className='flex w-full justify-center mb-3 text-secondary'>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    stroke='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeWidth={0}
                      fill='currentColor'
                      d='M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z'
                    />
                  </svg>
                </span>
                <p className='font-bold text-xl'>{item.name}</p>
                <p>{item.description}</p>
                <p>Language:{item.language}</p>
                <p className='text-accent text-sm'>{item.html_url}</p>
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default GitRepos
