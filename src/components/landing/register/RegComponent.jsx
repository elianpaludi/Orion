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
      <label class="label">
        Full name <span>{err}</span>
      </label>
      <div class="control">
        <input
          id="fullname"
          class="input"
          type="text"
          placeholder="Marshall Bruce Mathers"
        />
      </div>
      <label class="label">Artistic name</label>
      <div class="control">
        <input id="name" class="input" type="text" placeholder="Eminem" />
      </div>
      <label class="label">Email</label>
      <div class="control">
        <input
          id="email"
          class="input"
          type="text"
          placeholder="slimshady@gmail.com"
        />
      </div>
      <label class="label">Password</label>
      <div class="control">
        <input
          id="password"
          class="input"
          type="password"
          placeholder="********"
        />
      </div>
      <p class="help">6 characters, two of them must be numbers</p>
      <input type="submit" class="button is-link" value="Continue" />
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
