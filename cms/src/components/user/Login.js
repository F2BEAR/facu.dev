import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/actions'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [userInput, setUserInput] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [redirectTo, setRedirectTo] = useState('')
  const dispatch = useDispatch()

  const loggIt = async (e) => {
    e.preventDefault()
    const config = {
      method: 'post',
      url: 'http://localhost:666/auth/login',
      headers: { Accept: '*/*', 'Content-Type': 'application/json' },
      data: { name: userInput, password: password }
    }

    await axios(config)
      .then((res) => {
        let data = res.data
        dispatch(login(userInput, data.userId, data.rol, data.token))
        setPassword('')
        setUserInput('')
        setRedirect(true)
        setRedirectTo('/')
      })
      .catch((err) => console.error(err))
  }

  if (redirect === true) {
    return <Redirect to={redirectTo} />
  }
  return (
    <div>
      <div className="content w-screen m-0 p-0 flex flex-col justify-center items-center text-center bg-primary text-primary">
        <h1 className="p-3 font-bold text-6xl m-9">Portfolio-CMS</h1>
        <form
          className="bg-secondary rounded-lg shadow-lg p-10 h-2xl w-xl"
          onSubmit={(e) => loggIt(e)}
        >
          <h2>Login!</h2>
          <div className="rounded-lg p-3 m-2">
            <label htmlFor="user" className="m-2">
              Username:
            </label>
            <input
              name="user"
              id="user"
              className="rounded-md p-2 bg-primary text-center"
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="xXExampleUser77Xx"
              autoComplete="on"
              autoFocus
              required
            />
          </div>
          <div className="rounded-lg p-3 m-2">
            <label htmlFor="password" className="m-2">
              Password:{' '}
            </label>
            <input
              name="password"
              id="password"
              className="rounded-md p-2 bg-primary text-center"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="fdds*2@11"
              autoComplete="on"
              minLength="8"
              required
            />
          </div>
          <input type="submit" className="rounded-lg bg-tertiary p-3 m-2" />
        </form>
      </div>
    </div>
  )
}

export default Login
