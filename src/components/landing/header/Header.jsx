import React from 'react'

import './header.scss'
import './headerRS.scss'

import Userheader from '../../../hooks/userheader/Userheader.jsx'
const Header = () => {


    return (
        <header>
        <div className="container-header-flex">
            <div class="container-text">
                <h2>Discover, collect, and sell extraordinary NFTs</h2>
                <h3>on the world's first & largest NFT marketplace</h3>
                <div>
                    <button>Explore</button>
                    <button>Create</button>
                </div>
            </div>
            <div class="container-bestseller">
                <Userheader/>
            </div>
        </div>
        </header>
    )
}

export default Header
