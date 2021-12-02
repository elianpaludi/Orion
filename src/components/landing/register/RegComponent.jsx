import React from 'react'
import 'bulma/css/bulma.min.css'

import './register.scss'

let err = ''

const validation = (err) => {
  let name = document.getElementById('name').value
  let fullname = document.getElementById('fullname').value
  let password = document.getElementById('password').value

  let flag = false
  if (fullname.length < 2) {
    err = 'Name is required'
  } else {
    err = ''
    flag = true
    alert('h')
  }

  return err
}

const login = () => {
  window.location.href = '/login'
}
const Register = () => {
  return (
    <form onSubmit={validation}>
      <label className="label">
        Full name <span>{err}</span>
      </label>
      <div className="control">
        <input
          id="fullname"
          className="input"
          type="text"
          placeholder="Marshall Bruce Mathers"
        />
      </div>
      <label className="label">Artistic name</label>
      <div className="control">
        <input id="name" className="input" type="text" placeholder="Eminem" />
      </div>
      <label className="label">Email</label>
      <div className="control">
        <input
          id="email"
          className="input"
          type="text"
          placeholder="slimshady@gmail.com"
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
      <input type="submit" className="button is-link" value="Continue" />
      {/* <div className="progress-container">
          <progress class="progress is-link" value="15" max="100">15%</progress>
      </div> */}

      <p>
        Do you have account? <a onClick={login}>Click here to login</a>
      </p>
    </form>
  )
}

export default Register
