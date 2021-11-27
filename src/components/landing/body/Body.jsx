import React from 'react'
import './body.scss'
import sale from '../../../img/sale.svg'
import wallet from '../../../img/wallet.svg'
import nft from '../../../img/nft.svg'
import collection from '../../../img/collection.svg'

const Body = () => {
    return (
        <main>
            <h1>Create and sell your NFTs</h1>
            <div className="container-nft_list">
                <div className="item-nft">
                    <img src={wallet} alt="" />
                    <h2>Set up your Solana Wallet</h2>
                    <p>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</p>
                </div>
                <div className="item-nft">
                    <img src={collection} alt="" />
                    <h2>Set up your Solana Wallet</h2>
                    <p>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</p>
                </div>
                <div className="item-nft">
                    <img src={nft} alt="" />
                    <h2>Set up your Solana Wallet</h2>
                    <p>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</p>
                </div>
                <div className="item-nft">
                    <img src={sale} alt="" />
                    <h2>Set up your Solana Wallet</h2>
                    <p>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</p>
                </div>
            </div>

            
        </main>
    )
}

export default Body
