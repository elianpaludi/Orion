import React from 'react'
import Header from '../components/landing/header/Header.jsx'
import Body from '../components/landing/body/Body.jsx'
import Meet from '../components/landing/meet/Meet.jsx'
import Nav from '../components/landing/nav/Nav.jsx'
import Footer from '../components/landing/footer/Footer.jsx'

import Category from '../hooks/category/Category.jsx'
import '../hooks.scss'
const landing = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Body />
      <div className="category-flex">
        <Category
          img={
            'https://www.eluniversal.com.mx/sites/default/files/2015/06/10/noche_estrellada_entender_arte_st.jpg'
          }
          text={'Art'}
        />
        <Category
          img={
            'https://www.legaltoday.com/wp-content/uploads/2021/03/disco.jpg'
          }
          text={'Music'}
        />
        <Category
          img={
            'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/202018904/original/56f7b9594bcba46e5f71754dd116ecf9d4ead9dd/create-nft-collectible-cards-for-musicians-and-producers.jpg'
          }
          text={'Cards'}
        />
      </div>

      <Meet />
      <Footer/>
    </div>
  )
}

export default landing
