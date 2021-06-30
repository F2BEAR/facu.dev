import React from 'react'
import axios from 'axios'
import shortid from 'shortid'
import Spinner from '../utils/Spinner'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usefulList: [],
      me: [],
      listTitle: '',
      list: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState(() => ({ isLoading: true }))

    const config = {
      method: 'get',
      baseURL: 'http://localhost:666/',
      headers: { Accept: '*/*' }
    }

    axios('about', config)
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
          usefulList: resUsefulList,
          isLoading: false
        }))
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <div className="w-screen bg-primary">
        {this.state.isLoading === true ? (
          <Spinner />
        ) : (
          <div className="text-justify flex items-center flex-col">
            <h1 className="p-3 font-bold text-2xl md:text-6xl m-9">
              Portfolio-CMS
            </h1>
            {this.state.me.map((item) => {
              return (
                <p
                  className="w-64 sm:min-w-2xl my-3 mx-6"
                  key={shortid.generate()}
                >
                  {item}
                </p>
              )
            })}
            <p className="my-3 mx-6 w-64 sm:min-w-2xl">
              {this.state.listTitle}
            </p>
            <ul className="rounded-lg bg-secondary p-6 w-64 sm:max-w-2xl sm:min-w-2xl text-justify">
              {this.state.list.map((item) => {
                return (
                  <li key={item.toString()} className="my-3 w-auto sm:w-64">
                    {String.fromCharCode('9642') + ' ' + item}
                  </li>
                )
              })}
            </ul>
            <p className="text-md my-3 mx-6 w-64 sm:min-w-2xl">
              Useful knowledge:
            </p>
            <ul className="rounded-lg bg-secondary p-6 mb-6 w-64 sm:max-w-2xl sm:min-w-2xl text-justify">
              {this.state.usefulList.map((items) => {
                return (
                  <li
                    key={items.toString()}
                    className="text-justify w-auto sm:w-64 block sm:inline-block m-3"
                  >
                    {String.fromCharCode('9642') + ' ' + items}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
