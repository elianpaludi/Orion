import React from 'react'
import 'bulma/css/bulma.min.css'

const reg = () => {
  window.location.href = '/register'
}

const Logincomponent = () => {
  return (
    <form>
      <label class="label">Email</label>
      <div class="control">
        <input
          id="email"
          class="input"
          type="text"
          placeholder="example@gmail.com"
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
      <input type="submit" class="button is-link" value="Login" />

      <p>
        You do not have an account? <a onClick={reg}>Click here to sign up</a>
      </p>
    </form>
  )
}

export default Logincomponent
