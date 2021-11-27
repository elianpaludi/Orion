import React from 'react'
import './meet.scss'

const handleMarket = () => {
    window.location.href = '/marketplace'
}

const Meet = () => {

    return (
        <section class="section-meet">
            <h2>Meet Orion</h2>
            <p>The NFT marketplace with everthing for everyone</p>

            <div className="meet-container">
                <video src=""></video>
            </div>

            <button onClick={handleMarket}>Explore the marketplace</button>
        </section>
    )
}

export default Meet
