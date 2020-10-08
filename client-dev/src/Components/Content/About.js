import React from 'react'
import axios from 'axios'

class About extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      techList: [],
      toolsList: [],
      academic: []
    }
  }

  componentDidMount () {
    const config = {
      method: 'get',
      baseURL: 'https://api.facu.dev/',
      headers: { Accept: '*/*' }
    }

    axios('knowledge', config)
      .then((response) => {
        const resData = response.data.knowledge[0]
        const resTechList = resData.Tech.list
        const resToolsList = resData.Tools.list
        this.setState(() => ({
          techList: resTechList,
          toolsList: resToolsList
        }))
      })
      .catch((error) => {
        console.error(error)
      })

    axios('about', config)
      .then((response) => {
        const resData = response.data.about[0].Academic
        const resTexts = resData.texts
        this.setState(() => ({
          academic: resTexts
        }))
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    return (
      <div className='w-full flex px-3 justify-center flex-col items-center text-center bg-primary'>
        <p className='font-bold text-xl m-6'>
          Academic History {' '}
          <span role='img' aria-labelledby='tools emoji'>
          📚
          </span>
        </p>
        <ul className='rounded-lg bg-secondary p-6 mb-6 w-full sm:max-w-2xl text-center'>
          {this.state.academic.map((items) => {
            return <li key={items.toString()} className='text-justify m-3'>{items}</li>
          })}
        </ul>
        <p className='font-bold text-xl mb-6'>
          Technologies I work with {' '}
          <span role='img' aria-labelledby='gear emoji'>
            💻
          </span>
        </p>
        <ul className='rounded-lg bg-secondary p-6 w-full sm:max-w-2xl text-center'>
          {this.state.techList.map((items) => {
            return <li key={items.toString()} className='text-justify w-32 sm:w-56 inline-block m-3'>{String.fromCharCode('9679') + ' ' + items}</li>
          })}
        </ul>
        <p className='font-bold text-xl m-6'>
          Tools I use {' '}
          <span role='img' aria-labelledby='tools emoji'>
          🧰
          </span>
        </p>
        <ul className='rounded-lg bg-secondary p-6 mb-6 w-full sm:max-w-2xl text-center'>
          {this.state.toolsList.map((items) => {
            return <li key={items.toString()} className='text-justify w-64 inline-block m-3'>{String.fromCharCode('9679') + ' ' + items}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default About
