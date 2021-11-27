import React from 'react'
import './wallet.scss'
const WalletH = ({WalletName, WalletIMG}) => {
    return (
        <div class="wallet-container">
            <img src={WalletIMG} alt=""/>
            <h2>{WalletName}</h2>
        </div>
    )
}

export default WalletH
