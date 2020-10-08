import React from 'react'
import axios from 'axios'

class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {},
      list: []
    }
  }

  componentDidMount () {
    const config = {
      method: 'get',
      url: 'https://api.facu.dev/contact',
      headers: { Accept: '*/*' }
    }

    axios(config)
      .then((response) => {
        const resData = response.data
        const resContact = resData.contact
        const resList = resContact[0].list
        this.setState(() => ({
          data: resContact,
          list: resList
        }))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render () {
    return (
      <div className='w-full flex justify-center bg-primary items-center px-3 flex-col text-center'>
        <p className='font-bold text-xl mb-3'>Contact</p>
        <p className='max-w-xl text-justify m-3'>
          If you want to contact me for more information, project proposals or
          any other inquiry feel free to fill the below form {' '}
          <span role='img' aria-labelledby='sparkle emoji'>
            ✨
          </span>
        </p>
        <form
          id='contact'
          className='mt-3 rounded-lg bg-secondary p-8 felx justify-end w-full sm:max-w-2xl sm:min-w-xl'
        >
          <div className='m-3 flex justify-between'>
            <label htmlFor='name' className='m-3'>
              Name
            </label>
            <input
              name='name'
              type='text'
              className='rounded-lg p-3 w-48 sm:min-w-sm bg-primary'
              placeholder='Your Name'
              required
            />
          </div>
          <div className='m-3  flex justify-between'>
            <label htmlFor='mail' className='m-3'>
              Email
            </label>
            <input
              name='mail'
              type='email'
              className='rounded-lg p-3 w-48 sm:min-w-sm bg-primary'
              placeholder='example@example.com'
              required
            />
          </div>
          <div className='m-3 flex items-center flex-row justify-between'>
            <label htmlFor='message' className='m-3'>
              Message
            </label>
            <textarea
              rows='4'
              cols='25'
              name='message'
              form='contact'
              className='rounded-lg p-3 w-48 sm:min-w-sm bg-primary'
              placeholder='Enter your message here!'
              required
            />
          </div>
          <button
            type='submit'
            className='py-3 px-8 m-3 rounded-lg bg-primary text-accent hover:bg-tertiary'
          >
            Send
          </button>
        </form>
        <div className='w-auto m-6'>
          <p>You can find me on:</p>
          <ul className='mt-3 rounded-lg bg-secondary p-3'>
            {this.state.list.map((item) => {
              return (
                <a
                  href={item.url}
                  key={item.name.toString()}
                  className='m-3 w-auto hover:text-accent'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {item.name}
                </a>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Contact
