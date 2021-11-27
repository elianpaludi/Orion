import React from 'react'
import './footer.scss'
const Footer = () => {
    return (
        <footer>
            <section className="footer-container">
                <h2>Stay in the loop</h2>
                <h3>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating Orion.</h3>
            <div className="footer-email">
                <input type="email" placeholder="Your email address"/>
                <input type="submit" value="Sign up" />
            </div>

            <div className="divisor"></div>
            </section>
        </footer>
    )
}

export default Footer
