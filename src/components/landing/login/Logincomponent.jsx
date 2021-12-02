import React from 'react'
import 'bulma/css/bulma.min.css'
import './login.scss'

const reg = () => {
  window.location.href = '/register'
}

const Logincomponent = () => {
  return (
    <form>
      <label className="label">Email</label>
      <div className="control">
        <input
          id="email"
          className="input"
          type="text"
          placeholder="example@gmail.com"
        />
      </div>
      <label className="label">Password</label>
      <div className="control">
        <input
          id="password"
          className="input"
          type="password"
          placeholder="********"
        />
      </div>
      <p className="help">6 characters, two of them must be numbers</p>
      <input type="submit" className="button is-link" value="Login" />

      <p>
        You do not have an account? <a onClick={reg}>Click here to sign up</a>
      </p>
    </form>
  )
}

export default Logincomponent
