import React from 'react'
import './nav.scss'
import './navRS.scss'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import SearchIcon from '@material-ui/icons/Search'
import logoChico from '../../../img/orionChico.png'

const Nav = () => {
  function cositas() {
    let container = document.getElementsByClassName('container-boton')[0]
    let containerNav = document.getElementById('container-nav')

    if (container.classList.contains('active')) {
      container.classList.remove('active')
      containerNav.classList.add('hidden')
    } else {
      container.classList.add('active')
      containerNav.classList.remove('hidden')
    }
  }

  let account = document.getElementById('account-box')

  function goReg() {
    window.location.href = '/register'
  }

  function goWallet() {
    window.location.href = '/wallet'
  }

  const home = () => {
    window.location.href = '/'
  }


const goMarket = () => {
    window.location.href = '/marketplace'
}

const goCreate = () => {
    window.location.href = '/create'
}

  return (
    <nav>
      <img onClick={home} src={logoChico} alt="" />

      <div onClick={cositas} id="container-boton" className="container-boton">
        <div className="boton"></div>
      </div>
        <input className="fear" type="text" placeholder="Search" />
      <ul class="fear">
        <li onClick={goMarket}>Marketplace</li>
        <li>Resources</li>
        <li onClick={goCreate}>Create</li>

        <div onClick={goReg} id="account-box">
          <AccountBoxIcon />
        </div>

        <div onClick={goWallet} id="account-wallet">
          <AccountBalanceWalletIcon />
        </div>
      </ul>

      <section id="container-nav" class="container-responsive hidden">
        <ul className="list-responsive_nav">
            <input type="text" placeholder="Search" />
          <li onClick={goMarket}>Marketplace</li>
          <li>Resources</li>
          <li onClick={goCreate}>Create</li>

          <div onClick={goReg} id="account-box">
          <AccountBoxIcon/>
          </div>

          <div onClick={goWallet} id="account-wallet">
          <AccountBalanceWalletIcon />
          </div>
        </ul>
      </section>
    </nav>
  )
}

export default Nav
