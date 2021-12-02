import React from 'react'

import CollectionsIcon from '@material-ui/icons/Collections';

import './item.scss'

const ItemMarketplace = ({ getNFT, nameNFT, authorNFT, priceNFT }) => {
  return (
    <article class="item-market">
      <div className="nft-img">
        <img src={getNFT} alt="" />
      </div>

      <div className="nft-info">
        <div className="data_container">
          <h5>{nameNFT}</h5>
          <h6>{authorNFT}</h6>
        </div>
        <div className="price_container">
            <h6>{priceNFT}</h6>
        </div>
      </div>
        <div class="bottom-container">
            <CollectionsIcon></CollectionsIcon>

            <div class="quantity"></div>
        </div>
    </article>
  )
}
export default ItemMarketplace
