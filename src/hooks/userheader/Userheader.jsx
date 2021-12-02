import React from 'react'

import './userheader.scss'

const Userheader = () => {

    function getUserImage(){
        let image = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200";
        return image;
    }

    function getUsername(){
        let username = "Username";
        return username;
    }
    function getNFT(){
        let nft = "NFT name";
        return nft;
    }

    return (
        <aside class="container-user">
            <div class="nft-header">
                <img src="https://lh3.googleusercontent.com/LR4dHkyCDA1VTTcX9qMiwTgqm5364d1fFHsqp8zJYMo6Owi5CBisNAa_XGKaLlEU2jxVvp5B2baJ1RpkuSaaHNjh7IzWZNj43NXiGA=w422" alt="" />
            </div>
            <div className="footer">
                    <img class="user-image" src={getUserImage()} width="50" height="50"/> 
                    <div className="container-user_data">
                        <p>{getNFT()}</p>
                        <p>{getUsername()}</p>
                    </div>
            </div>
        </aside>
    )
}

export default Userheader
