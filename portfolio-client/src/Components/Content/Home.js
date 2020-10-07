import React from 'react'
import axios from 'axios'
import shortid from 'shortid'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      usefulList: [],
      me: [],
      listTitle: '',
      list: []
    }
  }

  componentDidMount () {
    const config = {
      method: 'get',
      baseURL: 'http://localhost:666',
      headers: { Accept: '*/*' }
    }

    axios('about',config)
      .then((response) => {
        const resMe = response.data.about[0].Me.texts
        const resListTitle = response.data.about[0].Me.listTitle
        const resList = response.data.about[0].Me.list

        this.setState(() => ({
          me: resMe,
          listTitle: resListTitle,
          list: resList
        }))
      })
      .catch((error) => {
        console.log(error)
      })

      axios('knowledge', config)
      .then((response) => {
        const resData = response.data.knowledge[0]
        const resUsefulList = resData.Useful.list
        this.setState(() => ({
          usefulList: resUsefulList
        }))
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    return (
      <div className='w-full flex flex-col items-center bg-primary'>
        <div className='text-justify w-auto mx-6'>
          {this.state.me.map((item) => {
            return <p key={shortid.generate()}>{item}</p>
          })}
          <p className='mt-3 '>{this.state.listTitle}</p>
          <ul className='mt-3 rounded-lg bg-secondary p-3'>
            {this.state.list.map((item) => {
              return (
                <li key={item.toString()} className='m-3 w-auto'>
                  {String.fromCharCode('9679') + ' ' + item}
                </li>
              )
            })}
          </ul>
          <p className='text-md my-3'>
          Useful knowledge:
        </p>
        <ul className='rounded-lg bg-secondary p-6 w-full sm:max-w-2xl text-center'>
          {this.state.usefulList.map((items) => {
            return <li key={items.toString()} className='text-justify w-64 inline-block m-3'>{String.fromCharCode('9679') + ' ' + items}</li>
          })}
        </ul>
        </div>
      </div>
    )
  }
}

export default Home
