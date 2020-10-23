import React from "react"
import axios from "axios"
import Spinner from "../Spinner"

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      list: [],
      name: "",
      email: "",
      message: "",
      isLoading: false,
      messageSent: false,
      alert: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState(() => ({ isLoading: true }))

    const config = {
      method: "get",
      url: "https://api.facu.dev/contact",
      headers: { Accept: "*/*" },
    }

    axios(config)
      .then((response) => {
        const resData = response.data
        const resContact = resData.contact
        const resList = resContact[0].list
        this.setState(() => ({
          data: resContact,
          list: resList,
          isLoading: false
        }))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = this.state

    const config = {
      method: "post",
      url: "http://localhost:666/sendMail",
      headers: { Accept: "*/*" },
      data: {
        name: name,
        email: email,
        message: message,
      },
    }
    axios(config).then((res) => {
      this.setState({ messageSent: true })

      if (res.status === 200) {
        this.setState({ alert: 'The message has been sent! :)' })
      } else {
        this.setState({ alert: 'There was an error while sending the message :(' })
      }

      this.setState({
        name: '',
        email: '',
        message: ''
      })

      setInterval(() => {
        this.setState({ 
          messageSent: false
        })
      }, 3500)
    })
  }

  render() {
    return (
      <div className="w-full">
        {this.state.messageSent === true ? 
          (

            <span className="absolute bg-secondary rounded-lg shadow-lg w-64 p-6 text-accent ml-24">
              {this.state.alert}
            </span>
          ) : (
            <span className="hidden"></span>
        )}

        {this.state.isLoading === true ? (
          <Spinner />
        ) : (
          <div className="flex justify-center bg-primary items-center px-6 flex-col text-center">
            <p className="font-bold text-xl mb-3">Contact</p>
            <p className="max-w-xl text-justify m-3">
              If you want to contact me for more information, project proposals
              or any other inquiry feel free to fill the below form{" "}
              <span role="img" aria-labelledby="sparkle emoji">
                ✨
              </span>
            </p>
            <form
              id="contact"
              className="mt-3 rounded-lg bg-secondary p-8 felx justify-end w-full sm:max-w-2xl sm:min-w-xl"
              onSubmit={this.handleSubmit}
            >
              <div className="m-3 flex flex-col items-center sm:flex-row justify-between">
                <label htmlFor="name" className="m-3">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="rounded-lg p-3 w-48 sm:min-w-sm bg-primary focus:bg-primary"
                  autocomplete="off"
                  placeholder="Your Name"
                  value={this.state.name}
                  onChange={this.handleOnChange}
                  required
                />
              </div>
              <div className="m-3 flex flex-col items-center sm:flex-row justify-between">
                <label htmlFor="mail" className="m-3">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="rounded-lg p-3 w-48 sm:min-w-sm bg-primary focus:bg-primary"
                  autocomplete="off"
                  placeholder="example@example.com"
                  value={this.state.email}
                  onChange={this.handleOnChange}
                  required
                />
              </div>
              <div className="m-3 flex items-center flex-col sm:flex-row justify-between">
                <label htmlFor="message" className="m-3">
                  Message
                </label>
                <textarea
                  rows="4"
                  cols="25"
                  name="message"
                  form="contact"
                  className="rounded-lg p-3 w-48 sm:min-w-sm bg-primary"
                  placeholder="Enter your message here!"
                  value={this.state.message}
                  onChange={this.handleOnChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="py-3 px-8 m-3 rounded-lg bg-primary text-accent hover:bg-tertiary"
              >
                Send
              </button>
            </form>
            <div className="w-auto m-6">
              <p>You can find me on:</p>
              <ul className="mt-3 rounded-lg bg-secondary p-3">
                {this.state.list.map((item) => {
                  return (
                    <a
                      href={item.url}
                      key={item.name.toString()}
                      className="m-3 w-auto hover:text-accent"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  )
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Contact