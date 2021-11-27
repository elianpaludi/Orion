import React from 'react'
import './wallet.scss'
import WalletH from '../../../hooks/walletH/WalletH.jsx';

const WalletC = () => {
    return (
        <div class="wallet">
            <div className="text">
                <h2>Connect your wallet.</h2>
                <p>Connect with one of our available wallet info providers or create a new one.</p>
            </div>
            <div class="wallet-options">
                <WalletH
                WalletIMG = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png'
                WalletName = 'Metamask'
                />
                <WalletH
                WalletIMG = 'https://s2.coinmarketcap.com/static/img/coins/200x200/5964.png'
                WalletName = 'Trust Wallet'
                />
            </div>
        </div>
    )
}

export default WalletC
